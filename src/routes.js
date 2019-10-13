import Login from "./components/login/Login";
import Dashboard  from "./components/dashboard/Dashboard";
import Welcome from "./components/dashboard/management/Welcome";
import Contents from "./components/dashboard/management/Contents";
import Books from "./components/dashboard/management/Books";
import Levels from "./components/dashboard/management/Levels";

export const routes = [
    {path:'/', component: Login},
    {path:'/dashboard', component: Dashboard,
        children:[
            {path: '',component: Welcome},
            {path: 'contents',component: Contents},
            {path: 'books',component: Books},
            {path: 'levels',component: Levels}
        ]}
]