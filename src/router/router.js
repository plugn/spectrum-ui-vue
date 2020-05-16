import Vue from 'vue'
import Router from 'vue-router'
import Catalog from '../components/Catalog'
import Docs from '../components/Docs'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Docs,
    },
    {
      path: '/catalog',
      component: Catalog,
    },
  ]
})
