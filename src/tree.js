export default [
  {
    'label': 'Catalog',
    'iconName': 'Star'
  },
  {
    'label': 'Docs',
    'iconName': 'Blur',
    'disabled': true,
  },
  {
    'Buttons': 'Buttons',
    'iconName': 'Button',
    '$children': [
      {
        'label': 'ActionButton',
      },
      {
        'label': 'CycleButton',
      },
      {
        'label': 'rabbits',
        'iconName': 'Select',
        '$children': [
          {
            'label': 'frogs',
            'iconName': 'RangeMask'
          },
          {
            'label': 'ducks',
            'iconName': 'Refresh'
          },
          {
            'label': 'rabbits',
            'iconName': 'Select'
          }
        ]
      }
    ]
  },
  {'label': 'Gallery', 'iconName': 'RangeMask'},
  {'label': 'Feedback', 'iconName': 'Refresh'}
]
