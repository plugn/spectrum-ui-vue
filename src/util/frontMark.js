const frontmatter = require('front-matter')
import MarkdownIt from 'markdown-it'
import prism from 'markdown-it-prism'

import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-scss'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-js-extras'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-shell-session'

// const stringify = (src) => JSON.stringify(src).replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029')

function renderMD(src = '') {
  const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
  })
  md.use(prism);
  return md.render(src)
}


export function frontMark (source) {
  const fm = frontmatter(source)
  fm.html = renderMD(fm.body)

  return fm
}
