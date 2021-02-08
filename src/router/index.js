import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Vozac from '@/components/Vozac.vue'
import Putnik from '@/components/Putnik.vue'
import Paket from '@/components/Paket.vue'
import LogIn from '@/components/LogIn.vue'
import SingIn from '@/components/SingIn.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (Odabir.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Odabir" */ '../views/About.vue')
  },
  {
    path: '/vozac',
    name: 'VOZAČ',
    component: Vozac
  },
  {
    path: '/putnik',
    name: 'PUTNIK',
    component: Putnik
  },
  {
    path: '/paket',
    name: 'PAKET',
    component: Paket
  },
  {
    path:'/login',
    name: 'LOG IN',
    component: LogIn
  },
  {
    path: '/singin',
    name: 'SING IN',
    component: SingIn
  }

]

const router = new VueRouter({
  routes
})

export default router
