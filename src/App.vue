<template>
  <div class="p-10">
    <div class="flex space-x-4">
      <Picture
        class="max-w-[30px]"
        src="/logo.png"
        alt="Logo"
        aria-hidden="true"
      />
      <h1 class="text-xl font-bold">Vue.js Starter by frōntensō</h1>
    </div>
  </div>
</template>

<script>
import './index.css';
import Picture from '@/components/Picture';

export default {
  name: 'App',
  components: {
    Picture,
  },
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
