<template>
  <div class="spectrum-Dropdown is-open"
    v-click-outside="onClickOutside"
  >
    <button class="spectrum-FieldButton spectrum-Dropdown-trigger" aria-haspopup="listbox"
      :class="{
        'is-selected': isOpen,
        'is-invalid': isInvalid,
      }"
      @click="isOpen = !isOpen"
    >
      <span class="spectrum-Dropdown-label">{{ selectedLabel }}</span>
      <DropdownIcon class="spectrum-Dropdown-icon" name="ChevronDownMedium" />
    </button>
    <div class="spectrum-Popover spectrum-Popover--bottom spectrum-Dropdown-popover"
      :class="{
        'is-open': isOpen,
      }"
      style="width:100%; z-index:100;"
    >
      <ul class="spectrum-Menu" role="listbox">
        <li class="spectrum-Menu-item" role="option" aria-selected="true" tabindex="0"
          v-for="({item, key}, index) in vForable(items)"
          :key="key"
          :class="{
            'is-selected': ~innerSelectedIndexes.indexOf(index),
          }"
          @click="onItemToggle(index)"
        >
          <span class="spectrum-Menu-itemLabel" v-text="item.label" />
          <DropdownIcon class="spectrum-Menu-checkmark spectrum-Menu-itemIcon" name="CheckmarkMedium" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside'
import DropdownIcon from './DropdownIcon.vue'
import LoopMixin from '../mixins/LoopMixin.js'
import { getNested } from '../utils'

export default {
  name: 'Dropdown',
  directives: {
    clickOutside: vClickOutside.directive
  },
  mixins: [
    LoopMixin,
  ],
  components: {
    DropdownIcon,
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: () => ([]),
    },
    multiple: Boolean,
    selectedIndexes: {
      type: Array,
      default: () => ([]),
    },
    size: {
      type: String,
      default: 'S',
    },
    isInvalid: Boolean,
    quiet: Boolean,
    compact: Boolean,
    noText: Boolean,
    noIcon: Boolean,
  },
  data() {
    return {
      isSelected: false,
      isOpen: false,
      innerSelectedIndexes: [],
    }
  },
  computed: {
    selectedLabel() {
      let result = this.label
      if (this.innerSelectedIndexes.length) {
        const exceeded = this.innerSelectedIndexes.length - 1
        result = getNested(this.items[this.innerSelectedIndexes[0]], 'label')
        result += exceeded ? ` (+${exceeded})` : ''
      }
      return result
    }
  },
  methods: {
    updateSelectedIndexes(toggledIndex) {
      const needlePos = this.innerSelectedIndexes.indexOf(toggledIndex)
      if (!this.multiple) {
        this.innerSelectedIndexes = ~needlePos ? [] : [toggledIndex]
        return
      }

      if (~needlePos) {
        this.innerSelectedIndexes.splice(needlePos, 1)
      } else {
        this.innerSelectedIndexes.push(toggledIndex)
      }
    },
    onItemToggle(toggledIndex) {
      this.updateSelectedIndexes(toggledIndex)
      this.$emit('update:selectedIndexes', this.innerSelectedIndexes)
      if (!this.multiple) {
        this.isOpen = false
      }
      // console.log('onItemToggle', this.isOpen, this.innerSelectedIndexes)
    },
    onClickOutside() {
      // console.log(' * onClickOutside : ', this.isOpen)
      if (this.isOpen) {
        this.isOpen = false
      }
    },
  },
  mounted() {
    this.innerSelectedIndexes = this.selectedIndexes
  }
}
</script>
