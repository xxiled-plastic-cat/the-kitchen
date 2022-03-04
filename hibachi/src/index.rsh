'reach 0.1';

const TokenPay = Tuple(UInt, Token);
const apiPayment = Tuple(UInt, TokenPay, TokenPay); // TokenPay may be the same
//stake token ID, reward token ID, reward token supply and network token payment
const poolParams = Tuple(Token, Token, UInt, UInt);


export const main = Reach.App(() => {

  const hibachiAPI = API('hibachiAPI', {
    sitAtTheTable: Fun([apiPayment], Bool),
    leaveTheTable: Fun([], TokenPay)
  });

  const Chef = Participant('Chef', {
    createStakingPool: Fun([], poolParams)
  });

  const Customer = Participant('Customer', {
    
  });


  init();

  
  exit();
});
