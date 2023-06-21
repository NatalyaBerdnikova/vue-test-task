<template>
  <component
    :is="htmlTag"
    :class="className"
    v-bind="linkAttributes"
    @click="onClick"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'CustomButton',
  props: {
    link: {
      type: String,
      default: '',
    },
    isTargetBlank: {
      type: Boolean,
      default: false,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    isBorderless: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['click'],

  computed: {
    htmlTag() {
      if (!this.link) {
        return 'button';
      }

      if (this.isTargetBlank) {
        return 'a';
      }

      return 'router-link';
    },
    linkAttributes() {
      if (!this.link) {
        return {};
      }

      if (this.isTargetBlank) {
        return { href: this.link, target: '_blank' };
      }

      return { to: this.link };
    },
    className() {
      return [
        'button',
        {
          'button--borderless': this.isBorderless,
          'button--disabled': this.isDisabled,
        },
      ];
    },
  },

  methods: {
    onClick(event) {
      if (this.isDisabled || this.link) {
        return;
      }

      this.$emit('click', event);
    },
  },
};
</script>
