<template>
  <div class="hbox" style="padding: 5px;">
    <Dropdown label="Choose target"
      multiple
      :items="items"
    />
  </div>
</template>

<script>
  export default {
    name: 'DropdownSample',
    data() {
      return {
        items : [
          {label: 'white', selected: true},
          {label: 'red'},
          {label: 'orange'},
          {label: 'yellow'},
          {label: 'green'},
          {label: 'blue'},
          {label: 'violet'},
        ],
      }
    }
  }
</script>
