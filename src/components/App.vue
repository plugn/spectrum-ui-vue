<template>
  <div class="ui-page flex hbox main-start cross-start">
    <div class="vbox">
      <SideNav
        multilevel
        heading
        :items="menuItems"
        :selected-item.sync="sideNavIndex"
        style="min-width: 160px;"
      />
    </div>
    <router-view />
  </div>
</template>
<script>
import menuItems from '../menu'

export default {
  name: 'App',
  data() {
    return {
      menuItems,
      sideNavIndex: '0',
    }
  },
}
</script>
<style>
@import "~vue-prism-editor/dist/VuePrismEditor.css";
@import "~prismjs/themes/prism-tomorrow.css";
html, body {
  height: 100%;
}
</style>
