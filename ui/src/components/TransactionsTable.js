import axios from 'axios';
import {transactions} from './mockData';
import {apiURL, isMock} from '../config';
import {transformTransactions} from './transaction-helpers';

export default {
  name: 'TransactionsTable',
  data() {
    return {
      fields: [
        'blockHeight',
        {
          key: 'timestampHumanReadable',
          label: 'Time',
        },
        'value',
        'type',
        'hash'
      ],
      transactions: isMock ? transactions : null,
    }
  },
  mounted () {
    axios
      .get(`${apiURL}/transactions/last`)
      .then(response => (this.transactions = transformTransactions(response.data)))
  }
}