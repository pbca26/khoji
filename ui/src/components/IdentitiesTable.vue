<template>
  <div class="identities-table">
    <h4>Last identities</h4>
    <b-spinner v-if="identities === null" type="grow"></b-spinner>
    <b-table striped hover :items="identities" :fields="fields">
      <template #cell(name)="data">
        <router-link :to="{ path: '/identity/' + data.value }">{{ data.value }}</router-link>
      </template>
      <template #cell(blockheight)="data">
        <router-link :to="{ path: '/block/' + data.value }">{{ data.value }}</router-link>
      </template>
      <template #cell(identityaddress)="data">
        <router-link :to="{ path: '/address/' + data.value }">{{ data.value }}</router-link>
      </template>
      <template #cell(txid)="data">
        <router-link :to="{ path: '/transaction/' + data.value }">{{ data.value.substr(0, 4) }}...{{ data.value.substr(data.value.length - 4, 4) }}</router-link>
      </template>
    </b-table>
    <router-link v-if="identities !== null" :to="{path: '/identities/all'}" class="see-more-link">See more</router-link>
  </div>
</template>

<style scoped>
  .identities-table {
    margin-top: 30px;
  }
</style>

<script>
  import IdentitiesTable from './IdentitiesTable';
  export default IdentitiesTable;
</script>