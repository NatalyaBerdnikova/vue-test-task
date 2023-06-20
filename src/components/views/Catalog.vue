<template>
  <section class="catalog">
    <ul class="catalog__list">
      <li
        v-for="item in getCatalogItems"
        :key="item.name"
        class="catalog__list-item"
      >
        <CatalogItem v-bind="item" />
      </li>
    </ul>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

import CatalogItem from '../catalog-item/vue/CatalogItem.vue';

export default {
  name: 'Catalog',
  components: { CatalogItem },
  computed: {
    ...mapGetters('catalog', ['getCatalogItems']),
  },
};
</script>
