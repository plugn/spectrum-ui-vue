const TerserPlugin = require('terser-webpack-plugin')
// vue.config.js
module.exports = {
  // productionSourceMap: false,
  // disable hashes in filenames
  // filenameHashing: false,
  // tweak internal webpack configuration.
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: config => {
    // If you wish to remove the standard entry point
    config.entryPoints.delete('app')

    // then add your own
    config.entry('lib')
      .add('src/lib/index.js')
    config.entry('docs')
      .add('src/docs/index.js')

    // delete HTML related webpack plugins
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
  }
}
