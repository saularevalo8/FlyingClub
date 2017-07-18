import _ from 'lodash';
import React, {Component} from 'react';
import {Card, Icon, Image} from 'semantic-ui-react';
import {Link} from 'react-router-dom';


class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        let {headerName, memberStatus,  imgSrc, phoneNum, email,link} = this.props;

        return (
            <Card raised style={{marginBottom: 24}}>
                <Image src={imgSrc} />
                <Card.Content>
                    <Card.Header>
                        <Link to={link}>{headerName}</Link>
                    </Card.Header>
                    <Card.Meta>
                            <span className='date'>
                                {memberStatus}
                            </span>
                    </Card.Meta>
                    <Card.Description>
                        {phoneNum}
                        {email}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='user'/>
                    </a>
                </Card.Content>
            </Card>
        )
    }
}

export default PersonCard;