<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li
        v-for="{ text, hash, attributes } in links"
        :key="text"
        class="navigation__list-item"
      >
        <Button :link="hash" class="navigation__link" v-bind="attributes">
          {{ text }}
        </Button>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';

import Button from '@/components/common/button/vue/Button.vue';

export default {
  name: 'Navigation',
  components: { Button },

  computed: {
    links() {
      return [
        {
          text: 'Каталог',
          hash: '/',
        },
        {
          text: 'Корзина',
          attributes: { 'data-link': 'bin', 'data-count': this.getItemsCount },
          hash: '/bin',
        },
      ];
    },

    ...mapGetters('bin', ['getItemsCount']),
  },
};
</script>
