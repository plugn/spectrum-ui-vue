<template>
  <div style="padding: 20px 0;">
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
import Samples from '../components/samples'
const defaultTemplate = `<div>preview is under construction</div>`

export default {
  name: 'LiveCode',
  props: {
    sample: {
      type: String,
      default: '',
    }
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
    },
    updateCode(code) {
      this.previewCode = code;
    },
    previewError(error) {
      console.warn(' (!) previewError', error)
    },
  },
  watch: {
    sample(component) {
      if (component && Samples[component]) {
        this.setPreview(component)
      }
    }
  },
  created() {
    this.previewComponents = this.$root.$options.components
  },
  mounted() {
    this.setPreview(this.sample)
  }
}
</script>
