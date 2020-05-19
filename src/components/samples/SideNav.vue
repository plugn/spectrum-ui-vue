<template>
  <div class="hbox" style="padding: 5px">
    <SideNav style="min-width: 160px;"
      multilevel
      :items="menuTree"
      :selected-item.sync="sideNavIndex"
      @update:selectedItem="onSideNavSampleClick"
    />

    <SideNav style="min-width: 160px;"
      heading
      multilevel
      :items="menuTree"
      :selected-item.sync="sideNavIndex"
      @update:selectedItem="onSideNavSampleClick"
    />
  </div>

</template>

<script>
const menuTree = [{
  label: 'Digest',
  iconName: 'Star'
}, {
  label: 'Catalog',
  iconName: 'Blur',
  disabled: true
}, {
  label: 'Zoo',
  iconName: 'Channel',
  $children: [{
    label: 'frogs',
    iconName: 'RangeMask'
  }, {
    label: 'ducks',
    iconName: 'Refresh'
  }, {
    label: 'rabbits',
    iconName: 'Select'
  }]
}, {
  label: 'Gallery',
  iconName: 'RangeMask'
}, {
  label: 'Feedback',
  iconName: 'Refresh'
}]

export default {
  name: 'SideNavSample',
  data() {
    return {
      sideNavIndex: '0',
      menuTree,
    }
  },
  methods: {
    onSideNavSampleClick(index) {
      console.log(' * onSideNavSampleClick : ', index)
    }
  },
}
</script>
