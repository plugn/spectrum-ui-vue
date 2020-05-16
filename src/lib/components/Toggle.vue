<template>
  <div class="spectrum-ToggleSwitch"
    :class="{
      'spectrum-ToggleSwitch--quiet': quiet,
      'spectrum-ToggleSwitch--ab': ab,
    }"
  >
    <label v-if="ab" class="spectrum-ToggleSwitch-label" :for="elInputId" v-text="abLabels[0]"/>
    <input type="checkbox" class="spectrum-ToggleSwitch-input"
      :id="elInputId"
      :checked="checked"
      :disabled="disabled"
    >
    <span class="spectrum-ToggleSwitch-switch"></span>
    <label class="spectrum-ToggleSwitch-label" :for="elInputId" v-text="ab ? abLabels[1] : label"/>
  </div>
</template>
<div class="spectrum-ToggleSwitch spectrum-ToggleSwitch--ab">
  <label class="spectrum-ToggleSwitch-label" for="toggle-ab">A</label>
  <input type="checkbox" class="spectrum-ToggleSwitch-input" id="toggle-ab">
  <span class="spectrum-ToggleSwitch-switch"></span>
  <label class="spectrum-ToggleSwitch-label" for="toggle-ab">B</label>
</div>

<script>
export default {
  name: 'Toggle',
  props: {
    ab: Boolean,
    abLabels: {
      type: Array,
      default: () => (['A', 'B'])
    },
    checked: Boolean,
    disabled: Boolean,
    label: String,
    quiet: Boolean,
  },
  data() {
    return {
      elInputId: 'sue_toggle-id_' + this._uid,
    }
  },
}
</script>
