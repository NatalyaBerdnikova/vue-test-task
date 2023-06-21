<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li class="navigation__item">
        <Button link="/" class="navigation__link"> Каталог </Button>
      </li>
      <li class="navigation__item">
        <BinButton class="navigation__link" />
      </li>
    </ul>
  </nav>
</template>

<script>
import Button from '@/components/common/button/vue/Button.vue';
import BinButton from '@/components/bin-button/vue/BinButton.vue';

export default {
  name: 'Navigation',
  components: { Button, BinButton },
};
</script>
