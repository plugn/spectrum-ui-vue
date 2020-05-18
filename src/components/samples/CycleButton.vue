<template>
  <div class="hbox">
    <CycleButton quiet size="M"
      :selectedIndex.sync="cycleBtnIndex1"
      :items="[
            {iconName: 'RewindCircle', label: '<<'},
            {iconName: 'StepBackwardCircle', label: '<='},
          ]"
      @update:selectedIndex="onCycleSelect"
    />

    <CycleButton quiet size="L"
      :selectedIndex.sync="cycleBtnIndex"
      :items="[
            {iconName: 'PlayCircle', label: 'Play'},
            {iconName: 'PauseCircle', label: 'Pause'},
          ]"
      @update:selectedIndex="onCycleSelect"
    />
    <CycleButton quiet size="L"
      :selectedIndex="0"
      :items="[
            {iconName: 'StopCircle', label: '[]'},
          ]"
      @update:selectedIndex="onCycleSelect"
    />
    <CycleButton quiet size="M"
      :selectedIndex.sync="cycleBtnIndex2"
      :items="[
            {iconName: 'FastForwardCircle', label: '>>'},
            {iconName: 'StepForwardCircle', label: '=>'},
          ]"
      @update:selectedIndex="onCycleSelect"
    />
  </div>
</template>

<script>
export default {
  name: 'CycleButtonSample',
  data() {
    return {
      cycleBtnIndex: 0,
      cycleBtnIndex1: 0,
      cycleBtnIndex2: 0,
    }
  },
  methods: {
    onCycleSelect(index, item) {
      console.log('onCycleSelect()', index, item)
    },
  },

}
</script>

<style scoped>

</style>
