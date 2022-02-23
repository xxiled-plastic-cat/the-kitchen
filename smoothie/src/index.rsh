'reach 0.1';

//duration, ticket limit, ticket cost, jackpot split (reperesented by the split for the winner)
const lotteryParams = [UInt, UInt, UInt, UInt];

const lotteryAPI = API('lotteryAPI', {
  buyTicket: Fun([UInt], Bool),
  cancelLottery: fun([], Bool)
});

export const main = Reach.App(() => {
  const Owner = Participant('Owner', {
    getLotteryParams: Fun([], lotteryParams)
  });
  const TicketBuyer = Participant('TicketBuyer', {

  });
  init();

  //should mint the tickets in the contract

  Owner.only(() =>{
    const [duration, ticketLimit, ticketCost, jackpotSplit] = declassify(interact.getLotteryParams());
  });

  Owner.publish(duration, ticketLimit, ticketCost, jackpotSplit)
    .pay(5);
  TicketBuyer.publish();
  const ticketHolders = new Map(UInt);
  commit();

  const ticket = new Token({
    name: "Lottery Ticket",
    symbol: "LOTTO",
    supply: ticketLimit,
    decimals: 0
  });

  const [timeRemaining, keepGoing] = makeDeadline(duration);
    const numBought = 
      parallelReduce(0)
        .invariant(balance(ticketToken) == (ticketLimit - numBought))
        .while(numBought < ticketLimit)
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
          .api(lotteryAPI.cancelLottery,
            (apiReturn) => {
              //return all funds to participants
              Map.forEach(ticketHolders, (addr) => {
                transfer(ticketCost).to(addr);
              });
              apiReturn(true);
              return numBought + (ticketLimit - numBought);
            })
          .timeRemaining(timeRemaining());
            commit();
          
          
            assert(ticket.destroyed() == false);
            ticket.destroy();
          
    commit();
    exit();
});
