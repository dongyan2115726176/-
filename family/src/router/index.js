import Vue from 'vue'
import Router from 'vue-router'
import mains from '@/components/mains'
import shop from '@/components/shop'
import mys from '@/components/mys'
import contact from '@/components/contact'
import detail from '@/components/detail'
import car from '@/components/car/car'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/mains',
      name: 'mains',
      component: mains,
      meta: { 
        navShow: true
      }
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop,
      meta: {
        navShow: true
      }
    },
    {
      path: '/mys',
      name: 'mys',
      component: mys,
      meta: {
        navShow: true
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact,
      meta: {
        navShow: true
      }
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail,
      meta: {
        navShow: false
      }
    },
    {
      path: '/car',
      name: 'car',
      component: car,
      meta: {
        navShow: false
      }
    },
    {
      path: "*",
      redirect: "/mains",
      meta: {
        navShow: true
      }
    }
  ]
})
