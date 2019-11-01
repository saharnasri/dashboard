import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from "./routes";
import axios from 'axios'
import store from "./store";

Vue.prototype.$http = axios;
const token = localStorage.getItem('token');
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token
}

// axios.defaults.baseURL= 'https://jsonplaceholder.typicode.com'  //backend URL
// axios.defaults.baseURL= 'http://192.168.100.107:6002'  //backend URL
axios.defaults.baseURL= 'https://api.livebook-app.ir/'  //backend URL

// axios.defaults.headers.common['Authorization'] = 'bearer token';
// axios.defaults.headers.get['Accepts'] = 'application/json';



Vue.config.productionTip = false;

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.use(VueRouter)

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    alert('لطفا ابتدا وارد حساب کاربری خود شوید!')
    next('/login')
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')