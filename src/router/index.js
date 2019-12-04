import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: Home

//   },
//   {
//     path: '/cart',
//     name: 'cart',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

const Home = () =>import('@/views/home/Home.vue')
const CateGory = () =>import('@/views/category/CateGory.vue')
const Cart = () =>import('@/views/cart/Cart.vue')
const ProFile = () =>import('@/views/profile/ProFile.vue')

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      redirect:'/home',
    },
    {
      path: '/home',
      component:Home,
    },
    
    {
      path: '/category',
      component:CateGory,
    },
    
    {
      path: '/cart',
      component:Cart,
    },
    {
      path: '/profile',
      component:ProFile,
    },
  ]
})