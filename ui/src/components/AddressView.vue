<template>
  <div>
    <h4 class="title">Address Details</h4>
    {{ address }}
    <h5 class="balance">Balance: {{ balance }} VRSCTEST</h5>
    <b-spinner v-if="balance === null || transactions === null" type="grow"></b-spinner>
    <div v-if="transactions">
      <h5>Transactions</h5>
      <table v-for="transactionDetails in transactions" :key="transactionDetails.hash" class="transacction-details-small margin-top table b-table table-striped table-hover text-left">
        <tbody>
          <tr>
            <td>
              Transaction ID
            </td>
            <td>
              <router-link :to="{ path: '/transaction/' + transactionDetails.hash }">{{ transactionDetails.hash }}</router-link>
            </td>
          </tr>
          <tr>
            <td>
              Height
            </td>
            <td>
              <router-link :to="{ path: '/block/' + transactionDetails.blockHeight }">{{ transactionDetails.blockHeight }}</router-link>
            </td>
          </tr>
          <tr>
            <td>
              Block hash
            </td>
            <td>
              <router-link :to="{ path: '/block/' + transactionDetails.blockHeight }">{{ transactionDetails.blockHash }}</router-link>
            </td>
          </tr>
          <tr>
            <td>
              Time
            </td>
            <td>
              {{ transactionDetails.timestampHumanReadable }}
            </td>
          </tr>
          <tr>
            <td>
              Type
            </td>
            <td>
              {{ transactionDetails.type }}
            </td>
          </tr>
          <tr>
            <td>
              Value
            </td>
            <td>
              {{ transactionDetails.value }}
            </td>
          </tr>
          <tr>
            <td>
              Version
            </td>
            <td>
              {{ transactionDetails.version }}
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <table class="transaction-movement-table">
                <thead>
                  <th>Inputs</th>
                  <th>Outputs</th>
                </thead>
                <tbody>
                  <tr>
                    <td v-if="transactionDetails.movement !== null && transactionDetails.movement.input !== null && transactionDetails.movement.input.length > 0">
                      <div v-for="[address, value] in transactionDetails.movement.input" :key="address" style="padding-bottom: 10px">
                        <router-link :to="{ path: '/address/' + address }">{{address}}</router-link> <span style="padding-left: 10px">{{value}}</span>
                      </div>
                    </td>
                    <td v-if="transactionDetails.movement.input && !transactionDetails.movement.input.length">Coinbase</td>
                    <td v-if="transactionDetails.movement !== null && transactionDetails.movement.output !== null && transactionDetails.movement.output.length > 0">
                      <div v-for="[address, value] in transactionDetails.movement.output" :key="address" style="padding-bottom: 10px">
                        <router-link :to="{ path: '/address/' + address }">{{address}}</router-link> <span style="padding-left: 10px">{{value}}</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
  .text-left {
    text-align: left;
  }
  .margin-top {
    margin-bottom: 50px !important;
  }
  .transacction-details-small {
    max-width: 1024px;
    margin: 0 auto;
  }
  .balance {
    margin-top: 20px;
    margin-bottom: 30px;
  }
  .title {
    padding-top: 10px;
    padding-bottom: 10px;
  }
  pre {
    word-break: break-all;
  }
  .transaction-movement-table {
    width: 100%;
    border-collapse: separate;
  }
  .transaction-movement-table td {
    width: 50%;
  }
  .transaction-movement-table td:last-child {
    white-space: nowrap;
  }
</style>

<script lang="ts">
  import AddressView from './AddressView';
  export default AddressView;
</script>