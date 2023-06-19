<template>
  <picture>
    <source :srcset="`${srcWithoutExtension}.avif`" type="image/avif" />
    <source :srcset="`${srcWithoutExtension}.webp`" type="image/webp" />
    <img :src="`${src}`" :class="className" v-bind="$attrs" />
  </picture>
</template>

<script>
export default {
  name: 'Picture',
  inheritAttrs: false,
  props: {
    className: {
      default: '',
      type: String,
      required: false,
    },
    src: {
      default: '',
      type: String,
      required: true,
    },
    alt: {
      default: '',
      type: String,
      required: true,
    },
  },
  computed: {
    srcWithoutExtension() {
      return this.src?.split('.')[0];
    },
  },
};
</script>
