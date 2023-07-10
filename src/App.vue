<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import AppAward from './components/AppAward.vue';
import AppGrooming from './components/AppGrooming.vue';
import AppShop from './components/AppShop.vue';
import AppReviw from './components/AppReviews.vue'
export default {
  components: { AppHeader, AppFooter, AppAward, AppGrooming, AppShop, AppReviw }
}

</script>

<template>
  <AppHeader />

  <AppAward />

  <AppGrooming />

  <AppShop />

  <AppReviw />
</template>

<style lang="scss">
@use './assets/scss/style.scss' as *
</style>