import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    // meta: {layout: 'main-layout'},
    component: () => import('../views/Home.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    // meta: {layout: 'main-layout'},
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/login',
    name: 'Login',
    // meta: {layout: 'main-layout'},
    component: () => import('../views/Login.vue')
  },
  {
    path: '/registr',
    name: 'Registr',
    // meta: {layout: 'main-layout'},
    component: () => import('../views/Registr.vue')
  },
  {
    path: '/posts',
    name: 'home2',
    // meta: {layout: 'main-layout'},
    component: () => import('../views/Posts.vue')
  },
  {
    path: '/about',
    name: 'about',
    // meta: {layout: 'main-layout'},
    component: () => import('../views/About.vue')
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
