<template>
  <div class="ui-page flex hbox main-start cross-start">
    <div class="vbox">
      <SideNav
        multilevel
        heading
        :items="menuItems"
        :selected-item.sync="sideNavIndex"
        @update:selectedItem="onNavClick"
        style="min-width: 160px;"
      />
    </div>
    <div class="vbox flex stretch main-center cross-center" style="padding: 10px 20px;">
      <div class="spectrum-Typography">
        <p class="spectrum-Body2">
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

  </div>
</template>

<script>
import SpectrumUIVue from '../lib/index'
import menuItems from '../menu'
import MdView from './MdView'
import mdSample from '../articles/MdSample.md'


export default {
  name: 'Docs',
  components: {
    ...SpectrumUIVue,
    MdView,
  },
  data() {
    return {
      md: {
        article: null
      },
      mdSample,
      menuItems,
      sideNavIndex: '0',
    }
  },
  methods: {
    onNavClick(index) {
      // console.log(' * Docs.onNavClick() : ', index)
    },
    async setArticle(article) {
      if (!article) { return }

      let mdArticle = await import(`../articles/${article}.md`)
      // console.log(' * mdArticle : ', mdArticle)
      if (mdArticle) {
        this.md.article = {html: mdArticle.html, attributes: mdArticle.attributes}
        // console.log(' * md.article : ', this.md.article)
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
  // mounted() {
  //   this.setArticle(this.$route.params.article)
  //   // console.log(' * this.mdSample.attributes : ', this.mdSample.attributes)
  // }
}
</script>
