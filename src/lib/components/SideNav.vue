<template>
  <nav>
    <ul class="spectrum-SideNav">
      <li class="spectrum-SideNav-item"
        :class="{
          'is-selected': selectedIndex === index,
          'is-disabled': getItemValue(item, 'disabled'),
        }"
        v-for="(item, index) in vForable(items)"
        :key="item._key"
        @click="onItemSelect($event, index)"
      >
        <NavLink class="spectrum-SideNav-itemLink"
          :label="noText ? '' : getItemValue(item, 'label')"
          :title="getItemValue(item, 'label', '')"
          :to="getItemValue(item, 'to')"
        >
          <Icon v-if="!noIcon && item._value.iconName" class="spectrum-SideNav-itemIcon" :name="item._value.iconName" :size="size" />
        </NavLink>
      </li>
    </ul>
  </nav>
</template>
<script>
import NavLink from './NavLink'
import Icon from './Icon'
import LoopMixin from '../mixins/LoopMixin.js'

export default {
  name: 'SideNav',
  mixins: [
    LoopMixin,
  ],
  components: {
    NavLink,
    Icon,
  },
  props: {
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
    }
  },
  methods: {
    onItemSelect({currentTarget}, index) {
      this.$emit('update:selectedIndex', index, currentTarget.textContent)
    },
  },
  mounted() {
    this.innerSelectedIndexes = this.selectedIndexes
  }
}
</script>
