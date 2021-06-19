import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/views/Home.vue'
import Contacts from '@/views/Contacts.vue'
import Portfolio from '@/views/Portfolio.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts,
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
