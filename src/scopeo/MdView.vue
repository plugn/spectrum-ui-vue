<template>
  <Renderer :template="template"></Renderer>
</template>

<script>
import domTransform from './domTransforms'
import Renderer from './Renderer'
import { frontMark } from './frontMark'
import config from '../../scopeo.config'

export default {
  name: 'MdView',
  props: {
    article: {
      type: String,
      default: '',
    },
    markdown: {
      type: String,
      default: '',
    },
    html: {
      type: String,
      default: '',
    },
    transforms: {
      type: Array,
      default: () => [],
    },
    params: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    Renderer,
  },
  data() {
    return {
      template: '',
    }
  },
  methods: {
    domTransform,
    setTemplate(html, params) {
      this.template = this.domTransform(html || this.html, params || this.params)
    },
    setMarkdown(source) {
      const result = frontMark(source.default)
      if (result) {
        this.setTemplate(result.html, result.attributes)
      }
    },
    async setArticle(article) {
      article = article || config.defaultArticle
      const path = config.articlesPath.replace(/^@\/?|^\.\/?|\/+$/g, '')
      let source = await import(`../${path}/${article}.md`)
      const result = frontMark(source.default)
      if (result) {
        this.setTemplate(result.html, result.attributes)
      }
    },
  },
  mounted() {
    if (this.html) {
      this.setTemplate()
    }
    else if (this.markdown) {
      this.setMarkdown(this.markdown)
    }
    else {
      this.setArticle(this.article)
    }
  },
  watch: {
    article: {
      immediate: false,
      handler(value) {
        if (typeof value === 'string') {
          this.setArticle(value)
        }
      }
    },
    html: {
      immediate: false,
      handler(value) {
        if (typeof value === 'string') {
          this.setTemplate(value)
        }
      }
    },
    markdown: {
      immediate: false,
      handler(value) {
        if (typeof value === 'string') {
          this.setMarkdown(value)
        }
      }
    },
  },
}
</script>

