import { getNested } from '../utils'

export const vForable = list => list.map((item, key) => ({item, key}))

export default {
  name: 'LoopMixin',
  methods: {
    vForable,
    getNested,
  }
}
