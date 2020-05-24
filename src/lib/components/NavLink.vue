<template>
    <router-link v-if="hasRouter && to" :to="to">
      <slot />
      {{ label }}
    </router-link>
    <a v-else :href="to" :title="title">
      <slot />
      {{ label }}
    </a>
</template>

<script>
export default {
  name: 'NavLink',
  props: {
    label: String,
    title: String,
    to: [String, Object]
  },
  computed: {
    hasRouter() {
      return Boolean(this.$router)
    }
  }
}
</script>

<style>
  .spectrum a,
  .spectrum a:visited {
    color: inherit;
  }
</style>
