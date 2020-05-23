<template>
  <dynamic v-bind:template="template"></dynamic>
</template>

<script>
import SpectrumUIVue from '../lib/index'
import domTransform from '../util/domTransforms'
import dynamic from './Renderer'

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
    dynamic,
    ...SpectrumUIVue,
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
        // console.log(' * watch html : ', value)
        if (typeof value !== 'string') {
          console.log(' (!) watch html : ', value)
          return
        }
        this.setTemplate(value)
      }
    },

    // html (value) {
    //   console.log(' * )watch html : ', value)
    //   if (typeof value !== 'string') {
    //     console.log(' (!) watch html : ', value)
    //     return
    //   }
    //   this.setTemplate(value)
    // }
  },
  data() {
    return {
      parentComponent: this,
      template: '',
    }
  },
  // mounted() {
  //   console.log(' * MarkdownView mounted')
  //   this.setTemplate()
  // }
}
</script>

