import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/homeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import ('../views/aboutView.vue')
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: () => import ('../views/privacyView.vue')
    }
  ],

  scrollBehavior(to, from, savePosition){
    return {top: 0}
  }
})

export default router
