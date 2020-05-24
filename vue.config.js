module.exports = {
  runtimeCompiler: true,
  chainWebpack: config => {
    config.module
    .rule('markdown')
    .test(/\.md$/)
    .use('markdown-raw')
    .loader('raw-loader')
  }
}
