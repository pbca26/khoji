import axios from 'axios';
import {apiURL} from '../config';
import {transaction, transformedBlockTransaction} from '../types/types';
import Vue from 'vue';

export default Vue.extend({
  computed: {
    height(): string {
      return this.$route.params.height;
    },
  },
  data() {
    const initTransactions: transaction[] = [];
    return {
      transactionFields: ['txid', 'value'],
      blockInfo: {
        transactions: initTransactions,
      },
    }
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    transformBlockTransactions(txs: Array<transformedBlockTransaction>) {
      for (let i: number = 0; i < txs.length; i++) {
        let vinSum: number = 0, voutSum: number = 0;

        for (let j: number = 0; j < txs[i].vin.length; j++) {
          if (txs[i].vin[j].value) {
            vinSum += txs[i].vin[j].value;
          }
        }

        for (let j = 0; j < txs[i].vout.length; j++) {
          if (txs[i].vout[j].value) {
            voutSum += txs[i].vout[j].value;
          }
        }

        txs[i].vinSum = vinSum;
        txs[i].value = voutSum;
      }

      return txs;
    },
    fetchData () {
      axios
        .get(`${apiURL}/block/${this.$route.params.height}`)
        .then(response => {
          this.blockInfo = response.data;

          if (this.blockInfo.transactions) {
            this.blockInfo.transactions = this.transformBlockTransactions(response.data.transactions);
          }
        });
    }
  },
  mounted () {
    this.fetchData();
  },
});