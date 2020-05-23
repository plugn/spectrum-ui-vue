import Vue from 'vue'
import router from './router/router'
import App from './components/App.vue'

// Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
