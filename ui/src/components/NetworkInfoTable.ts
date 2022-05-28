
import axios from 'axios';
import {networkInfo} from './mockData';
import {apiURL, isMock} from '../config';
import Vue from 'vue';

export default Vue.extend({
  name: 'NetworkInfoTable',
  data() {
    return {
      networkInfo: isMock ? networkInfo : null,
    }
  },
  mounted() {
    axios
      .get(`${apiURL}/network`)
      .then(response => (this.networkInfo = response.data))
      .catch(error => {
        console.warn('NetworkInfoTable axios error', error);
      });
  }
});