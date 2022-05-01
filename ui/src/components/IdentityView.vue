<template>
  <div>
    <h4>Identity Info</h4>
    <b-spinner v-if="identityDetails === null" type="grow"></b-spinner>
    <div v-if="identityDetails">
      <table class="table b-table table-striped table-hover text-left">
        <tbody>
          <tr>
            <td>
              Name
            </td>
            <td>
              {{ identityDetails.name }}
            </td>
          </tr>
          <tr>
            <td>
              Height
            </td>
            <td>
              {{ identityDetails.blockheight }}
            </td>
          </tr>
          <tr>
            <td>
              Address
            </td>
            <td>
              {{ identityDetails.identityaddress }}
            </td>
          </tr>
          <tr>
            <td>
              Parent
            </td>
            <td>
              {{ identityDetails.parent }}
            </td>
          </tr>
          <tr>
            <td>
              Transaction ID
            </td>
            <td>
              <router-link :to="{ path: '/transaction/' + identityDetails.txid }">{{ identityDetails.txid }}</router-link>
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
</style>

<script>
  import IdentityView from './IdentityView';
  export default IdentityView;
</script>