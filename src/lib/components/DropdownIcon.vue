<template>
  <svg class="spectrum-Icon spectrum-Dropdown-icon" :class="`spectrum-UIIcon-${name}`">
    <use v-bind:xlink:href="`#spectrum-css-icon-${name}`" />
  </svg>
</template>

<script>
export default {
  name: 'DropdownIcon',
  props: {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: 'S',
    },
  },
}
</script>
