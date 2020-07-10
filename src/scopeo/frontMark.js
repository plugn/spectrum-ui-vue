const frontmatter = require('front-matter')
import MarkdownIt from 'markdown-it'
import prism from 'markdown-it-prism'
import emoji from 'markdown-it-emoji'
import sub from 'markdown-it-sub'
import sup from 'markdown-it-sup'
import ins from 'markdown-it-ins'
import deflist from 'markdown-it-deflist'
import footnotes from 'markdown-it-footnote'
import mark from 'markdown-it-mark'
import container from 'markdown-it-container'
import abbr from 'markdown-it-abbr'

import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-yaml'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-scss'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-js-extras'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-shell-session'

function renderMD(src = '') {
  const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
  })
  md.use(prism)
    .use(abbr)
    .use(deflist)
    .use(sub)
    .use(sup)
    .use(ins)
    .use(footnotes)
    .use(mark)
    .use(emoji)
    .use(container, 'spoiler', {
      validate: function(params) {
        return params.trim().match(/^spoiler\s+(.*)$/);
      },
      render: function (tokens, idx) {
        let m = tokens[idx].info.trim().match(/^spoiler\s+(.*)$/);
        if (tokens[idx].nesting === 1) {
          // opening tag
          return '<details><summary>' + md.utils.escapeHtml(m[1]) + '</summary>\n';
        } else {
          // closing tag
          return '</details>\n';
        }
      }
    })
  return md.render(src)
}


export function frontMark (source) {
  const fm = frontmatter(source)
  fm.html = renderMD(fm.body)

  return fm
}
