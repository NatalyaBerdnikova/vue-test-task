<template>
  <div class="counter">
    <Button aria-label="Открыть клавиатуру" :isDisabled="true">
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
      :isDisabled="count <= 0"
      @click="decrease"
    />
    <Button
      aria-label="Поместить в корзину"
      isBorderless
      :isDisabled="count <= 0"
      @click="addToCard"
    >
      <CartIcon />
    </Button>
  </div>
</template>

<script>
import Button from '@/components/common/button/vue/Button.vue';
import KeyboardIcon from '@/components/icons/Keyboard.vue';
import CartIcon from '@/components/icons/Cart.vue';

export default {
  name: 'Counter',
  components: { Button, KeyboardIcon, CartIcon },
  emits: ['addToCard'],

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
      this.count -= 1;
    },
    addToCard() {
      if (this.count === 0) {
        return;
      }

      this.$emit('addToCard', this.count);
      this.count = 0;
    },
  },
};
</script>
