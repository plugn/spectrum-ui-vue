import Vue from 'vue'
import Router from 'vue-router'
import Catalog from '../components/Catalog'
import Docs from '../components/Docs'
import Show from '../components/Show'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/view/:component',
      component: Show,
    },
    {
      path: '/',
      component: Catalog,
    },
    // {
    //   path: '/',
    //   component: Docs,
    // },
  ]
})
