<template>
  <div>
    <h4>Last transactions</h4>
    <b-spinner v-if="transactions.length < 1" type="grow"></b-spinner>
    <b-table striped hover :items="transactions" :fields="fields">
      <template #cell(blockHeight)="data">
        <router-link :to="{ path: '/block/' + data.value }">{{ data.value }}</router-link>
      </template>
      <template #cell(hash)="data">
        <router-link :to="{ path: '/transaction/' + data.value }">{{ data.value.substr(0, 4) }}...{{ data.value.substr(data.value.length - 4, 4) }}</router-link>
      </template>
    </b-table>
  </div>
</template>

<script lang="ts">
  import TransactionsTable from './TransactionsTable';
  export default TransactionsTable;
</script>