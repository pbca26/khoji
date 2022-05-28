import {secondsToString} from './time-helpers';
import {transaction, transformedTransaction, geTxTypeValue} from '../types/types';

export const transformTransactions = (transactions: Array<transaction>) => {
  let transformedTransactions: Array<transformedTransaction> = [];

  for (let i: number = 0; i < transactions.length; i++) {
    transformedTransactions[i] = transactions[i];
    transformedTransactions[i].timestampHumanReadable = secondsToString(transactions[i].timestamp);
    //transactions[i].shielded = transactions[i].shielded ? 'Yes' : 'No';
    transformedTransactions[i].typeHumanReadable = geTxTypeValue(transactions[i].type); 
  
    let fundsMovent: any = { // TODO
      in: {},
      out: {},
    };
    console.log('tx data', transactions[i]);

    for (let j = 0; j < transactions[i].vin.length; j++) {
      const vin = transactions[i].vin[j];
      console.log(vin)

      if (vin.address) {
        if (!fundsMovent.in[vin.address]) fundsMovent.in[vin.address] = vin.value;
        fundsMovent.in[vin.address] += vin.value;
      }
    }

    for (let j = 0; j < transactions[i].vout.length; j++) {
      const vout = transactions[i].vout[j];
      console.log(vout)

      if (vout.scriptPubKey && vout.scriptPubKey.addresses) {
        if (!fundsMovent.out[vout.scriptPubKey.addresses[0]]) fundsMovent.out[vout.scriptPubKey.addresses[0]] = vout.value;
        fundsMovent.out[vout.scriptPubKey.addresses[0]] += vout.value;
        transformedTransactions[i].vout[j].address = vout.scriptPubKey.addresses[0];
      }
    }

    transformedTransactions[i].movement = {
      input: Object.entries(fundsMovent.in),
      output: Object.entries(fundsMovent.out)
    };

    console.warn('tx ', i, 'funds movement', transformedTransactions[i].movement);
  }

  return transactions;
};