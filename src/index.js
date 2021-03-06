import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import {Provider} from 'react-redux';
import store from './store/store';
import registerServiceWorker from './registerServiceWorker';
import './stubs';
import axios from 'axios';
import LoginPage from './components/login/LoginPage';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
