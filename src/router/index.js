import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Skills from '../components/Skills.vue'
import ContactUse from '../components/ContactUse.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/skills',
      name: 'Skills',
      component: Skills
    },
    {
      path: '/CU',
      name: 'ContactUse',
      component: ContactUse
    },
  ]
})

export default router
