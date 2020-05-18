<template>
  <div class="hbox">
    <div class="spectrum-QuickActions-overlay" style="padding: 20px;">

      <div class="spectrum-QuickActions is-open">
        <ActionButton quiet>
          <Icon name="edit"/>
        </ActionButton>
        <ActionButton>
          <Icon name="copy"/>
        </ActionButton>
        <ActionButton disabled quiet label="ds qt"/>
        <ActionButton is-selected quiet label="sel qt">
          <Icon name="copy"/>
        </ActionButton>
        <ActionButton is-selected label="sel">
          <Icon name="delete"/>
        </ActionButton>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'QuickActionsSample'
  }
</script>

