// import 'vuetify/dist/vuetify.min.css'
import './scss/main.scss'
import Vue from 'vue'
import App from './App.vue'

// import Vuetify from 'vuetify'

import VueRouter from 'vue-router'
import router from './routes'
import store from './store'

import axios from 'axios'

axios.defaults.baseURL = 'https://axios-65b04.firebaseio.com'

const requestInterceptor = axios.interceptors.request.use( config => {
  console.log('request: ',config)
  return config
})

const responseInterceptor = axios.interceptors.response.use( res => {
  console.log('response: ',res)
  return res
})

axios.interceptors.request.eject(requestInterceptor)
axios.interceptors.response.eject(responseInterceptor)

// Vue.use(Vuetify)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
