import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        status: '',
        token: localStorage.getItem('token') || '',
        user: {},
        newUser: {},
        authUser: {},
    },
    mutations: {
        auth_request(state) {
            state.status = 'loading'
        },
        auth_success(state, token, user) {
            state.status = 'success'
            state.token = token
            state.user = user
        },
        auth_error(state) {
            state.status = 'error'
        },
        logout(state) {
            state.status = ''
            state.token = ''
        },
        add_grade(state, schoolGrade) {
            state.schoolGrade = schoolGrade
        }
    },
    actions: {
        login({ commit }, user) {
            return new Promise((resolve, reject) => {
                commit('auth_request')
                console.log(user)
                axios({ url: '/api/login', data: user,
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                    method: 'POST' })
                    .then(resp => {
                        console.log(resp)
                        resolve(resp)
                    })
                    .catch(err => {
                        commit('auth_error', err)
                        localStorage.removeItem('token')
                        reject(err)
                    })
            })
        },
        register({ commit }, newUser) {
            return new Promise((resolve, reject) => {
                commit('auth_request')
                console.log(newUser)
                axios({ url: '/api/register/type1', data: newUser,
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                    method: 'POST' })
                    .then(resp => {
                        console.log(resp.data)
                        resolve(resp)
                    })
                    .catch(err => {
                        commit('auth_error', err)
                        localStorage.removeItem('token')
                        reject(err)
                    })
            })
        },
        verify({ commit }, authUser) {
            return new Promise((resolve, reject) => {
                commit('auth_request')
                console.log(authUser)
                axios({ url: '/api/register/verify-code', data: authUser,
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                    method: 'POST' })
                    .then(resp => {
                        console.log(resp)
                        resolve(resp)
                    })
                    .catch(err => {
                        commit('auth_error', err)
                        localStorage.removeItem('token')
                        reject(err)
                    })
            })
        },
        logout({ commit }) {
            return new Promise((resolve, reject) => {
                commit('logout')
                localStorage.removeItem('token')
                delete axios.defaults.headers.common['Authorization']
                resolve()
            })
        },
    },
    getters: {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status,
    }
})