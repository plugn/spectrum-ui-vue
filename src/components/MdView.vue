<template>
  <Renderer :template="template"></Renderer>
</template>

<script>
import SpectrumUIVue from '../lib/index'
import domTransform from '../util/domTransforms'
import Renderer from '../util/Renderer'

export default {
  name: 'MdView',
  props: {
    html: {
      type: String,
      default: '',
    },
    transforms: {
      type: Array,
      default: () => [],
    },
    fmParams: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    Renderer,
    ...SpectrumUIVue,
  },
  data() {
    return {
      template: '',
    }
  },
  methods: {
    domTransform,
    setTemplate(html, fmParams) {
      this.template = this.domTransform(html || this.html, fmParams || this.fmParams)
    }
  },
  watch: {
    html: {
      immediate: true, // makes the watcher fire on first render, too.
      handler(value) {
        if (typeof value === 'string') {
          this.setTemplate(value)
        }
      }
    },
  },
}
</script>

