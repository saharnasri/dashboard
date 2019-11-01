import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        status: '',
        token: localStorage.getItem('token') || '',
        user: {},
        schoolGrade: {}
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
                axios({ url: '/api/v1/AdminUser/login', data: user, method: 'POST' })
                    .then(resp => {
                        const statusCode = resp.data.statusCode
                        console.log(resp.data.statusCode)
                        if(statusCode === 200){
                            console.log('200 status')
                            const token = resp.data.data
                            // const user = this.data
                            console.log(token)
                            // console.log(user)

                            localStorage.setItem('token', token)

                            // Add the following line:
                            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
                            commit('auth_success', token, user)
                            // console.log(resp.data)

                        }else{
                            console.log('400 status')
                        }
                        resolve(resp)
                    })
                    .catch(err => {
                        commit('auth_error')
                        localStorage.removeItem('token')
                        reject(err)
                    })
            })
        },
        register({ commit }, user) {
            return new Promise((resolve, reject) => {
                commit('auth_request')
                console.log(user)
                axios({ url: '/api/v1/AdminUser/addUser', data: user,
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                    method: 'POST' })
                    .then(resp => {
                        console.log(resp.data)
                        // const token = resp.data.token
                        // const user = resp.data.user
                        // localStorage.setItem('token', token)
                        console.log(resp.data.statusCode)

                        // Add the following line:
                        // axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.token
                        // commit('auth_success', token, user)
                        resolve(resp)
                    })
                    .catch(err => {
                        commit('auth_error', err)
                        localStorage.removeItem('token')
                        reject(err)
                    })
            })
        },
        // rememberMe({ commit }) {
        //     return new Promise((resolve, reject) => {
        //         localStorage.removeItem('token')
        //         // delete axios.defaults.headers.common['Authorization']
        //         resolve()
        //     })
        // },
        logout({ commit }) {
            return new Promise((resolve, reject) => {
                commit('logout')
                localStorage.removeItem('token')
                delete axios.defaults.headers.common['Authorization']
                resolve()
            })
        },
        addSchoolGrade({ commit }, schoolGrade) {
            return new Promise((resolve, reject) => {
                commit('add_grade')
                console.log('schoolGrade:', schoolGrade)
                axios({ url: '/api/v1/SchoolGrade/addSchoolGrade', data: schoolGrade,
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                    method: 'POST' })
                    .then(resp => {
                        console.log(resp.data)
                        console.log(resp.data.statusCode)
                        resolve(resp)
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
        }
    },
    getters: {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status,
    }
})