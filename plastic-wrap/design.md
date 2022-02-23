# plastic-wrap contract
NFT wrapping contract - original NFT stored in contract as a vault, user is given a wrapped NFT in return which also acts as the key to retrieving the original NFT and closing the contract. Each iteration of the contract is specific to the user's wallet. Multiple NFTs can be wrapped within one contract.

## Participants
NFT Owner - supplies original NFT and receives the wrapped NFT in it's place

## What data is transferred
Original NFT is sent and stored in contract
wrapped NFT is minted and sent back  - requires clawback

## Contract duration
Fixed time periods - 1 month, 3 months, 6 months

## Contract ending
Contract ends after time period OR if wrapped NFT owner transfers the wrapped NFT back to the contract. Wrapped NFT will be minted with clawback to allow for wrapped NFT to be swapped back for original at end of time period.

## contract steps
1. Owner sends NFT to contract plus 1 Algo (for transactions)
2. Front-end creates new wrapped NFT image
3. NFT is minted via front end with wrapped image and clawback
4. Wrapped NFT sent to NFT owner.
---
5. NFT Owner returns wrapped NFT to contract
6. Contract confirms this is the correct wrapped NFT and returns the corresponding original NFT
7. If no other NFTs in contract, remaining Algo is returned to NFT owner and contract closed.

## Considerations
Need secure method to verify wrapped NFT identity. This will be non-published data, privy only to the contract.