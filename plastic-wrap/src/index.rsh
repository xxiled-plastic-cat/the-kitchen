'reach 0.1';

const wrapParams = Object({
  name: Bytes(32), symbol: Bytes(8),
  url: Bytes(96), metadata: Bytes(32),
  supply: UInt});

  const NFTPay = Tuple(UInt, Token);
  const apiPayment = Tuple(UInt, NFTPay, NFTPay);

export const main = Reach.App(() => {

  const plasticWrapAPI = API('plasticWrapAPI', {
    wrapNFT: Fun([apiPayment], Token), 
    unwrapNFT: Fun([apiPayment], Bool)
  });

  const NFTOwner = Participant('NFTOwner', {
    wrapComplete: Fun([Bool], Null),
    unwrapComplete: Fun([Bool], Null),
    getOriginalNFT: Fun([], Token),
    getWrapParams: Fun([], wrapParams),
    NFTOptIn: Fun([], Bool)
  });

  const Platform = Participant('Platform', {
    cost: UInt,
    duration: UInt
  });

  init();
  NFTOwner.only(() => {
    const originalNFT = declassify(interact.getOriginalNFT());
    const { name, symbol, url, metadata, supply } = declassify(interact.getWrapParams());
    const optedIn = declassify(interact.NFTOptIn());
  });
  NFTOwner.publish(originalNFT, optedIn, name, symbol, url, metadata, supply);
  const md1 = {name, symbol, url, metadata, supply};
  const wrappedNFT = new Token(md1);
  commit();
  Platform.only(() => {
    const cost = declassify(interact.cost);   
    const duration = declassify(interact.duration);
  });
  Platform.publish(cost, duration);
  commit();

  NFTOwner.publish();

  const [timeRemaining, keepGoing] = makeDeadline(duration);
  const alive = 
    parallelReduce(true)
      .invariant(balance() == balance())
      .while(true)
      .paySpec([originalNFT, wrappedNFT])


      .api(plasticWrapAPI.wrapNFT,     //wrapNFT: Fun([Tuple(UInt, Tuple(UInt, originalNFT(Token)), Tuple(UInt, WrappedNFT(Token)))], Token),
        ([pmt, [oPmt, oTok], [wPmt, wTok]]) => {
          assume(pmt == cost+1); 
          assume(balance(wrappedNFT) == supply);
        },      
        (_) => [cost, [1, originalNFT], [0, wrappedNFT]]
        ,
        ([pmt, [oPmt, oTok], [wPmt, wTok]], apiReturn) => {
          require(pmt == cost+1);    
          require(balance(wrappedNFT) == supply);

          transfer([[supply, wrappedNFT]]).to(this);
          transfer(pmt).to(Platform);    
          apiReturn(wrappedNFT);    
          return true;
        } )

         .api(plasticWrapAPI.unwrapNFT,            //unwrapNFT: Fun(Tuple(UInt, Tuple(UInt, originalNFTToken), Tuple(UInt, WrappedNFTToken)), Bool)
          ([pmt, [oPmt, oTok], [wPmt, wTok]]) => {           
            assume(pmt == 0);
            assume(oPmt == 0);
            assume(wPmt == 1);
            assume(balance(originalNFT) == 1);
          },
          (_) => [0, [0, originalNFT], [1, wrappedNFT]]
          ,
          ([pmt, [oPmt, oTok], [wPmt, wTok]], apiReturn) => {
            require(pmt == 0);
            require(oPmt == 0);
            require(wPmt == 1);
            require(balance(originalNFT) == 1);
            
            transfer([[1, originalNFT]]).to(this);

            apiReturn(true);
            return false;
          }) 

        .timeRemaining(timeRemaining());
          commit();
        
        Platform.publish();
        if(balance(wrappedNFT) > 0){
          wrappedNFT.burn();
        }
        if(!wrappedNFT.destroyed()){
          wrappedNFT.destroy();
        }

        if(balance(originalNFT) > 0) {
          transfer(balance(originalNFT)).to(NFTOwner);
        }
        if(balance() > 0) {
          transfer(balance()).to(Platform);
        }
          
        
  commit();
  exit();
});
