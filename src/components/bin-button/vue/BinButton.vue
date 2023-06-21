<template>
  <Button class="bin-button" link="/bin">
    Корзина
    <span class="bin-button__count">
      {{ getItemsCount }}
    </span>
  </Button>
</template>

<script>
import { mapGetters } from 'vuex';

import { BIN_STORE_NAME } from '@/store/bin';
import Button from '@/components/common/button/vue/Button.vue';

export default {
  name: 'BinButton',
  components: { Button },
  computed: {
    ...mapGetters(BIN_STORE_NAME, ['getItemsCount']),
  },
};
</script>
