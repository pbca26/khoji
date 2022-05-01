<template>
  <div>
    <h4>Block Info</h4>
    <b-spinner v-if="blockInfo === null" type="grow"></b-spinner>
    <div v-if="blockInfo">
      <table class="table b-table table-striped table-hover text-left">
        <tbody>
          <tr>
            <td>
              Height
            </td>
            <td>
              {{ blockInfo.height }}
            </td>
          </tr>
          <tr>
            <td>
              Hash
            </td>
            <td>
              {{ blockInfo.hash }}
            </td>
          </tr>
          <tr>
            <td>
              Previous block
            </td>
            <td>
              {{ blockInfo.previousBlock }}
            </td>
          </tr>
          <tr>
            <td>
              Merkle root
            </td>
            <td>
              {{ blockInfo.merkleRoot }}
            </td>
          </tr>
          <tr>
            <td>
              Chainwork
            </td>
            <td>
              {{ blockInfo.chainWork }}
            </td>
          </tr>
          <tr>
            <td>
              Difficulty
            </td>
            <td>
              {{ blockInfo.difficulty }}
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <router-link :to="{ path: '/block/' + (Number(this.height) - 1) }" class="padding-right">Prev block</router-link>
        <router-link :to="{ path: '/block/' + (Number(this.height) + 1) }">Next block</router-link>
      </div>
      <div v-if="blockInfo.transactions && blockInfo.transactions.length" class="block-transactions">
        <h4>Transactions</h4>
        <b-table striped hover :items="blockInfo.transactions" :fields="transactionFields" class="transactions-table">
          <template #cell(txid)="data">
            <router-link :to="{ path: '/transaction/' + data.value }">{{ data.value }}</router-link>
          </template>
        </b-table>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .text-left {
    text-align: left;
  }
  .padding-right {
    padding-right: 50px;
  }
  .block-transactions {
    margin-top: 50px;
  }
</style>

<script>
  import BlockView from './BlockView';
  export default BlockView;
</script>