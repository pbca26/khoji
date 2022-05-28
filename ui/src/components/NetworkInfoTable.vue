<template>
  <div class="networks-table">
    <h4>Network Info</h4>
    <b-spinner v-if="networkInfo === null" type="grow"></b-spinner>
    <table v-if="networkInfo" class="table b-table table-striped table-hover text-left">
      <tbody>
        <tr>
          <td>
            VRSC version
          </td>
          <td>
            {{ networkInfo.VRSCversion }}
          </td>
        </tr>
        <tr>
          <td>
            VRSC network
          </td>
          <td>
            {{ networkInfo.name }}
          </td>
        </tr>
        <tr>
          <td>
            Peers
          </td>
          <td>
            {{ networkInfo.peerCount }}
          </td>
        </tr>
        <tr>
          <td>
            Longest height
          </td>
          <td>
            {{ networkInfo.blockNumber }}
          </td>
        </tr>
        <tr>
          <td>
            Blocks
          </td>
          <td>
            {{ networkInfo.lastSynced }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
  .text-left {
    text-align: left;
  }
  .networks-table {
    margin-top: 30px;
  }
</style>

<script lang="ts">
  import NetworkInfoTable from './NetworkInfoTable';
  export default NetworkInfoTable;
</script>