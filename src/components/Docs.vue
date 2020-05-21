<template>
  <div class="ui-page flex hbox main-start cross-start">
    <div class="vbox">
      <SideNav
        multilevel
        heading
        :items="menuItems"
        :selected-item.sync="sideNavIndex"
        @update:selectedItem="onNavClick"
        style="min-width: 160px;"
      />
    </div>
    <div class="vbox flex stretch main-center cross-center" style="padding: 0px;">
      <div class="spectrum-Typography">
        <p class="spectrum-Body1">
          Choose a component from a SideBar
        </p>
<!--        <component :is="MdContent" />-->
        <MarkdownView
          :fm-params="mdSample.attributes"
          :html="mdSample.html"
          :transforms="mdTransforms"
          class="spectrum-Body1"
        />

      </div>
    </div>

  </div>
</template>

<script>
/*
  fm.attributes // FrontMatter attributes => { subject: "Hello", tags: ["tag1", "tag2"] }
  fm.html // Compiled markdown as HTML => "<h1>Title</h1>\n<p>message</p>\n"
  fm.vue.component // Extendable component object for Vue which renders compiled markdown (Disabled as default)
*/
import SpectrumUIVue from '../lib/index'
import spectrumIcons from '../spectrum-icons-list.json'
import menuItems from '../menu'
import MarkdownView from './MarkdownView'
import mdSample from '@/articles/MdSample.md'

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
    MarkdownView,
    // MdContent: mdSample.vue.component,
  },
  data() {
    return {
      mdTransforms: [],
      MdContent: mdSample.vue.component,
      mdSample,
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
      // console.log(' * Docs.onNavClick() : ', index)
    },
  },
  mounted() {
    console.log(' * mdSample : ',  mdSample)

    // console.log(' * spectrumIcons : ', spectrumIcons)
  }
}
</script>
