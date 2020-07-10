import { getNested } from './utils'

export const applyInlineStyle = (el, style) =>
  Array.from(Object.entries(style))
  .forEach(([prop, val]) =>
    el.style[prop] = val)

/**
 * DOM Document Transformation Rules
 * key of Object is CSS Selector,
 * value is a function that transforms selected element
 */
export default {
  'code': (el, {codeLevel}) => {
    el.classList.add(`spectrum-Code${codeLevel || 3}`)
  },
  'h1,h2,h3,h4,h5,h6': el => {
    const tag = el.nodeName.toLowerCase().match(/h(\d)/)
    const level = tag && tag[1] || ''
    level && el.classList.add(`spectrum-Heading${level}`)
  },
  'img': (el, params) => {
    const style = getNested(params || {}, 'images.style')
    if (style) {
      applyInlineStyle(el, style)
    }
    el.classList.add('spectrum-Asset-image')
  },
  'hr': el => el.classList.add('spectrum-Rule', 'spectrum-Rule--medium'),
  'table': el => el.classList.add('spectrum-Table'),
  'thead': el => el.classList.add('spectrum-Table-head'),
  'th': el => el.classList.add('spectrum-Table-headCell'),
  'tbody': el => el.classList.add('spectrum-Table-body'),
  'tbody tr': el => el.classList.add('spectrum-Table-row'),
  'td': el => el.classList.add('spectrum-Table-cell'),
  'a': (el, params = {}) => {
    el.classList.add((params.links || []).includes('subtle') ? 'spectrum-Link--subtle' : 'spectrum-Link')
  }
}
