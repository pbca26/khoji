<template>
  <div>
    <h4>Last blocks</h4>
    <b-spinner v-if="blocks === null" type="grow"></b-spinner>
    <b-table striped hover :items="blocks" :fields="fields" class="blocks-table">
      <template #cell(height)="data">
        <router-link :to="{ path: '/block/' + data.value }">{{ data.value }}</router-link>
      </template>
      <template #cell(miner)="data">
        <router-link :to="{ path: '/address/' + data.value }">{{ data.value }}</router-link>
      </template>
    </b-table>
    <router-link v-if="blocks !== null" :to="{path: '/transaction/all'}" class="see-more-link">See more</router-link>
  </div>
</template>

<style scoped>
  .blocks-table tbody tr td:nth-child(2) {
    text-align: left;
    padding-left: 5%;
    padding-right: 5%;
  }
</style>

<script>
  import BlocksTable from './BlocksTable';
  export default BlocksTable;
</script>