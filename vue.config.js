const markdownIt = require('markdown-it');
const markdownItPrism = require('markdown-it-prism');
const Mode = require('frontmatter-markdown-loader/mode')

module.exports = {
  runtimeCompiler: true,
  chainWebpack: config => {
    config.module
    .rule('markdown')
    .test(/\.md$/)
    .use('frontmatter-markdown-loader')
    .loader('frontmatter-markdown-loader')
    .tap(options => {
      return {
        mode: [Mode.VUE_COMPONENT, Mode.VUE_RENDER_FUNCTIONS, Mode.HTML, Mode.BODY],
        // mode: [Mode.VUE_COMPONENT],
      }
    })
  }
}
