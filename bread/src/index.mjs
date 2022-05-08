import {loadStdlib} from '@reach-sh/stdlib';
import * as ask from '@reach-sh/stdlib/ask.mjs';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

  const startingBalance = stdlib.parseCurrency(1000000);

  const acc = await stdlib.newTestAccount(startingBalance);
  

  console.log('Hello all test accts');
  
  const getBalanceGCard = async () => (await stdlib.balanceOf(accBuyer1, gCard.id));

  const isCreator = await ask.ask(
    `Are you the creator?`,
    ask.yesno
  );
  const interact = { ...stdlib.hasRandom };
  let ctc = null;
  if(isCreator) {
    ctc = acc.contract(backend);
    const gCard = await stdlib.launchToken(acc, "Algogator Membership Card", "GCARD");
    await gCard.mint(accSeller, startingBalance.mul(1));


    const creatorGCardBalance = await stdlib.balanceOf(acc, gCard.id);
    console.log(`You currently own ${creatorGCardBalance} membership cards`);

    ctc.getInfo().then((info) => {
      console.log(`The contract is deployed as = ${JSON.stringify(info)}`); 
    });

      interact.getMerchParams = async () => {
        console.log(`Getting merch params`);
        return [10, 1, gCard.id];
      };

      interact.getDeadline = async () => {
        return { ETH: 100, ALGO: 1000, CFX: 1000 }[stdlib.connector];
      };
      console.log(`Contract has been seeded by the creator ready for buyers!`);  

  } else {
    console.log(`Hello buyer!`);

    const info = await ask.ask(
      `Please paste the contract information:`,
      JSON.parse
    );
    const ctc = acc.contract(backend, info);
    const currentGCardBalance = await stdlib.balanceOf(acc, gCard.id);
    console.log(`You currently own ${currentGCardBalance} membership cards`);

    if(currentGCardBalance == 0) {
      const buy = await ask.ask(
        `Would you like to buy and Algogator Membership Card?`,
        ask.yesno
      );
      if(buy)
      {

        await ctc.a.plasticAPI.buyMerch(10);

        interact.saleComplete = async (sale) => {
          console.log(`Sale complete!`);
        };
        const newGCardBalance = await stdlib.balanceOf(acc, gCard.id);
        console.log(`You now own ${newGCardBalance} membership cards!`);
      }
    } else {
      console.log(`You already own a membership card! Lucky you!`);
    }
  }
    
  const part = isCreator ? ctc.p.Seller : ctc.p.Buyer;
  await part(interact);

  console.log('Thanks for buying!!');
process.exit(0);