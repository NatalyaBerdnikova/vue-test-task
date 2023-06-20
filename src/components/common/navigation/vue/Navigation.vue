<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li
        v-for="{ text, hash, attributes } in links"
        :key="text"
        class="navigation__list-item"
      >
        <router-link :to="hash" class="navigation__link" v-bind="attributes">
          {{ text }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  computed: {
    links() {
      return [
        {
          text: 'Каталог',
          hash: '/',
        },
        {
          text: 'Корзина',
          attributes: { 'data-link': 'bin', 'data-count': 1 },
          hash: '/bin',
        },
      ];
    },
  },
};
</script>
