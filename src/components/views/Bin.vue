<template>
  <section class="bin">
    <div class="bin__content">
      <p v-if="isEmpty">Добавьте предметы в корзину и они появятся здесь.</p>
      <template v-else>
        <ul class="bin__list list list--4-items">
          <li class="list__header-line">
            <span> Наименование </span>
            <span> Цена </span>
            <span> Количество </span>
            <span> Стоимость </span>
          </li>
          <li v-for="value in getItems" :key="value.key">
            <BinItem v-bind="value" class="list__line" />
          </li>
        </ul>
        <p class="bin__total-value" :aria-label="'Итого' + totalValue">
          <span>Итого:</span> {{ totalValue }}
        </p>
        <div class="bin__buttons">
          <Button class="bin__button" @click="purchase"> Берём! </Button>
          <Button class="bin__button" @click="refuse">
            Пожалуй, откажусь
          </Button>
        </div>
      </template>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

import BinItem from '@/components/bin-item/vue/BinItem.vue';
import Button from '@/components/common/button/vue/Button.vue';

export default {
  name: 'Bin',
  components: { BinItem, Button },

  computed: {
    isEmpty() {
      return Object.keys(this.getItems).length <= 0;
    },
    totalValue() {
      return Object.values(this.getItems)
        .reduce((acc, { price, count }) => acc + price * count, 0)
        .toFixed(2);
    },
    ...mapGetters('bin', ['getItems']),
  },

  methods: {
    purchase() {
      this.$store.dispatch('bin/makePurchase');
      this.$router.push({ path: '/' });
    },
    refuse() {
      this.$store.dispatch('bin/refusePurchase');
      this.$router.push({ path: '/' });
    },
  },
};
</script>
