import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/contact.vue'

export default [
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