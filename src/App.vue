<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import AppAward from './components/AppAward.vue';
import AppServices from './components/AppServices.vue';
import AppShop from './components/AppShop.vue';
import AppReviw from './components/AppReviews.vue'
import AppPosts from './components/AppPosts.vue'
import { store } from '../src/data/store.js'
export default {
  components: { AppHeader, AppFooter, AppAward, AppServices, AppShop, AppReviw, AppPosts },
  data() {
    return {
      store
    }
  }

}

</script>

<template>
  <AppHeader />

  <AppAward />

  <AppServices :services="store.services" />

  <AppShop :products="store.products" />

  <AppReviw :reviews="store.reviews" />

  <AppPosts />

  <AppFooter />
</template>

<style lang="scss">
@use './assets/scss/style.scss' as *
</style>