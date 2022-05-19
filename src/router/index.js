import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/input',
    name: 'input',
    component: () => import('../views/InputView.vue')
  },
  {
    path: '/output',
    name: 'output',
    component: () => import('../views/OutputView.vue')
  },
  {
    path: '/students',
    name: 'students',
    component: () => import('../views/StudentsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
