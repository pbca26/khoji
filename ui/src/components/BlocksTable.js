import axios from 'axios';
import {blocks} from './mockData';
import {apiURL, isMock} from '../config';
import {secondsToString} from './time-helpers';

export default {
  name: 'BlocksTable',
  data() {
    return {
      fields: [
        'height',
        'miner',
        {
          key: 'timestampHumanReadable',
          label: 'Time',
        }
      ],
      blocks: isMock ? blocks : null,
    }
  },
  methods: {
    transformBlocks(blocks) {
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
}