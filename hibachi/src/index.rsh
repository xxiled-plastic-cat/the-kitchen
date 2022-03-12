'reach 0.1';

const TokenPay = Tuple(UInt, Token);
const apiPayment = Tuple(UInt, TokenPay); // TokenPay may be the same
//stake token ID, reward token ID, reward token supply and network token payment
const poolParams = Tuple(Token, Token, UInt, UInt);


export const main = Reach.App(() => {

  const hibachiAPI = API('hibachiAPI', {
    sitAtTheTable: Fun([apiPayment], UInt),
    catchShrimp: Fun([], UInt),
    leaveTheTable: Fun([], TokenPay)
  });

  const Chef = Participant('Chef', {
    createStakingPool: Fun([], poolParams),
    getDeadline: Fun([], UInt)
  });

  const Customer = Participant('Customer', {
    getStakingAmount: Fun([], UInt)
  });

  init();

  Chef.only(() => {
    const [stakeTokenID, rewardTokenID, rewardSupply, networkTokenPayment] = declassify(interact.createStakingPool());
    const dl = declassify(interact.getDeadline());
  });

  Chef.publish(stakeTokenID, rewardTokenID, rewardSupply, networkTokenPayment, dl);
  commit();

  Customer.only(() => {
    const stakeAmount = declassify(interact.getStakingAmount());
  });
  Customer.publish(stakeAmount);
  commit();

  Chef.pay([5,[rewardSupply, rewardTokenID]]);
  commit();
  Chef.publish();

  const [timeRemaining, keepGoing] = makeDeadline(dl);
  const rewardsPaid = 
    parallelReduce(0)
      .invariant(balance(rewardTokenID) == (rewardSupply - rewardsPaid))
      .paySpec([stakeTokenID])
      .while(rewardsPaid < rewardSupply)
      .api(hibachiAPI.sitAtTheTable,    
        ([pmt, [sAmt, sTok]]) => {
          assume(pmt == networkTokenPayment); 
          assume(sAmt > 0);
        },      
        (_) => [networkTokenPayment, [stakeAmount, stakeTokenID]]
        ,
        ([pmt, [sAmt, sTok]], apiReturn) => {
          require(pmt == networkTokenPayment); 
          require(sAmt > 0);

          transfer(pmt).to(Chef);

          apiReturn(0);      
          return 0;
        } )
        .api(hibachiAPI.catchShrimp,    
          
          (apiReturn) => {
              
            //transfer(pmt).to(Chef);
  
            apiReturn(rewardsPaid+1);      
            return rewardsPaid+1;
          } )

        .timeRemaining(timeRemaining());
          commit();
        
        
  commit();
  exit();
});
