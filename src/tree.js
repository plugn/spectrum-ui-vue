export default [
  {'label': 'Digest', 'iconName': 'Star'}, {
  'label': 'Catalog',
  'iconName': 'Blur',
  'disabled': true
}, {
  'label': 'Zoo',
  'iconName': 'Channel',
  '$children': [
    {'label': 'frogs', 'iconName': 'RangeMask'},
    {
      'label': 'ducks',
      'iconName': 'Refresh'
    }, {
      'label': 'rabbits',
      'iconName': 'Select',
      '$children': [
        {'label': 'frogs', 'iconName': 'RangeMask'},
        {
          'label': 'ducks',
          'iconName': 'Refresh'
        }, {'label': 'rabbits', 'iconName': 'Select'}]

    }]
},
  {'label': 'Gallery', 'iconName': 'RangeMask'},
  {'label': 'Feedback', 'iconName': 'Refresh'}
]
