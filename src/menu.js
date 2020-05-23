export default [
  {
    label: 'Getting Started',
    to: '/article/MdSample'
  },
  {
    label: 'Text Styles',
    to: '/article/Text'
  },
  {
    label: 'Dropdown',
    to: '/view/Dropdown',
  },
  {
    label: 'Icon',
    to: '/view/Icon',
  },
  {
    label: 'Toggle',
    to: '/view/Toggle',
  },
  {
    label: 'Buttons',
    iconName: 'Button',
    $children: [
      {
        label: 'ActionButton',
        to: '/view/ActionButton'
      },
      {
        label: 'CycleButton',
        to: '/view/CycleButton',
      },
      {
        label: 'Tool',
        to: '/view/Tool',
      },
      {
        label: 'QuickActions',
        to: '/view/QuickActions',
      },
    ]
  },
  {
    label: 'Navigation',
    iconName: 'BreadcrumbNavigation',
    $children: [
      // {
      //   label: 'NavLink',
      //   to: '/view/NavLink',
      // },
      {
        label: 'SideNav',
        to: '/view/SideNav',
      },
      {
        label: 'Tabs',
        to: '/view/Tabs',
      }
    ]
  },
  {
    label: 'Lists',
    iconName: 'ViewList',
    disabled: true,
  },
]
