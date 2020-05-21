<template>
  <div v-html="htmlResult"></div>
</template>

<script>
const chainTransform = (input, transforms = [], params = {}) =>
  transforms.reduce((acc, fn) => typeof fn === 'function' ? fn(acc, params) : acc, String(input))

const headers = (input, fmParams = {}, classBase = 'spectrum-Heading') => {
  return input.replace(/<h(\d)>/gmi, `<h$1 class="${classBase}$1">`)
}
/*
const code = (input, fmParams = {}, classBase = 'spectrum-Code') => {
  return input.replace(/<code/gmi, `<code class="${classBase}${fmParams.level || ''}">`)
}
*/

const basicTransforms = [headers]

export default {
  name: 'MarkdownView',
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
  data() {
    return {
      htmlResult: chainTransform(this.html, basicTransforms.concat(this.transforms), this.fmParams)
    }
  },
  methods: {
    // htmlResult () {
    //   chainTransform(this.html, this.transforms, this.fmParams)
    // }
  }
}
</script>

<style scoped>

</style>
