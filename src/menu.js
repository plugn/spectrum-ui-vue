export default [
  {
    label: 'Catalog',
    iconName: 'Apps',
    to: '/catalog'

  },
  {
    label: 'Docs',
    iconName: 'Compass',
    to: '/',
    // 'disabled': true,
  },
  {
    label: 'Buttons',
    iconName: 'Button',
    $children: [
      {
        label: 'ActionButton',
      },
      {
        label: 'CycleButton',
      },
      {
        label: 'Tool',
      },
      {
        label: 'QuickActions',
      },
    ]
  },
  {
    label: 'Navigation',
    iconName: 'BreadcrumbNavigation',
    $children: [
      {
        label: 'NavLink',
      },
      {
        label: 'SideNav',
      },
      {
        label: 'Tabs',
      }
    ]
  },
  {
    label: 'Dropdown',
    // iconName: 'Refresh',
  },
  {
    label: 'DropdownIcon',
    // iconName: 'Refresh',
  },
  {
    label: 'Icon',
    // iconName: 'Refresh',
  },
  {
    label: 'Toggle',
    // iconName: 'Refresh',
  },
  {
    label: 'Lists',
    iconName: 'ViewList',
    disabled: true,
  },
]
