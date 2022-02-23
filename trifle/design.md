# trifle contract
Bundling NFTs into a secondary NFT for selling/buying through marketplaces. Contract holds original NFTs, trifle NFT is used as key to redeem original NFTs.

## Participants
Trifle Maker - original owner of the NFTs to be bundled together. Also supplies parameters - contract duration
Buyer - the user that buys the bundle for the price specified

## What data is transferred
Original NFTs are transferred to the contract
Trifle bundle is minted and transferred to the original owner
Owner sells the bundle separately
Buyer can exchange the bundle for the original NFTs

## Contract duration
Set by maker

## Contract ending
Contract ends in 2 ways
1. Duration is reached
2. The maker cancels the sale

## contract steps
1. trifle maker creates contract - supplies NFTs, sale duration and price and 1 Algo (for transactions)
2. bundled NFT minted with clawback
3. bundled NFT transferred to maker
---
4. Maker sells NFT on marketplace
5. Buyer buys bundled NFT
---
6. Buyer exchanges bundled NFT for original NFTs
7. Remaining Algo returned to maker
8. contract closed

## Considerations
Care needs to be takne around the clawback and resolution of the contract on ending.