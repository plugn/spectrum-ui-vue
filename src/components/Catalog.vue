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
      <div class="hbox" style="padding: 5px; height: 100px;">
        <Toggle label="simple" />
        <Toggle label="quiet" quiet />
        <Toggle label="unused" disabled />
        <Toggle :ab-labels="['in', 'out']" ab quiet />
      </div>
      <div class="hbox" style="padding: 5px; height: 100px;">
        <Dropdown label="Choose target"
          multiple
          :items="tabs0"
          :selected-indexes="[1]"
        />
      </div>
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
        <Tabs direction="vert" :items="tabItems" no-text/>
      </div>

      <div class="hbox">
        <CycleButton quiet size="M"
          :selectedIndex.sync="cycleBtnIndex1"
          :items="[
            {iconName: 'RewindCircle', label: '<<'},
            {iconName: 'StepBackwardCircle', label: '<='},
          ]"
          @update:selectedIndex="onCycleSelect"
        />

        <CycleButton quiet size="L"
          :selectedIndex.sync="cycleBtnIndex"
          :items="[
            {iconName: 'PlayCircle', label: 'Play'},
            {iconName: 'PauseCircle', label: 'Pause'},
          ]"
          @update:selectedIndex="onCycleSelect"
        />
        <CycleButton quiet size="L"
          :selectedIndex="0"
          :items="[
            {iconName: 'StopCircle', label: '[]'},
          ]"
          @update:selectedIndex="onCycleSelect"
        />
        <CycleButton quiet size="M"
          :selectedIndex.sync="cycleBtnIndex2"
          :items="[
            {iconName: 'FastForwardCircle', label: '>>'},
            {iconName: 'StepForwardCircle', label: '=>'},
          ]"
          @update:selectedIndex="onCycleSelect"
        />
      </div>

      <div class="hbox">
        <Tool icon-name="Camera" icon-size="Medium"/>
        <Tool icon-name="Camera" icon-size="S"/>
        <Tool icon-name="123" icon-size="S"/>
        <Tool icon-name="ABC" icon-size="S"/>
        <Tool icon-name="ShowMenu" icon-size="S"/>
        <Tool icon-name="Brush" icon-size="M"/>
      </div>
      <div class="hbox">
        <ActionButton label="Edit"/>
        <ActionButton label="Edit" is-selected/>
        <ActionButton label="Edit" disabled/>
      </div>

      <div class="hbox">
        <div class="spectrum-QuickActions-overlay" style="padding: 20px;">

          <div class="spectrum-QuickActions is-open">
            <ActionButton quiet>
              <Icon name="edit"/>
            </ActionButton>
            <ActionButton>
              <Icon name="copy"/>
            </ActionButton>
            <ActionButton disabled quiet label="ds qt"/>
            <ActionButton is-selected quiet label="sel qt">
              <Icon name="copy"/>
            </ActionButton>
            <ActionButton is-selected label="sel">
              <Icon name="delete"/>
            </ActionButton>
          </div>
        </div>
      </div>

      <div class="hbox">
        <QuickActions text-only is-open class="zxc" style="padding: 20px;">
          <ActionButton label="Edit"/>
          <ActionButton label="Edit" quiet/>
          <ActionButton label="Copy" quiet/>
          <ActionButton label="Delete" quiet/>
        </QuickActions>
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
    name: 'SueDocsApp',
    components: {
      ...SpectrumUIVue,
    },
    data() {
      return {
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
        menuItems,
        menuTree: [
          {label: 'Digest', iconName: 'Star'},
          {label: 'Catalog', iconName: 'Blur', disabled: true},
          {
            label: 'Zoo', iconName: getIconName(1000),
            $children: [
              {label: 'frogs', iconName: getIconName(1500)},
              {label: 'ducks', iconName: getIconName(1505)},
              {label: 'rabbits', iconName: getIconName(1550)},
            ]
          },
          {label: 'Gallery', iconName: getIconName(1500)},
          {label: 'Feedback', iconName: getIconName(1505)},
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
      }
    },
    mounted() {
      // console.log(' * spectrumIcons : ', spectrumIcons)
    }
  }
</script>
