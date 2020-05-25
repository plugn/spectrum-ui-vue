<template>
    <div class="vbox flex main-start cross-start" style="padding: 20px;">
      <div class="preview-separate">
        <VueLivePreview
          :code="previewCode"
          :components="previewComponents"
          @error="previewError"
        />
      </div>
      <hr style="width: 100%;" />
      <p>Edit the code here</p>
      <VueLiveEditor :code="previewCode" @change="updateCode" />
    </div>
</template>

<script>
import SpectrumUIVue from '../lib/index'
import { VueLive, VueLivePreview, VueLiveEditor } from 'vue-live'
import Samples from './samples'
const defaultTemplate = `<div>preview is under construction</div>`

const {
  ActionButton,
  CycleButton,
  Dropdown,
  DropdownIcon,
  Icon,
  QuickActions,
  Tabs,
  Tool,
  SideNav,
  Toggle,
} = SpectrumUIVue

const sampleExtraComponents = {
  // Tool: {
  //   Icon,
  // },
  QuickActions: {
    ActionButton,
    Icon,
  },
}

export default {
  name: 'Show',
  components: {
    VueLive,
    VueLiveEditor,
    VueLivePreview,
  },
  data() {
    return {
      previewComponents: {},
      previewCode: defaultTemplate,
    }
  },
  methods: {
    setPreview(component) {
      this.previewCode = Samples[component] || defaultTemplate
      const basicComponent = SpectrumUIVue[component] ? {[component]: SpectrumUIVue[component]} : {}
      const extraComponents = sampleExtraComponents[component] ? sampleExtraComponents[component] : {}
      this.previewComponents = {...basicComponent, ...extraComponents}
      // console.log(' * setPreview component : ', component, 'previewComponents', this.previewComponents)
    },
    onNavClick(index) {
      // console.log(' * Show.onNavClick() : ', index)
    },
    updateCode(code) {
      this.previewCode = code;
    },
    previewError(error) {
      console.warn(' (!) previewError', error)
    },
  },
  watch: {
    $route(to, from) {
      const component = to.params.component
      this.setPreview(component)
    }
  },
  mounted() {
    this.setPreview(this.$route.params.component)
  }
}
</script>
