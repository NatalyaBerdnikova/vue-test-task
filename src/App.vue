<template>
  <div class="app">
    <div class="container app__container">
      <Navigation />
      <router-view />
    </div>
  </div>
</template>

<script>
import Navigation from './components/common/navigation/vue/Navigation.vue';

export default {
  name: 'App',
  components: {
    Navigation,
  },
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
