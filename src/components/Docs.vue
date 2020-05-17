<template>
  <div class="ui-page flex hbox main-start cross-start">
    <div class="vbox">
      <SideNav
        multilevel
        :items="menuItems"
        :selected-item.sync="sideNavIndex"
        @update:selectedItem="onNavClick"
        style="min-width: 160px;"
      />
    </div>
    <div class="vbox" style="padding: 5px; height: 300px;">
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
    </div>

  </div>
</template>

<script>
import SpectrumUIVue from '../lib/index'
import spectrumIcons from '../spectrum-icons-list.json'
import menuItems from '../menu'

const getIconName = index => spectrumIcons[index].match(/\w+$/)[0]
const createIconTabs = (start, end, selected = 0) => spectrumIcons.slice(start, end)
.map(v => v.match(/\w+$/)[0])
.map((v, i) => ({
  label: v,
  iconName: v,
  selected: i===selected,
}))

export default {
  name: 'Docs',
  components: {
    ...SpectrumUIVue,
  },
  data() {
    return {
      menuItems,
      cycleBtnIndex: 0,
      cycleBtnIndex1: 0,
      cycleBtnIndex2: 0,
      sideNavIndex: '0',
      tabSelectedIndex: 0,
      tabSelectedIndex1: 0,
      tabSelectedIndex2: 0,
      labels: [
        'Visit',
        'Watch',
        'Wrench',
      ],
      tabs0: [{label: 'Tab 0', selected: true}, {label: 'Tab 1'}, {label: 'Tab 2'}],
      tabs1: createIconTabs(1600, 1603, 1),
      tabItems: createIconTabs(1575, 1580, 2)
    }
  },
  methods: {
    onCycleSelect(index, item) {
      console.log('onCycleSelect()', index, item)
    },
    onSelectIndex(what) {
      console.log('onSelectIndex()', what)
    },
    onNavClick(index) {
      console.log(' * onNavClick : ', index)
    },
  },
  mounted() {
    // console.log(' * spectrumIcons : ', spectrumIcons)
  }
}
</script>
