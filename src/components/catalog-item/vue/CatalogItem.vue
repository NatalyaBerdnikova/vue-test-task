<template>
  <dl class="catalog-item">
    <dt class="catalog-item__name">
      {{ name }}
    </dt>
    <dd class="catalog-item__price">
      {{ price }}
    </dd>
    <Counter @added-to-card="addToCard" />
  </dl>
</template>

<script>
import { mapMutations } from 'vuex';

import Counter from '@/components/counter/vue/Counter.vue';

export default {
  name: 'CatalogItem',
  components: { Counter },
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    count: {
      type: Number,
      default: 0,
    },
  },

  methods: {
    addToCard(count) {
      this.addItem({ id: this.id, count });
    },
    ...mapMutations('bin', ['addItem']),
  },
};
</script>
