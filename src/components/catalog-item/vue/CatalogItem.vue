<template>
  <dl>
    <dt>
      {{ name }}
    </dt>
    <dd>
      {{ price }}
    </dd>
    <Counter @add-to-card="addToCard" />
  </dl>
</template>

<script>
import { mapMutations } from 'vuex';

import { BIN_STORE_NAME } from '@/store/bin';
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
      this.addItem({ id: this.id, name: this.name, price: this.price, count });
    },
    ...mapMutations(BIN_STORE_NAME, ['addItem']),
  },
};
</script>
