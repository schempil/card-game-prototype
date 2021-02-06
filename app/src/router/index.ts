import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/basic',
    name: 'Basic',
    component: () => import(/* webpackChunkName: "basic" */ '../views/Basic.vue')
  },
  {
    path: '/adventure',
    name: 'Adventure',
    component: () => import(/* webpackChunkName: "basic" */ '../views/Adventure.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
