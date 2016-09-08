<template>
  <div class="col-sm-6 col-sm-offset-3">
    <p v-if="!user.authenticated">Please Login</p>
    <p v-if="user.authenticated">Shops</p>
    <!-- shop list -->
    <shop
      v-for="shop in shops",
      :shop="shop"
      :index="$index | formatItemIndex"
      track-by="id">
    </shop>
  </div>
</template>

<script>
import auth from '../auth'
import Shop from './Shop.vue'

export default {
  
  components: {
    Shop
  },
  
  data() {
    return {
      user: auth.user,
      shops: []
    }
  }
}
</script>