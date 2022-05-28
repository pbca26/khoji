import axios from 'axios';
import {apiURL} from '../config';

export default {
  name: 'BlockView',
  computed: {
    height() {
      return this.$route.params.height;
    },
  },
  data() {
    return {
      transactionFields: ['txid', 'value'],
      blockInfo: null,
    }
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    transformBlockTransactions(txs) {
      for (let i = 0; i < txs.length; i++) {
        let vinSum = 0, voutSum = 0;

        for (let j = 0; j < txs[i].vin.length; j++) {
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
}