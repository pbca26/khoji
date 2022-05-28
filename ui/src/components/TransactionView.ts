import axios from 'axios';
import {apiURL} from '../config';
import {transformTransactions} from './transaction-helpers';
import Vue from 'vue';

export default Vue.extend({
  computed: {
    hash(): string {
      return this.$route.params.hash;
    },
  },
  data() {
    return {
      transactionDetails: {},
    }
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      axios
        .get(`${apiURL}/transaction/${this.$route.params.hash}`)
        .then(response => (this.transactionDetails = transformTransactions([response.data])[0]));
    }
  },
  mounted () {
    this.fetchData();
  },
});