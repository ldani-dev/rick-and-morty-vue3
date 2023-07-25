// Composables
import { createRouter, createWebHistory } from 'vue-router'
import NotFound from "@/views/NotFound.vue"

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
    ],
  },
  {
    path: '/character',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: ':idCharacter',
        name: 'character',
        component: () => import('@/views/Character.vue'),
      },
    ],
  },
  {
    path: '/episode',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: ':idEpisode',
        name: 'episode',
        component: () => import('@/views/Episode.vue'),
      },
    ],
  },
  {
    path: '/contact',
    component: () => import('@/layouts/default/Contact.vue'),
    children: [
      {
        path: '',
        name: 'Contact',
        component: () => import('@/views/Contact.vue'),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
