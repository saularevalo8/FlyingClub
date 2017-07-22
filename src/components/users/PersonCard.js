import _ from 'lodash';
import React, { Component, StyleSheet } from 'react';
import {Card, Icon, Image} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import './person-card.css';

const styles = {
        background: {
            backgroundColor: '#1b1c1d',
            color: '#ffffff',
            marginBottom: 24
        },
        card: {
            color: '#ffffff',
            textAlign: 'center',
            paddingTop: 35,
            marginBottom: 0
        },
        header: {
            color: '#ffffff'
        },
        headerH: {
            color: '#ffffff',
            paddingBottom: 35
        }
    }

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        let {headerName, memberStatus,  imgSrc, phoneNum, email,link} = this.props;

        return (
            <Card  raised style={ styles.background }>
                <Image src={imgSrc} />
                <Card.Content className="card-content" style={ styles.card } >
                    <Card.Header>
                        <Link to={link} style={ styles.headerH }>{headerName}</Link>
                    </Card.Header>
                    <Card.Meta>
                            <span className='date' style={ styles.header }>
                                {memberStatus}
                            </span>
                    </Card.Meta>
                    <Card.Description style={ styles.header }>
                        {phoneNum}
                        {email}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra style={ styles.header }>
                    <a>
                        <Icon name='user' style={ styles.header }/>
                    </a>
                </Card.Content>
            </Card>
        )
    }
}

export default PersonCard;