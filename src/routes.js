import Login from "./components/login/Login";

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
const Contents = resolve =>{
    require.ensure(['./components/dashboard/management/Contents'], ()=>{
        resolve(require('./components/dashboard/management/Contents'));
    })
}
const Books = resolve =>{
    require.ensure(['./components/dashboard/management/Books'], ()=>{
        resolve(require('./components/dashboard/management/Books'));
    })
}
const Levels = resolve =>{
    require.ensure(['./components/dashboard/management/Levels'], ()=>{
        resolve(require('./components/dashboard/management/Levels'));
    })
}



export const routes = [
    {path:'/', name:'login', component: Login},
    {path:'/dashboard', component: Dashboard,
        children:[
            {path: '',component: Welcome},
            {path: 'contents',component: Contents},
            {path: 'books',component: Books},
            {path: 'levels',component: Levels}
        ]},
    {path:'*', redirect: {name:'login'}}
]