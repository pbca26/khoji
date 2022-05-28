import axios from 'axios';
import {apiURL} from '../config';

export default {
  name: 'IdentityView',
  computed: {
    name() {
      return this.$route.params.name;
    },
  },
  data() {
    return {
      identityDetails: null,
    }
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      axios
        .get(`${apiURL}/identity/${this.$route.params.name}`)
        .then(response => (this.identityDetails = response.data));
    }
  },
  mounted () {
    this.fetchData();
  },
}