<template>
    <div class="vbox flex stretch main-center cross-center" style="padding: 10px 20px;">
      <div class="spectrum-Typography">
        <p class="spectrum-Body2"
          v-if="!md.article"
        >
          Choose a component from a SideBar
        </p>

        <MdView
          v-if="md.article"
          :fm-params="md.article.attributes"
          :html="md.article.html"
          class="spectrum-Body3"
        />

      </div>
    </div>
</template>

<script>
import MdView from './MdView'
import { frontMark } from '../scopeo/frontMark'

export default {
  name: 'Docs',
  components: {
    MdView,
  },
  data() {
    return {
      md: {
        article: null
      },
    }
  },
  methods: {
    async setArticle(article) {
      if (!article) { return }

      let mdArticle = await import(`../articles/${article}.md`)
      // console.log(' * mdArticle : ', mdArticle)
      const fm = frontMark(mdArticle.default)
      if (mdArticle) {
        this.md.article = {html: fm.html, attributes: fm.attributes}
      }
    },
  },
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        this.setArticle(to.params.article)
      }
    }
  },
}
</script>
