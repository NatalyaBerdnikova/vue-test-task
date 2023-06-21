<template>
  <div class="bin-item">
    <span class="bin-item__name" :aria-label="'Наименование: ' + name">
      {{ name }}
    </span>
    <span class="bin-item__price" :aria-label="'Цена: ' + price">
      {{ price }}
    </span>
    <span class="bin-item__count" :aria-label="'Количество: ' + count">
      {{ count }}
    </span>
    <span class="bin-item__value" :aria-label="'Стоимость: ' + value">
      {{ value }}
    </span>
    <Button
      class="bin-item__remove-button"
      aria-label="Удалить товар из корзины"
      @click="removeFromBin"
    />
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

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
    value() {
      return (this.price * this.count).toFixed(2);
    },
  },

  methods: {
    removeFromBin() {
      this.removeItem(this.id);
    },
    ...mapMutations('bin', ['removeItem']),
  },
};
</script>
