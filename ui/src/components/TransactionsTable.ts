import axios from 'axios';
//import {transactions} from './mockData';
//import {apiURL, isMock} from '../config';
import {apiURL} from '../config';
import {transformTransactions} from './transaction-helpers';
import {transaction} from '../types/types';
import Vue from 'vue';

export default Vue.extend({
  name: 'TransactionsTable',
  data() {
    const initTransactions: transaction[] = [];
    
    return {
      fields: [
        'blockHeight',
        {
          key: 'timestampHumanReadable',
          label: 'Time',
        },
        'value',
        {
          key: 'typeHumanReadable',
          label: 'Type',
        },
        'hash'
      ],
      //transactions: isMock ? transactions : null,
      transactions: initTransactions
    }
  },
  mounted () {
    axios
      .get(`${apiURL}/transactions/last`)
      .then(response => (this.transactions = transformTransactions(response.data)))
  }
});