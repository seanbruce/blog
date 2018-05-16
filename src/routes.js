import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'

import Home from './components/Home.vue'
import Cart from './components/Cart.vue'
import Portfolio from './components/Portfolio.vue'
// import SignUp from './components/SignUp.vue'
import LogIn from './components/LogIn.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home },
    {
        path: '/portfolio', 
        component: Portfolio, 
        beforeEnter(to, from, next) {
            if (store.state.idToken) {
                next()
            } else {
                next('/login')
            }
        }
    },
    // { path: '/signup', component: SignUp },
    { path: '/cart', component: Cart },
    { path: '/login', component: LogIn },
]

export default new VueRouter({
    mode: 'history',
    routes
})
