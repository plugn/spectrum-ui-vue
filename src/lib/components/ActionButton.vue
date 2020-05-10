<template>
  <button
    class="spectrum-ActionButton"
    :class="{
      'is-selected': isSelected,
      'spectrum-ActionButton--quiet': quiet,
    }"
    :disabled="disabled"
  >
    <slot />
    <span v-if="label" class="spectrum-ActionButton-label" v-text="label"></span>
  </button>
</template>

<script>
export default {
  name: 'ActionButton',
  props: {
    disabled: Boolean,
    isSelected: Boolean,
    label: String,
    quiet: Boolean,
  },
}
</script>

<style>
  .spectrum-ActionButton .spectrum-Icon + .spectrum-ActionButton-label,
  .spectrum-Tool .spectrum-Icon + .spectrum-ActionButton-label {
    padding-left: 7px;
    padding-right: 5px;
  }
</style>
