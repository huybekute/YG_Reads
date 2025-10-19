import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home.vue')
    },
    {
      path: '/gioi-thieu',
      name: 'about',
      component: () => import ('../views/about.vue')
    },
    {
      path: '/quyen-rieng-tu',
      name: 'privacy',
      component: () => import ('../views/privacy.vue')
    },
    {
      path: '/tai-khoan',
      name: 'login',
      component: () => import ('../views/account.vue')
    },
    {
      path: '/dang-nhap',
      name: 'dangnhap',
      redirect: {path: '/tai-khoan', query: {tab: 'signin'}}
    },
    {
      path: '/dang-ky',
      name: 'dangky',
      redirect: {path : '/tai-khoan', query: {tab: 'signup'}}
    }
  ],

  scrollBehavior(to, from, savePosition){
    return {top: 0}
  }
})

export default router
