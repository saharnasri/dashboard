import store from './store.js'

import Home from "./components/Home";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import verify from "./components/auth/verify";

const Dashboard = resolve =>{
    require.ensure(['./components/dashboard/Dashboard'], ()=>{
        resolve(require('./components/dashboard/Dashboard'));
    })
}
const Welcome = resolve =>{
    require.ensure(['./components/dashboard/management/Welcome'], ()=>{
        resolve(require('./components/dashboard/management/Welcome'));
    })
}
const Videos = resolve =>{
    require.ensure(['./components/dashboard/management/Videos'], ()=>{
        resolve(require('./components/dashboard/management/Videos'));
    })
}
const Upload = resolve =>{
    require.ensure(['./components/dashboard/management/Upload'], ()=>{
        resolve(require('./components/dashboard/management/Upload'));
    })
}

const EditVideo = resolve =>{
    require.ensure(['./components/dashboard/management/EditVideo'], ()=>{
        resolve(require('./components/dashboard/management/EditVideo'));
    })
}


export const routes = [
    {path:'/', name:'home', component: Home},
    {path:'/login', name:'login', component: Login},
    {path:'/Register', name:'register', component: Register},
    {path:'/verify', name:'verify', component: verify},
    {path:'/dashboard', component: Dashboard,
        children:[
            {path: '',component: Welcome},
            {path: 'Videos',component: Videos},
            {path: 'Upload',component: Upload},
            {path: 'EditVideo',component: EditVideo}
        ],
        // meta: {
        //     requiresAuth: true
        // }
    },
    {path:'*', redirect: {name:'login'}}
]

