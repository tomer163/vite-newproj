import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//font-awsome-icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'
library.add(faSun)

createApp(App)

//font-awsome-adding-component
.component('font-awesome-icon', FontAwesomeIcon)

.mount('#app')
