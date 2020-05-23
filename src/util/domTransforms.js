const defaultRules = {
  'code': (el, {codeLevel}) => {
    el.classList.add(`spectrum-Code${codeLevel || 3}`)
  },
  'h1,h2,h3,h4,h5,h6': el => {
    const tag = el.nodeName.toLowerCase().match(/h(\d)/)
    const level = tag && tag[1] || ''
    level && el.classList.add(`spectrum-Heading${level}`)
  },
  'img': el => {
    el.classList.add('spectrum-Asset-image')
  },
  'hr': el => el.classList.add('spectrum-Rule', 'spectrum-Rule--medium')
}

function walkDoc(doc, rules, params = {}) {
  let textTransformer = doc.createNodeIterator(
    doc.documentElement,
    NodeFilter.SHOW_ELEMENT,
    function(node) {
      const transforms = Object.keys(rules)
        .filter(selector => node.matches(selector))
        .map(name => rules[name])
      transforms.reduce((node, fn) => typeof fn === 'function' ? (fn(node, params), node) : node, node)
    }
  )

  let currentNode;
  while ((currentNode = textTransformer.nextNode())) {}

  return doc
}


export default function domTransform (html, params = {}, rules = defaultRules) {
  let parser = new DOMParser()
  let srcDocument = parser.parseFromString(html, 'text/html')

  let targetDocument = walkDoc(srcDocument, rules, params)

  let serializer = new XMLSerializer();
  return serializer
    .serializeToString(targetDocument.body)
    .replace(/<(\/)?body[^>]*>/g, '<$1div>')

}
