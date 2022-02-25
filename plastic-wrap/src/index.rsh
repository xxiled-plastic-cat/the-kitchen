'reach 0.1';

const wrapParams = Object({
  name: Bytes(32), symbol: Bytes(8),
  url: Bytes(96), metadata: Bytes(32),
  amt: UInt});

export const main = Reach.App(() => {

  const plasticWrapAPI = API('plasticWrapAPI', {
    wrapNFT: Fun([Token, wrapParams], Bool),
    unwrapNFT: Fun([Token], Bool)
  });

  const NFTOwner = Participant('NFTOwner', {
    wrapComplete: Fun([Bool], Null),
    unwrapComplete: Fun([Bool], Null)
  });

  const Platform = Participant('Platform', {
    getAddress: Fun([], Address),
    cost: UInt
  });
  NFTOwner.publish();
  commit();
  Platform.only(() => {
    const platformAddr = declassify(interact.getAddress());
    const cost = declassify(interact.cost);
    Platform.Set(platformAddr);
  });
  Platform.publish(cost);
  commit();

  Init();

  const [timeRemaining, keepGoing] = makeDeadline(duration);
  const numBought = 
    parallelReduce(0)
      .invariant(balance(ticket) == (supply - numBought))
      .while(numBought < supply)

      .api(plasticWrapAPI.wrapNFT,     //wrap NFT
        (pmt) => {
          assume(pmt == cost); 
        },      
        (pmt) => pmt
        ,
        (pmt, apiReturn) => {
          require(pmt == cost);

          transfer([[1, ticket]]).to(this);

          ticketHolders[this] = 1;
          apiReturn(true);    

          return numBought+1;
        } )
        .api(plasticWrapAPI.unwrapNFT, //unwrap NFT
          (apiReturn) => {
            //return all funds to participants
            Map.forEach(ticketHolders, (addr) => {
              transfer(ticketCost).to(addr);
            });
            apiReturn(true);
            return numBought + (supply - numBought);
          }) 
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
