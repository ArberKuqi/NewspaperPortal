import { createApp } from 'vue'
import App from './App.vue'
import router from './routers/index.js'
import { createPinia } from 'pinia'

import 'bootstrap/dist/css/bootstrap.min.css'  // Bootstrap from npm
import 'bootstrap/dist/js/bootstrap.bundle.min.js'  // Bootstrap JS
import '@/assets/vendor/bootstrap-icons/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.css'

// Your custom JS
import '@/assets/js/main.js'

const app = createApp(App)

const pinia = createPinia()

app.use(router)
app.use(pinia)
app.mount('#app')