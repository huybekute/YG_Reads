import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/trang-chu.vue')
    },
    {
      path: '/gioi-thieu',
      name: 'about',
      component: () => import ('../views/gioi-thieu.vue')
    },
    {
      path: '/quyen-rieng-tu',
      name: 'privacy',
      component: () => import ('../views/quyen-rieng-tu.vue')
    },
  ],

  scrollBehavior(to, from, savePosition){
    return {top: 0}
  }
})

export default router
