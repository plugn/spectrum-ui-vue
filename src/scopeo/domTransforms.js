import defaultRules from './mdRules'

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
