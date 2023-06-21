<template>
  <dl class="bin-item">
    <dt :aria-label="'Наименование: ' + name">
      {{ name }}
    </dt>
    <dd :aria-label="'Цена: ' + price">
      {{ price }}
    </dd>
    <dd :aria-label="'Количество: ' + count">
      {{ count }}
    </dd>
    <dd :aria-label="'Стоимость: ' + sum">
      {{ sum }}
    </dd>
    <Button
      class="bin-item__remove-button"
      aria-label="Удалить товар из корзины"
      isBorderless
      @click="removeFromBin"
    />
  </dl>
</template>

<script>
import { mapMutations } from 'vuex';

import { BIN_STORE_NAME } from '@/store/bin';
import Button from '@/components/common/button/vue/Button.vue';

export default {
  name: 'BinItem',
  components: { Button },
  props: {
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

  computed: {
    sum() {
      return (this.price * this.count).toFixed(2);
    },
  },

  methods: {
    removeFromBin() {
      this.removeItem(this.id);
    },
    ...mapMutations(BIN_STORE_NAME, ['removeItem']),
  },
};
</script>
