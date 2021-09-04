import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    name: 'Recommend',
    component: () => import(/* webpackChunkName: "Recommend" */ '../views/recommend.vue')
  },
  {
    path: '/singer',
    name: 'Singer',
    component: () => import(/* webpackChunkName: "Recommend" */ '../views/singer.vue')
  },
  {
    path: '/top-list',
    name: 'Top-list',
    component: () => import(/* webpackChunkName: "Recommend" */ '../views/top-list.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "Recommend" */ '../views/search.vue')
  }
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
