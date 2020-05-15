<template>
  <div class="spectrum-Tabs" :class="[
    `spectrum-Tabs--${directionClass}`,
      {
        'spectrum-Tabs--quiet': quiet,
        'spectrum-Tabs--compact': compact,
      }
    ]"
  >
    <div class="spectrum-Tabs-item"
      :class="{
        'is-selected': innerSelectedIndex === index,
      }"
      v-for="({item, key}, index) in vForable(items)"
      :key="key"
      :tabindex="key"
      :ref="`tabItem-${index}`"
      @click="onItemSelect($event, index)"
    >
      <Icon v-if="!noIcon && item.iconName" :name="item.iconName" :size="size" />
      <label v-if="!noText && item.label" class="spectrum-Tabs-itemLabel" v-text="item.label"/>
    </div>
    <div v-if="indicatorStyle" class="spectrum-Tabs-selectionIndicator" :style="indicatorStyle">
    </div>
  </div>
</template>

<script>
import Icon from './Icon.vue'
import LoopMixin from '../mixins/LoopMixin.js'
export default {
  name: 'Tabs',
  mixins: [
    LoopMixin,
  ],
  components: {
    Icon,
  },
  props: {
    direction: {
      type: String,
      default: 'horizontal',
    },
    /**
     * Array<{
     *   label: 'label',
     *   iconName: 'icon name',
     *   name: 'name'
     * }>
     */
    items: {
      type: Array,
      default: () => ([]),
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
    compact: Boolean,
    noText: Boolean,
    noIcon: Boolean,
  },
  data() {
    return {
      innerSelectedIndex: 0,
      indicatorStyle: {
        left: '0px',
        width: '0px',
        top: '0px',
        height: '0px'
      }
    }
  },
  computed: {
    directionClass() {
      return ['vertical', 'vert', 'col', 'v']
        .includes(this.direction) ? 'vertical' : 'horizontal'
    }
  },
  methods: {
    updateIndicator(selectedIndex) {
      this.innerSelectedIndex = selectedIndex
      const tabItem = this.$refs[`tabItem-${selectedIndex}`][0]
      if (tabItem) {
        if ('vertical' === this.directionClass) {
          this.indicatorStyle = { top: tabItem.offsetTop + 'px', height: tabItem.offsetHeight + 'px' }
        } else {
          this.indicatorStyle = { left: tabItem.offsetLeft + 'px', width: tabItem.offsetWidth + 'px' }
        }
      }
    },
    onItemSelect({currentTarget}, index) {
      this.$emit('update:selectedIndex', index)
      this.updateIndicator(index)
    },
  },
  mounted() {
    this.updateIndicator(this.selectedIndex)
  }
}
</script>

<style>
  .spectrum-Tabs-selectionIndicator {
    transition: left 0.2s ease, width .2s ease, top 0.2s ease, height 0.2s;
  }
</style>
