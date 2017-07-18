import React, { Component } from 'react';
import './App.css';
import Sidebar from './sidebar/sidebar';
import Dashboard from './dashboard/Dashboard';
import Classes from './classes/Classes';
import Users from './users/Users'
import AddUser from './adduser/NewUserForm'
import NotFound from './NotFound';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getInstructors } from '../store/actions/instructor_actions';
import axios from 'axios';

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

class App extends Component {
    componentWillMount() {
        this.props.getInstructors();
        axios.get('/api/test').then((response) => {
            console.log('It Worked');
            console.log(response.data);
        })
    }

    render() {
        return (
            <Router>
                <Sidebar>
                    <Switch>
                        <Route path="/dashboard" component={Dashboard}/>
                        <Route path="/users" component={Users}/>
                        <Route path="/adduser" component={AddUser}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Sidebar>
            </Router>
        );
    }
}

function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getInstructors }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);