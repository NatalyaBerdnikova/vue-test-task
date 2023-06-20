<template>
  <div class="counter">
    <button
      class="counter__button counter__keyboard"
      aria-label="Открыть клавиатуру"
    >
      <KeyboardIcon />
    </button>
    <span class="counter__count" :aria-label="'Количество равно ' + count">
      {{ count }}
    </span>
    <button
      class="counter__button counter__increment"
      aria-label="Увеличить количество"
      @click="increase"
    />
    <button
      class="counter__button counter__decrement"
      aria-label="Уменьшить количество"
      @click="decrease"
    />
    <button
      class="counter__cart"
      aria-label="Поместить в корзину"
      @click="addToCard"
    >
      <CartIcon />
    </button>
  </div>
</template>

<script>
import KeyboardIcon from '@/components/svg/Keyboard.vue';
import CartIcon from '@/components/svg/Cart.vue';

export default {
  name: 'Counter',
  components: { KeyboardIcon, CartIcon },
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
