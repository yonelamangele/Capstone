import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/productsView',
    name: 'productsView',
    component: () => import('../views/productsView.vue')
  },
  {
    path: '/singleProductView',
    name: 'singleProductView',
    component: () => import('../views/singleProductView.vue')
  },
  {
    path: '/adminView',
    name: 'adminView',
    component: () => import('../views/adminView.vue')
  },
  {
    path: '/contactView',
    name: 'contactView',
    component: () => import('../views/contactView.vue')
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import('../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
