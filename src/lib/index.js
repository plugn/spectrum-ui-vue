import ActionButton from './components/ActionButton.vue'
import CycleButton from './components/CycleButton'
import Dropdown from './components/Dropdown.vue'
import DropdownIcon from './components/DropdownIcon.vue'
import Icon from './components/Icon.vue'
import QuickActions from './components/QuickActions.vue'
import Tabs from './components/Tabs.vue'
import Tool from './components/Tool.vue'
import SideNav from './components/SideNav'
import Toggle from './components/Toggle'

const components = {
  ActionButton,
  CycleButton,
  Dropdown,
  DropdownIcon,
  Icon,
  QuickActions,
  Tabs,
  Tool,
  SideNav,
  Toggle,
}

const install = function(Vue, opts = {}) {
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key]);
  })
}

export default {
  ...components,
  install,
}
