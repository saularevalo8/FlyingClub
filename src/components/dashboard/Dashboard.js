import React, { Component } from 'react';
import RouteHandler from '../App.js';
import { AuthorizedComponent } from 'react-router-role-authorization'
import { Image, Header, Icon } from 'semantic-ui-react';


class Dashboard extends AuthorizedComponent {
    render() {
        return ( <
            div >
            <
            Header as = 'h2'
            dividing >
            <
            Icon name = 'dashboard' / >
            <
            Header.Content >
            Dashboard <
            /Header.Content> <
            /Header> <
            Image src = '/api/user/1/image?width=500'
            size = 'small' / >
            <
            /div>
        )

    }
}

export default Dashboard;