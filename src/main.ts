import App from './App.vue'
import { setupRouter } from '@/router'
import { setupStore } from './stores'
import '@/plugins'
export const app = createApp(App)

const setup = () => {
  setupRouter(app)
  setupStore(app)
  app.mount('#app')
}
setup()
