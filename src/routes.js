import Home from './components/Home.vue'
import Cart from './components/Cart.vue'
import Portfolio from './components/Portfolio.vue'
import SignUp from './components/SignUp.vue'
import LogIn from './components/LogIn.vue'

export const routes = [
    { path: '/', component: Home },
    { path: '/portfolio', component: Portfolio },
    { path: '/signup', component: SignUp },
    { path: '/cart', component: Cart },
    { path: '/login', component: LogIn },
]
