import axios from 'axios';
import {identities} from './mockData';
import {apiURL, isMock} from '../config';

export default {
  name: 'IdentitiesTable',
  data() {
    return {
      fields: ['name', 'blockheight', 'identityaddress', 'txid'],
      identities: isMock ? identities : null,
    }
  },
  mounted() {
    axios
      .get(`${apiURL}/identities/last`)
      .then(response => (this.identities = response.data))
  }
}