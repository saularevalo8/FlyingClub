
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
    }
];

const pages = (state=items, action) => {

    return state;
};

export default pages;