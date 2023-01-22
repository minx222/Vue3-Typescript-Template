import type { Router } from 'vue-router'

export const setupBeforeEach = (router: Router) => {
  router.beforeEach(async (to, from, next) => {
    next()
  })
}

export const setupAfterEach = (router: Router) => {
  router.afterEach(async () => {
    window.scrollTo(0, 0)
  })
}

export const setupEach = (router: Router) => {
  setupBeforeEach(router)
  setupAfterEach(router)
}
