# smoothie contract
Not specificlaly NFT related, but a general lottery protocol using network tokens

## Participants
Lottery Owner - Creates the contract and sets the lottery parameters
Ticket Buyers - Multiple users that buy lottery tickets with network tokens - one of whom wins the pot.

## What data is transferred
Lottery parameters - Set by owner - duration, ticket limit, ticket cost, multi-ticket allowed, jackpot split
Lottery Tickets - minted token representing the ticket that a user has for the lottery. Has metadata matching to the lottery

## Contract duration
Defined by owner - max 1 month

## Contract ending
Contract ends in one of two ways:
1. Time duration ends, winner is chosen, prize is paid out
2. Lottery owner cancels lottery early, all funds returned to users

## contract steps
1. Owner sets lottery parameters - duration, ticket limit, ticket cost, multi-ticket allowed, jackpot split
2. Tickets minted based on ticket limit
3. While loop for lottery initiated and lottery open based on duration supplied
---
4. User buys ticket(s) and transfers Algo for a number of tickets.
5. No refunds
6. No resale - ticket tied to wallet address
---
7. Duration ends.
8. User wallet address selected to win.
9. Total Algo in wallet - 1 is divided baased on jackpot split.
10. Lottery owner transferred their share
11. Winner transferred their share.
12. Remaining Algo returned to Lottery owner
13. Contract closed.

## Considerations
