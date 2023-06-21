<template>
  <component
    :is="getHtmlTag"
    class="button"
    v-bind="getLinkAttributes"
    @click="buttonClickEvent"
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
  },
  emits: ['click'],

  computed: {
    getHtmlTag() {
      if (this.link && this.isTargetBlank) {
        return 'a';
      }
      return this.link ? 'router-link' : 'button';
    },
    getLinkAttributes() {
      if (!this.link) {
        return {};
      }
      return this.isTargetBlank
        ? { href: this.link, target: '_blank' }
        : { to: this.link };
    },
  },

  methods: {
    buttonClickEvent(event) {
      if (!this.isDisabled && !this.link) {
        this.$emit('click', event);
      }
    },
  },
};
</script>
