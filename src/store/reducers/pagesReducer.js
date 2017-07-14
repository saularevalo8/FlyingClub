
let items = [
    {
        name: 'Dashboard',
        icon: 'dashboard',
        subHeader: 'Test',
        path: '/'
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
        path: '/login' //this has to be the fucking folder dude
    }
];

const pages = (state=items, action) => {

    return state;
};

export default pages;