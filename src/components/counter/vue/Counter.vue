<template>
  <div class="counter">
    <Button aria-label="Открыть клавиатуру">
      <KeyboardIcon />
    </Button>
    <span class="counter__count" :aria-label="'Количество равно ' + count">
      {{ count }}
    </span>
    <Button
      class="counter__increment"
      aria-label="Увеличить количество"
      @click="increase"
    />
    <Button
      class="counter__decrement"
      aria-label="Уменьшить количество"
      @click="decrease"
    />
    <Button
      class="counter__cart"
      aria-label="Поместить в корзину"
      @click="addToCard"
    >
      <CartIcon />
    </Button>
  </div>
</template>

<script>
import Button from '@/components/common/button/vue/Button.vue';
import KeyboardIcon from '@/components/svg/Keyboard.vue';
import CartIcon from '@/components/svg/Cart.vue';

export default {
  name: 'Counter',
  components: { Button, KeyboardIcon, CartIcon },
  emits: ['addedToCard'],

  data() {
    return {
      count: 0,
    };
  },

  methods: {
    increase() {
      this.count += 1;
    },
    decrease() {
      if (this.count === 0) {
        return;
      }
      this.count -= 1;
    },
    addToCard() {
      if (this.count === 0) {
        return;
      }
      this.$emit('addedToCard', this.count);
      this.count = 0;
    },
  },
};
</script>
