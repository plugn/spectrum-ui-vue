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
        mode: [Mode.VUE_COMPONENT, Mode.HTML, Mode.BODY, Mode.META]
      }
    })
  }
}
