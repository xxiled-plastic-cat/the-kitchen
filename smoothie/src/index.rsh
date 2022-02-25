'reach 0.1';

//duration, ticket limit, ticket cost, jackpot split (reperesented by the split for the winner)
const lotteryParams = Tuple(UInt, UInt, UInt, UInt);
const tokenParams = Object({
  name: Bytes(32), symbol: Bytes(8),
  url: Bytes(96), metadata: Bytes(32),
  amt: UInt});

export const main = Reach.App(() => {

  const lotteryAPI = API('lotteryAPI', {
    buyTicket: Fun([UInt], Bool),
    cancelLottery: Fun([], Bool),
    drawLottery: Fun([], Address)
  });

  const Owner = Participant('Owner', {
    getLotteryParams: Fun([], lotteryParams),
    getTokenParams: Fun([], tokenParams)
  });
  const TicketBuyer = Participant('TicketBuyer', {

  });
  init();

  Owner.only(() =>{
    const [duration, supply, ticketCost, jackpotSplit] = declassify(interact.getLotteryParams());
    const { name, symbol, url, metadata, amt } = declassify(interact.getTokenParams());
  });

  Owner.publish(duration, supply, ticketCost, jackpotSplit, name, symbol, url, metadata, amt)
    .pay(5);
    const md1 = {name, symbol, url, metadata, supply};
    const ticket = new Token(md1);
    commit();

  TicketBuyer.publish();


  const [timeRemaining, keepGoing] = makeDeadline(duration);
    const numBought = 
      parallelReduce(0)
        .invariant(balance(ticket) == (supply - numBought))
        .while(numBought < supply)
        .api(lotteryAPI.buyTicket,    
          (pmt) => {
            assume(pmt == ticketCost); 
          },      
          (pmt) => pmt
          ,
          (pmt, apiReturn) => {
            require(pmt == ticketCost);

            transfer([[1, ticket]]).to(this);

            ticketHolders[this] = 1;
            apiReturn(true);    

            return numBought+1;
          } )
          /* .api(lotteryAPI.cancelLottery,
            (apiReturn) => {
              //return all funds to participants
              Map.forEach(ticketHolders, (addr) => {
                transfer(ticketCost).to(addr);
              });
              apiReturn(true);
              return numBought + (supply - numBought);
            }) */
            //draw lottery
            /* .api(lotteryAPI.drawLottery,
              (apiReturn) => { //returns address
                //return all funds to participants
                Map.forEach(ticketHolders, (addr) => {
                  transfer(ticketCost).to(addr);
                });
                apiReturn(true);
                return numBought + (supply - numBought);
              }) */
          .timeRemaining(timeRemaining());
            commit();
          
          Owner.publish();
          assert(ticket.supply() == supply - numBought);
          ticket.burn();
          assert(ticket.destroyed() == false);
          ticket.destroy();

            if(balance() > 0) {
              transfer(balance()).to(Owner);
            }
          
    commit();
    exit();
});
