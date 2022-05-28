import axios from 'axios';
import {apiURL} from '../config';
import Vue from 'vue';

export default Vue.extend({
  name: 'IdentityView',
  computed: {
    name(): string {
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
});