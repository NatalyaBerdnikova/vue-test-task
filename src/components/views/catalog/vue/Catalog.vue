<template>
  <section class="catalog">
    <div class="catalog__content">
      <ul class="catalog__list list list--3-items">
        <li class="list__header">
          <span> Наименование </span>
          <span> Цена </span>
          <span> Действия </span>
        </li>
        <li v-for="item in getCatalogItems" :key="item.name" class="list__item">
          <CatalogItem v-bind="item" class="list__line" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

import { CATALOG_STORE_NAME } from '@/store/catalog';
import CatalogItem from '@/components/catalog-item/vue/CatalogItem.vue';

export default {
  name: 'Catalog',
  components: { CatalogItem },
  computed: {
    ...mapGetters(CATALOG_STORE_NAME, ['getCatalogItems']),
  },
  mounted() {
    this.$store.dispatch('catalog/getCatalogItems');
  },
};
</script>
