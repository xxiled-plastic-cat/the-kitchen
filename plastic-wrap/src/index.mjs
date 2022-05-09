import {loadStdlib} from '@reach-sh/stdlib';
import * as ask from '@reach-sh/stdlib/ask.mjs';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);
const interact = { ...stdlib.hasRandom };

console.log('Hello app');
const startingBalance = stdlib.parseCurrency(1000000);

const isNFTOwner = await ask.ask(
  `Are you the NFTOwner?`,
  ask.yesno
);

let ctc = null;
let acc = null;

if(isNFTOwner) {
  const newAcc = await ask.ask(
    `Create new account?`,
    ask.yesno
  );
  if(newAcc){
    acc = await stdlib.newTestAccount(startingBalance);
  }
  ctc = acc.contract(backend);
}

const part = isNFTOwner ? ctc.p.NFTOwner : ctc.p.Platform;
await part(interact);

console.log('Thanks for buying!!');
process.exit(0);