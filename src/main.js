import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import store from './vuex/store'
import App from './components/App.vue'
import Home from './components/Home.vue'
import Login from './components/Login.vue'

Vue.use(VueResource)
Vue.use(VueRouter)

import auth from './auth'
Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');
auth.checkAuth()

// new Vue({
//   store, // inject store to all children
//   el: 'body',
//   components: { App }
// })

export var router = new VueRouter()

router.map({
  '/home': {
    component: Home
  },
  '/login': {
    component: Login
  }
})
if (auth.user.authenticated == true) {
  router.redirect({
    '*': '/home'
  })
}
else {
  router.redirect({
    '*': '/login'
  })
}

router.start(App, '#app')