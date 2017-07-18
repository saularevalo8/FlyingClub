import React, {Component} from 'react';
import {Image, Header, Icon} from 'semantic-ui-react';
import './Dashboard.css';

class Dashboard extends Component {
    render() {
        return (
            <div className='dash-board'>
                <Header as='h2' dividing>
                    <Icon name='dashboard' className="icon"/>
                    <Header.Content>
                        Dashboard
                    </Header.Content>
                </Header>
                <Image src='/api/user/1/image?width=500' size='small'/>
            </div>
        )

    }
}

export default Dashboard;