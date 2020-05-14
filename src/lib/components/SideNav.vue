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
          'is-disabled': getItemValue(item, 'disabled'),
        }"
        v-for="(item, index) in vForable(items)"
        :key="item._key"
        @click.stop="onItemSelect(index)"
      >
        <NavLink class="spectrum-SideNav-itemLink"
          :label="noText ? '' : getItemValue(item, 'label')"
          :title="getItemValue(item, 'label', '')"
          :to="getItemValue(item, 'to')"
        >
          <Icon v-if="!noIcon && item._value.iconName" class="spectrum-SideNav-itemIcon" :name="item._value.iconName" :size="size" />
        </NavLink>
        <SideNav
          v-if="getItemValue(item, '$children.length')"
          :index-prefix = "getGlobalIndex(index)"
          :items="getItemValue(item, '$children')"
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
