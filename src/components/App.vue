<template>
  <div class="ui-page flex vbox main-start cross-start">
    <div class="hbox" style="padding: 5px; height: 100px;">
      <Dropdown label="Choose target"
                :items="tabs0"
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
      <Tabs :items="tabs1" />
    </div>
    <div class="hbox" style="padding: 5px;">
      <Tabs direction="vert" :items="tabItems" no-text />
    </div>

    <div class="hbox">
      <Tool icon-name="Camera" icon-size="large" />
      <Tool icon-name="Camera" icon-size="Medium"  />
      <Tool icon-name="Camera" icon-size="S" />
      <button aria-label="label" class="spectrum-Tool">
        <svg viewBox="0 0 36 36" focusable="false" aria-hidden="true" role="img" class="spectrum-Icon spectrum-Icon--sizeS">
          <use xlink:href="#spectrum-icon-18-123" />
        </svg>
      </button>

      <button aria-label="Show" class="spectrum-Tool">
        <svg viewBox="0 0 36 36" focusable="false" aria-hidden="true" role="img" class="spectrum-Icon spectrum-Icon--sizeS">
          <use xlink:href="#spectrum-icon-18-ABC" />
        </svg>
      </button>
      <button aria-label="Show" class="spectrum-Tool">
        <svg viewBox="0 0 36 36" focusable="false" aria-hidden="true" role="img" class="spectrum-Icon spectrum-Icon--sizeS">
          <rect height="4" rx="1" ry="1" width="28" x="4" y="16"></rect>
          <rect height="4" rx="1" ry="1" width="28" x="4" y="6"></rect>
          <rect height="4" rx="1" ry="1" width="28" x="4" y="26"></rect>
        </svg>
      </button>
      <button class="spectrum-Tool">
        <svg class="spectrum-Icon spectrum-Icon--sizeS" focusable="false" aria-hidden="true" aria-label="Brush">
          <use xlink:href="#spectrum-icon-18-Brush" />
        </svg>
      </button>
    </div>
    <div class="hbox">
      <ActionButton label="Edit" />
      <ActionButton label="Edit" is-selected />
      <ActionButton label="Edit" disabled />
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
          <ActionButton disabled quiet label="ds qt" />
          <ActionButton is-selected quiet label="sel qt">
            <Icon name="copy"/>
          </ActionButton>
          <ActionButton is-selected label="sel">
            <Icon name="delete" />
          </ActionButton>
        </div>
      </div>

    </div>
    <div class="hbox">
      <QuickActions text-only is-open class="zxc" style="padding: 20px;">
        <ActionButton label="Edit" />
        <ActionButton label="Edit" quiet/>
        <ActionButton label="Copy" quiet/>
        <ActionButton label="Delete" quiet/>
      </QuickActions>
    </div>


  </div>
</template>

<script>
  import SpectrumUIVue from '../lib/index'

  const {
    ActionButton,
    Dropdown,
    DropdownIcon,
    Icon,
    QuickActions,
    Tabs,
    Tool,
  } = SpectrumUIVue

  import spectrumIcons from '../spectrum-icons-list.json'


  const createIconTabs = (start, end, selected = 0) => spectrumIcons.slice(start, end)
  .map(v => v.match(/\w+$/)[0])
  .map((v, i) => ({
    label: v,
    iconName: v,
    selected: i === selected,
  }))

  export default {
    name: 'Prefs',
    components: {
      Icon,
      ActionButton,
      QuickActions,
      Tool,
      Tabs,
      Dropdown,
    },
    data() {
      return {
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
      onSelectIndex(what) {
        console.log('onSelectIndex()', what)
      }
    },
    mounted() {
      // console.log(' * spectrumIcons : ', spectrumIcons)
    }
  }
</script>
