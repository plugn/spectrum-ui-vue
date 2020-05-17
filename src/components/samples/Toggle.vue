<template>
  <div>
    <Toggle label="simple" />

    <Toggle label="quiet" quiet />

    <Toggle label="unused" disabled />

    <Toggle :ab-labels="['in', 'out']" ab quiet />
  </div>
</template>

<script>
export default {
  name: 'ToggleSample'
}
</script>
