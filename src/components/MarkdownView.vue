<template>
  <runtime-template-compiler :template="template" />
</template>

<script>
import SpectrumUIVue from '../lib/index'
import domTransform from '../util/domTransforms'

export default {
  name: 'MarkdownView',
  props: {
    basicComponent: {
      type: Object,
    },
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
    ...SpectrumUIVue,
  },
  data() {
    return {
      template: domTransform(this.html, this.fmParams)
    }
  },
  mounted() {
    console.log(' * this.htmlResult : ', this.template)

  }
}
</script>

