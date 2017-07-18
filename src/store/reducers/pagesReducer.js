
let items = [
    {
        name: 'Dashboard',
        icon: 'dashboard',
        subHeader: 'Test',
        path: '/dashboard'
    },
    {
        name: 'Users',
        icon: 'users',
        subHeader: '',
        path: '/users'
    }, 
    {
        name: 'Add User',
        icon: 'add user', 
        subHeader: '', 
        path: '/adduser'
    },
    {
        name: 'LoginPage',
        icon: 'sign in',
        subHeader: '',
        path: '/'
    }
];

const pages = (state=items, action) => {

    return state;
};

export default pages;