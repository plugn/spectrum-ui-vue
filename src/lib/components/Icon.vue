<template>
  <svg class="spectrum-Icon"
    :class="[`spectrum-Icon--size${sizeLetter}`]"
    :aria-label="name">
      <use v-bind:xlink:href="`#spectrum-icon-${sizePx}-${camelize(name)}`" />
  </svg>
</template>

<script>
const sizeMap = {
  'S': 18,
  'M': 18,
  'L': 24,
}
export default {
  name: 'Icon',
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
  computed: {
    sizeLetter() {
      return this.size.length ? String(this.size[0]).toUpperCase() : 'S'
    },
    sizePx() {
      return sizeMap[this.sizeLetter || 'S']
    }
  },
  methods: {
    camelize(value) {
      let result = String(value)
      if (result.length) {
        result = result[0].toUpperCase() + result.slice(1)
      }
      return result
    },
  }
}
</script>
