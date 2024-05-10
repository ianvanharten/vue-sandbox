import { createRouter, createWebHistory } from 'vue-router'
import AuthenticatedContainer from '../router/AuthenticatedContainer.vue'
import PublicContainer from '../router/PublicContainer.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AuthenticatedContainer,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        },
        {
          path: '/about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/AboutView.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: PublicContainer,
      children: [
        {
          path: '',
          name: 'login',
          component: () => import('../views/LoginView.vue')
        }
      ]
    }
  ]
})

export default router
