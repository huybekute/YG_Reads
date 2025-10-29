import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'

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
      path:'/dieu-khoan-dich-vu',
      name: 'term-of-services',
      component: () => import ('../views/term-of-service.vue')
    },
    {
      path: '/chinh-sach-doi-tra-va-hoan-tien',
      name: 'return-and-refund',
      component: () => import ('../views/return-and-refund.vue')
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
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/admin/admin.vue'),
      meta: {
        requiresAdmin: true
      }
    },
    {
      path: '/thong-tin-tai-khoan',
      name: 'profile',
      component: () => import('../views/profile.vue')
    }
  ],

  scrollBehavior(to, from, savePosition){
    return {top: 0}
  }

})

//chi co admin dc phep truy cap /admin
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  if(to.meta.requiresAdmin){
    if(authStore.isLogin && authStore.userRole === 'admin'){
      next();
    }
    else{
      alert('Bạn không có quyền truy cập trang này');
      next('/');
    }
  }
  else{
    next()
  }
})

export default router
