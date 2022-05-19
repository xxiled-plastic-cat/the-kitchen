# hibachi contract
A permissionless Non-network toekn staking contract. Each instance of the contract is creater by the pool owner - the "Chef", "Customers" can stake the selected token and receive rewards paid out on a regular cycle (24 hours) in the same or another token.

## Participants
Chef - The owner of the contract who initialises the pool. Supplies the rewards and specifies the non-network token to be staked. 
Customer - A user who stakes the specific non-network token into the contract and receives rewards every 24 hours.
Platform - The Kitchen platform that takes a small one time fee from the Chef

## Contract duration
As long as the rewards exist

## Contract ending
Can not be ended in this version except by the rewards being completed.

## contract steps
1. Chef initialises contract - passes stake token ID, reward token ID, reward token supply and network token payment
2. Customer pays staking amount to contract
3. After 24 hours rewards are available to be claimed
4. Rewards are auto-compounded
5. Rewards run their course
6. All staked tokens are returned to customers
7. Contract ends.

## Considerations
auto compound, setting of reward period and returning stakes on contract end are all tricky.