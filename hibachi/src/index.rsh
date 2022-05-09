'reach 0.1';

const TokenPay = Tuple(UInt, Token);
const apiPayment = Tuple(UInt, TokenPay); // TokenPay may be the same
//stake token ID, reward token ID, reward token supply and network token payment
const poolParams = Tuple(Token, Token, UInt, UInt);


export const main = Reach.App(() => {

  const hibachiAPI = API('hibachiAPI', {
    sitAtTheTable: Fun([apiPayment], UInt),
    catchShrimp: Fun([apiPayment, UInt], UInt),
    addToOrder: Fun([apiPayment], Bool),
    leaveTheTable: Fun([apiPayment], Bool)
  });

  const Chef = Participant('Chef', {
    createStakingPool: Fun([], poolParams),
    getDeadline: Fun([], UInt)
  });

  const Customer = Participant('Customer', {
    getStakingAmount: Fun([], UInt),

  });

  const vOrder = View('Order', {
    currentStake: UInt,
  });
  const vRewardsPaid = View('RewardsPaid', {
    totalRewardsOut: UInt,
  });

  init();


  Chef.only(() => {
    const [stakeTokenID, rewardTokenID, rewardSupply, networkTokenPayment]
    = declassify(interact.createStakingPool());
    const dl = declassify(interact.getDeadline());
  });

  Chef.publish(
    stakeTokenID, rewardTokenID, rewardSupply, networkTokenPayment, dl);
  commit();

  Customer.only(() => {
    const stakeAmount = declassify(interact.getStakingAmount());
  });
  Customer.publish(stakeAmount);
  commit();

  Chef.pay([5,[rewardSupply, rewardTokenID]]);
  commit();
  Chef.publish();
  const customersAtTheTable = new Map(UInt); // represents the users that are currently staking with their stake amount



  const [timeRemaining, keepGoing] = makeDeadline(dl);
  const rewardsPaid =
    parallelReduce(0)
      .invariant(balance(rewardTokenID) != rewardSupply)
      .paySpec([stakeTokenID])
      .while(rewardSupply > 0)
      //API call to initially stake tokens in the contract
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
          customersAtTheTable[this] = sAmt;
          vOrder.currentStake.set(sAmt);
          transfer(networkTokenPayment).to(Chef);

          apiReturn(0);
          return 0;
        } )
        //API call to collect rewards from staking - reward amount is calcualted on the front end
        .api(hibachiAPI.catchShrimp,
          ([pmt, [sAmt, sTok]], reward, apiReturn) => {

            transfer(reward).to(this);
            
            apiReturn(reward);
            return rewardsPaid+1;
          } )
          //API call to remove stake
          .api(hibachiAPI.leaveTheTable,
            ([pmt, [sAmt, sTok]], apiReturn) => {

              const getStakeTotal = (m) => fromMaybe(m, (() => 0), ((x) => x));
              const totalStake = getStakeTotal(customersAtTheTable[this]);
              transfer(totalStake).to(this);

              apiReturn(true);
              return rewardsPaid;
            } )

        .timeRemaining(timeRemaining());
          commit();

          Chef.publish();
            if(balance(rewardTokenID) > 0){
              transfer(balance(rewardTokenID)).to(Chef);
            }
            if(balance(stakeTokenID) > 0) {
              transfer(balance(stakeTokenID)).to(Chef);
            }
            if(balance() > 0){
              transfer(balance()).to(Chef);
            }
commit();
  exit();
});
