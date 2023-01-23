import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import '@/plugins/index'
console.log('12')

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
