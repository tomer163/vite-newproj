import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//pinia
import { createPinia } from 'pinia'

//vue-router
import { createRouter, createWebHashHistory } from 'vue-router'

//components
import Home from './views/Home.vue'
import About from './views/About.vue'
import Contact from './views/contact.vue'

//auto-animate
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

//font-awsome-icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'
library.add(faSun)

//pinia-setup
const pinia = createPinia()

//vue-router-setup
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        },
    ]
})

createApp(App)

//vue-router
.use(router)

//pinia
.use(pinia)

//auto-animate
.use(autoAnimatePlugin)

//font-awsome-adding-component
.component('font-awesome-icon', FontAwesomeIcon)

.mount('#app')
