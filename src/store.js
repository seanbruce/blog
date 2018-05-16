import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import axios from './auth'
import globalAxios from 'axios'

import router from './routes'


export default new Vuex.Store({
    state: {
        idToken: null,
        userId: null,
        user: null
    },
    mutations: {
        authUser(state, userData) {
            state.idToken = userData.idToken
            state.userId = userData.userId
        },
        storeUser( state, user) {
            state.user = user
        },
        clearAuth(state) {
            state.idToken = null
            state.userId = null
        }
    },
    actions: {
        setLogOutTimer({commit, dispatch}, expirationTime) {
            setTimeout(() =>{
                dispatch('logOut')
            }, expirationTime * 1000)
        },
        signup( { commit, dispatch }, authData ) {
            axios.post('/signupNewUser?key=AIzaSyA25svlP-E9QrWD9cmpBLWW7p6t2j_NqyQ', {
                email: authData.email,
                password: authData.password,
                returnSecureToken: true,
            })
                .then(res => {
                    console.log(res)
                    commit('authUser', {
                        idToken: res.data.idToken,
                        userId: res.data.localId,
                    })

                    const now = new Date()
                    const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000)
                    localStorage.setItem('idToken', res.data.idToken)
                    localStorage.setItem('expirationDate', expirationDate)
                    localStorage.setItem('userId', res.data.localId)



                    dispatch('storeUser', authData)
                    dispatch('setLogOutTimer', res.data.expiresIn)
                })
                .catch(err => console.log(err))
        },


        login( { commit , dispatch}, authData ) {
            axios.post('/verifyPassword?key=AIzaSyA25svlP-E9QrWD9cmpBLWW7p6t2j_NqyQ', {
                email: authData.email,
                password: authData.password,
                returnSecureToken: true,
            })
            .then(res => {
                console.log(res)
                commit('authUser', {
                    idToken: res.data.idToken,
                    userId: res.data.localId,
                })

                const now = new Date()
                const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000)
                localStorage.setItem('idToken', res.data.idToken)
                localStorage.setItem('expirationDate', expirationDate)
                localStorage.setItem('userId', res.data.localId)

                router.replace('/')
                dispatch('setLogOutTimer', res.data.expiresIn)
            })
            .catch(err => console.log(err))
        },
        storeUser( {commit, state}, userData) {
            if (!state.idToken) {
                return
            }
            globalAxios.post('/users.json' + '?auth=' + state.idToken, userData)
                .then(res => console.log(res))
                .catch(err => console.log(err))
        },
        fetchUser( {commit, state} ) {
            if (!state.idToken) {
                return
            }
            globalAxios.get('/users.json' + '?auth=' + state.idToken)
            .then(res => {
                    console.log(res)
                    const data = res.data
                    const users = []
                    for(let key in data) {
                        const user = data[key]
                        user.id = key
                        users.push(user)
                    }
                    console.log(users)
                    commit('storeUser', users[0])

                })
            .catch(err => console.log(err))
        },
        logOut({commit}) {
            commit('clearAuth')
            localStorage.removeItem('idToken')
            localStorage.removeItem('expirationDate')
            localStorage.removeItem('userId')
            router.replace('/')
        },
        autoLogin( {commit} ) {
            const idToken = localStorage.getItem('idToken')
            const userId = localStorage.getItem('userId')
            if (!idToken) {
                return 
            }
            const expirationDate = localStorage.getItem('expirationDate')
            const now = new Date()
            if ( now >= expirationDate ) {
                return
            }
            commit('authUser', {
                idToken: idToken,
                userId: userId
            })
        }
    },
    getters: {
        user(state) {
            return state.user
        },
        isAuthenticated(state) {
            return state.idToken !== null
        }
    }
})