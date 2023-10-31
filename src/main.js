import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//pinia
import { createPinia } from 'pinia'

//vue-router
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './assets/routes.js'

//auto-animate
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

//pinia-setup
const pinia = createPinia()

//vue-router-setup
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

createApp(App)

//vue-router
.use(router)

//pinia
.use(pinia)

//auto-animate
.use(autoAnimatePlugin)

.mount('#app')
