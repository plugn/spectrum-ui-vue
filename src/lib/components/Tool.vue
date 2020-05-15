<template>
  <button :aria-label="label" class="spectrum-Tool">
    <Icon :name="iconName" :size="iconSize" />
  </button>
</template>

<script>
import Icon from './Icon.vue'

export default {
  name: 'Tool',
  props: {
    label: {
      type: String,
    },
    iconName: {
      type: String,
      default: 'ShowMenu',
    },
    iconSize: {
      type: String,
      default: 'S',
    },
  },
  components: {
    Icon
  }
}
</script>
