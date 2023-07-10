<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import AppAward from './components/AppAward.vue';
import AppGrooming from './components/AppGrooming.vue';
import AppShop from './components/AppShop.vue'
export default {
  components: { AppHeader, AppFooter, AppAward, AppGrooming, AppShop }

}

</script>

<template>
  <AppHeader />

  <AppAward />

  <AppGrooming />

  <AppShop />
</template>

<style lang="scss">
@use './assets/scss/style.scss' as *
</style>