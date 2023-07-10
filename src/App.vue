<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import AppAward from './components/AppAward.vue'
export default {
  components: { AppHeader, AppFooter, AppAward }

}

</script>

<template>
  <AppHeader />

  <AppAward />
</template>

<style lang="scss">
@use './assets/scss/style.scss' as *
</style>