<template>
<!--  <nav> -->
    <ul class="spectrum-SideNav"
      :class="{
        'spectrum-SideNav--multiLevel': multilevel,
      }"
    >
      <li class="spectrum-SideNav-item"
        :class="{
          'is-selected': getGlobalIndex(index) === selectedItem,
          'is-disabled': getNested(item, 'disabled'),
        }"
        v-for="({item, key}, index) in vForable(items)"
        :key="key"
        @click.stop="onItemSelect(index)"
      >
        <NavLink class="spectrum-SideNav-itemLink"
          :label="noText ? '' : getNested(item, 'label')"
          :title="getNested(item, 'label', '')"
          :to="getNested(item, 'to')"
        >
          <Icon v-if="!noIcon && item.iconName" class="spectrum-SideNav-itemIcon" :name="item.iconName" :size="size" />
        </NavLink>
        <SideNav
          v-if="getNested(item, '$children.length')"
          :index-prefix = "getGlobalIndex(index)"
          :items="getNested(item, '$children')"
          :selected-item="selectedItem"
          @update:selectedItem="onUpdateSelectedItem"
          :no-text="noText"
          :no-icon="noIcon"
          :size="size"
        />
      </li>
    </ul>
<!--  </nav>-->
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
    indexPrefix: {
      type: String,
      default: ''
    },
    selectedItem: {
      type: String,
      default: '0',
    },
    size: {
      type: String,
      default: 'S'
    },
    multilevel: Boolean,
    quiet: Boolean,
    compact: Boolean,
    noText: Boolean,
    noIcon: Boolean,
  },
  methods: {
    getGlobalIndex(index) {
      return this.indexPrefix ? [this.indexPrefix, index].join(':') : String(index)
    },
    onUpdateSelectedItem(selectedIndex) {
      this.$emit('update:selectedItem', selectedIndex)
    },
    onItemSelect(index) {
      if (this.items[index].disabled) { return }
      this.onUpdateSelectedItem(this.getGlobalIndex(index))
    },
  },
}
</script>
