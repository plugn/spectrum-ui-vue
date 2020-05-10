import { vForable, getNested } from '../utils'

export default {
  name: 'LoopMixin',
  methods: {
    vForable,
    getItemValue(item, path) {
      return getNested(item._value, path)
    },
  }
}
