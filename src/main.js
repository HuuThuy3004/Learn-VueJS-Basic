import { createApp } from 'vue'
import App from './App.vue'
import routerSS6 from './sessions/ss6-router/routes/index.js'

const app = createApp(App)

app.use(routerSS6).mount('#app')
