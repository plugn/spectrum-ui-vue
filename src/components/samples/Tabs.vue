<template>
  <div class="vbox">

  <div class="hbox" style="padding: 5px;">
    <Tabs compact
      :items="tabs0"
      :selected-index="tabSelectedIndex"
      @update:selectedIndex="onSelectIndex"
    />
  </div>
  <div class="hbox" style="padding: 5px;">
    <Tabs :items="tabs1"/>
  </div>
  <div class="hbox" style="padding: 5px;">
    <Tabs direction="vert" :items="tabs2" no-text/>
  </div>
  </div>

</template>

<script>
const tabs0 = [{
  label: 'Tab 0',
  selected: true
}, {
  label: 'Tab 1'
}, {
  label: 'Tab 2'
}]
const tabs1 = [{
  label: 'StepBackwardCircle',
  iconName: 'StepBackwardCircle',
  selected: false
}, {
  label: 'StepForward',
  iconName: 'StepForward',
  selected: true
}, {
  label: 'StepForwardCircle',
  iconName: 'StepForwardCircle',
  selected: false
}]

const tabs2 = [{
  label: 'Sharpen',
  iconName: 'Sharpen',
  selected: false
}, {
  label: 'Shield',
  iconName: 'Shield',
  selected: false
}, {
  label: 'ShoppingCart',
  iconName: 'ShoppingCart',
  selected: true
}, {
  label: 'ShowAllLayers',
  iconName: 'ShowAllLayers',
  selected: false
}, {
  label: 'ShowMenu',
  iconName: 'ShowMenu',
  selected: false
}]

export default {
    name: 'TabsSample',
    data() {
      return {
        tabSelectedIndex: 0,
        tabs0,
        tabs1,
        tabs2,
      }
    },
    methods: {
      onSelectIndex(index) {
        console.log('onSelectIndex()', index)
      },
    }
  }
</script>
