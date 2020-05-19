<template>
  <div class="hbox" style="padding: 5px;">
    <Dropdown label="Choose some colors"
      multiple
      :items="items"
      :selected-indexes="[1,5]"
    />

    <Dropdown style="margin-left:10px"
      label="Choose one color"
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
          {label: 'white'},
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
