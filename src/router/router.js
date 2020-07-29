import Vue from 'vue'
import Router from 'vue-router'

import header from './Header'
import cart from './Cart'

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    }
  ]
})

export default router;