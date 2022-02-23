# plastic-wrap contract
NFT wrapping contract - original NFT stored in contract as a vault, user is given a wrapped NFT in return which also acts as the key to retrieving the original NFT and closing the contract. Each iteration of the contract is specific to the user's wallet. Multiple NFTs can be wrapped within one contract.

## Participants
NFT Owner - supplies original NFT and receives the wrapped NFT in it's place

## What data is transferred
Original NFT is sent and stored in contract
wrapped NFT is minted and sent back  - requires clawback

## Contract Duration
Fixed time periods - 1 month, 3 months, 6 months

## Contract ending
Contract ends after time period OR if wrapped NFT owner transfers the wrapped NFT back to the contract. Wrapped NFT will be minted with clawback to allow for wrapped NFT to be swapped back for original at end of time period.