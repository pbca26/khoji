import Vue from 'vue';
import axios from 'axios';
//import {blocks} from './mockData';
//import {apiURL, isMock} from '../config';
import {apiURL} from '../config';
import {secondsToString} from './time-helpers';
import {block} from '../types/types';

export default Vue.extend({
  name: 'BlocksTable',
  data() {
    const initBlocks: block[] = [];

    return {
      fields: [
        'height',
        'miner',
        {
          key: 'timestampHumanReadable',
          label: 'Time',
        }
      ],
      blocks: initBlocks,
      //blocks: isMock ? blocks : null,
    }
  },
  methods: {
    transformBlocks(blocks: Array<block>): Array<block> {
      for (let i = 0; i < blocks.length; i++) {
        blocks[i].timestampHumanReadable = secondsToString(blocks[i].timestamp);
      }

      return blocks;
    },
    fetchData () {
      axios
      .get(`${apiURL}/blocks/last`)
      .then(response => (this.blocks = this.transformBlocks(response.data)));
    }
  },
  mounted () {
    this.fetchData();
  }
});