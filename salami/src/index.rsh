'reach 0.1';

const sliceNFTParams = Object({
  name: Bytes(32), symbol: Bytes(8),
  url: Bytes(96), metadata: Bytes(32),
  supply: UInt});

  const NFTPay = Tuple(UInt, Token);
  const apiPayment = Tuple(UInt, NFTPay, NFTPay);


export const main = Reach.App(() => {

  const salamiAPI = API('salamiAPI', {
    sliceNFT: Fun([apiPayment], NFTPay), 
    reconstituteNFT: Fun([apiPayment], Bool)
  });

  const NFTOwner = Participant('NFTOwner', {
    getSliceNFTParams: Fun([], sliceNFTParams),
    getOriginalNFT: Fun([], Token),
    NFTOptIn: Fun([], Bool)
  });
  const Platform = Participant('Platform', {
    cost: UInt,
    duration: UInt
  });


  init();
 



  exit();
});
