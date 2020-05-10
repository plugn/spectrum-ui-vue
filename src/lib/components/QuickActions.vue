<template>
  <div class="spectrum-QuickActions-overlay">
    <div class="spectrum-QuickActions"
      :class="{
        'is-open': this.isOpen,
        'spectrum-QuickActions--textOnly': this.textOnly,
      }"
    >
      <slot />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'QuickActions',
    props: {
      isOpen: {
        type: Boolean,
        default: true
      },
      textOnly: Boolean,
    }
  }
</script>
