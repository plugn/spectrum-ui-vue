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

<!--        <MdInject />-->
        <MarkdownView
          :fm-params="mdSample.attributes"
          :html="mdSample.html"
          class="spectrum-Body3"
        />

      </div>
    </div>

  </div>
</template>

<script>
import SpectrumUIVue from '../lib/index'
import menuItems from '../menu'
import MarkdownView from './MarkdownView'
import mdSample from '../articles/MdSample.md'


export default {
  name: 'Docs',
  components: {
    ...SpectrumUIVue,
    MarkdownView,
  },
  data() {
    return {
      mdSample,
      menuItems,
      sideNavIndex: '0',
      MdArticle: null,
    }
  },
  methods: {
    onNavClick(index) {
      // console.log(' * Docs.onNavClick() : ', index)
    },
  },
  mounted() {
/*
    if (this.$route.params.article) {
      let ArticleInstance = mdInjectFactory(() => import(`../articles/${this.$route.params.article}.md`), this.$route.params.article)
      console.log('ArticleInstance', ArticleInstance)
      this.MdArticle = ArticleInstance
    }
*/

    console.log(' * this.mdSample.attributes : ', this.mdSample.attributes)
  }
}
</script>
