<template>
  <div class="col-sm-6 col-sm-offset-3">
    <p v-if="!user.authenticated">Please Login</p>
    <p v-if="user.authenticated">Shops</p>
    </div>
  </div>
</template>

<script>
import auth from '../auth'

export default {
  data() {
    return {
      user: auth.user
    }
  }
}
</script>