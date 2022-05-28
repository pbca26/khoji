<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <BlocksTable />
        </div>
        <div class="col-sm offset-md-1">
          <TransactionsTable />
        </div>
      </div>
      <IdentitiesTable />
      <NetworkInfoTable />
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import BlocksTable from './components/BlocksTable.vue';
import TransactionsTable from './components/TransactionsTable.vue';
import NetworkInfoTable from './components/NetworkInfoTable.vue';
import IdentitiesTable from './components/IdentitiesTable.vue';

export default Vue.extend({
  name: 'App',
  components: {
    BlocksTable,
    TransactionsTable,
    IdentitiesTable,
    NetworkInfoTable
  }
});
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  a {
    text-decoration: none !important;
  }
  .see-more-link {
    position: relative;
    margin-top: -13px;
    margin-bottom: 20px;
    display: block;
  }
</style>
