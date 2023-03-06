import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { routers } from './routers'
import { setupAfterEach, setupBeforeEach } from './each'
import type { App } from 'vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routers as RouteRecordRaw[]
})

export const setupRouter = (app: App) => {
  setupAfterEach(router)
  setupBeforeEach(router)
  app.use(router)
}
