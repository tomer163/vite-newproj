import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//vue-router
import { createRouter, createWebHashHistory } from 'vue-router'

//components
import Home from './views/Home.vue'
import About from './views/About.vue'

//font-awsome-icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'
library.add(faSun)

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
    ]
})

createApp(App)

//vue-router
.use(router)

//font-awsome-adding-component
.component('font-awesome-icon', FontAwesomeIcon)

.mount('#app')
