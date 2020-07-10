import Vue from "vue";
// Reference array sent to dynamic staticRenderFns
let staticRenderFns = []

export default {
  props: {
    template: String
  },
  data() {
    return {
      templateRender: null,
    }
  },
  render(h) {
    if (!this.templateRender) {
      return h('div', 'loading...');
    } else { // If there is a template, I'll show it
      return this.templateRender();
    }
  },
  created() {
    this.$options.components = this.$root.$options.components
  },
  watch: {
    // Every time the template prop changes, I recompile it to update the DOM
    template:{
      immediate: true, // makes the watcher fire on first render, too.
      handler() {
        let res = Vue.compile(this.template);

        this.templateRender = res.render;

        // staticRenderFns belong into $options,
        // appearantly
        this.$options.staticRenderFns = []

        // clean the cache of static elements
        // this is a cache with the results from the staticRenderFns
        this._staticTrees = []

        // Fill it with the new staticRenderFns
        for (let i in res.staticRenderFns) {
          //staticRenderFns.push(res.staticRenderFns[i]);
          this.$options.staticRenderFns.push(res.staticRenderFns[i])
        }
      }
    }
  },
}
