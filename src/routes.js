import Base from './components/login/Base.jsx';
import HomePage from './components/login/HomePage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';


const routes = {
    // base component (wrapper for the whole application).
    component: Base,
    childRoutes: [

        {
            path: '/',
            component: HomePage
        },

        {
            path: '/login',
            component: LoginPage
        },

        {
            path: '/signup',
            component: SignUpPage
        },
        {
            path: '/dashboard',
            component: Dashboard
        },

        {
            path: '/users',
            component: Users
        },

        {
            path: '/addusers',
            component: AddUser
        }

    ]
};

export default routes;