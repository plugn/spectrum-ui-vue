<template>
  <ActionButton class="spectrum-CycleButton"
    :quiet="quiet"
    @click.native="incrementIndex"
  >
    <Icon class="spectrum-CycleButton-item"
      v-for="({key, item}, index) in vForable(items)"
      :key="key"
      :class="{
        'is-selected': selectedIndex === index,
      }"
      :name="item.iconName"
      :size="size"
    />
  </ActionButton>
</template>

<script>
import ActionButton from './ActionButton'
import Icon from './Icon.vue'
import LoopMixin from '../mixins/LoopMixin.js'
export default {
  name: 'CycleButton',
  mixins: [
    LoopMixin,
  ],
  props: {
    /**
     * Array<{
     *   label: 'label',
     *   iconName: 'icon name',
     * }>
     */
    items: {
      type: Array,
      required: true,
    },
    selectedIndex: {
      type: Number,
      default: 0,
    },
    size: {
      type: String,
      default: 'S'
    },
    quiet: Boolean,
  },
  components: {
    ActionButton,
    Icon,
  },
  methods: {
    incrementIndex() {
      const nextIndex = (this.selectedIndex + 1) % this.items.length
      this.$emit('update:selectedIndex', nextIndex, this.items[nextIndex])
    }
  }

}
</script>
