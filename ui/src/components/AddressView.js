import axios from 'axios';
import {fromSats} from './math-helpers';
import {apiURL} from '../config';
import {transformTransactions} from './transaction-helpers';

// TODO: pbass parsing e.g. http://localhost:8081/transaction/0c9163e50b10010f00b8cfea98f47a1b7c3ad71da3108cde319c466f7f8da782
//       currency parsing e.g. http://localhost:8081/address/RU33ysc9FUcQx4dAEhThVgUaawusCKCXD2

export default {
  name: 'AddressView',
  computed: {
    address() {
      return this.$route.params.address;
    },
  },
  data() {
    return {
      balance: null,
      transactions: null,
    }
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData() {
      axios
        .get(`${apiURL}/balance/${this.$route.params.address}`)
        .then(response => (this.balance = fromSats(response.data.Balance)));
      axios
        .get(`${apiURL}/transactions/${this.$route.params.address}`)
        .then(response => (this.transactions = transformTransactions(response.data)));
    }
  },
  mounted () {
    this.fetchData();
  },
}