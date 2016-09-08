<template>
  <div class="shop-view" v-show="shop">
    <item :shop="shop"></item>
    <p class="shoptext" v-if="hasText" v-html="item.text"></p>
    <ul class="poll-options" v-if="pollOptions">
      <li v-for="option in pollOptions">
        <p>{{option.text}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import store from '../store'
import Shop from './Shop.vue'

export default {
  name: 'ShopView',
  components: {
    Shop,
    Comment
  },
  data () {
    return {
      item: {},
      comments: [],
      pollOptions: null
    }
  },
  route: {
    data ({ to }) {
      return store.fetchItem(to.params.id).then(item => {
        document.title = item.title + ' | Vue.js HN Clone'
        return {
          item,
          // the final resolved data can further contain Promises
          comments: store.fetchItems(item.kids),
          pollOptions: item.type === 'poll'
            ? store.fetchItems(item.parts)
            : null
        }
      })
    }
  },
  computed: {
    isJob () {
      return this.item.type === 'job'
    },
    hasText () {
      return this.item.hasOwnProperty('text')
    }
  }
}
</script>