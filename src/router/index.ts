import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { routers } from './routers'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routers as RouteRecordRaw[]
})

export default router
