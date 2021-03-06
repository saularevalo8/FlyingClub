import React, {Component} from 'react'
import {Icon, Header, Grid} from 'semantic-ui-react';
import SearchBox from './SearchBox';
import PersonCard from './PersonCard';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getUsers} from '../../store/actions/user_actions';


class UserGrid extends Component {
    constructor(props){
        super(props);
        this.state = {
            results: []
        };
    }

    renderCards = () => {

        return this.props.users.all.map((item, i) => {
            return (
                <Grid.Column key={item.id} mobile={16} tablet={4} computer={3}>
                    <PersonCard
                        headerName={item.firstName + " " + item.lastName}
                        memberStatus={item.memberStatus}
                        phoneNum={item.phoneNum}
                        imgSrc={item.images.small}
                        link={`${this.props.match.url}/${item.id}`}
                    />
                </Grid.Column>
            )
        })
    };

    updateResults = (results) => {
        this.setState({results})
    };

    render() {

        return (
            <Grid>
                <Grid.Row columns={1}>
                    <Grid.Column>
                        <Header as='h2' dividing>
                            <Icon name='users'/>
                            <Header.Content>
                                Users
                            </Header.Content>
                        </Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={8} floated="right">
                        <SearchBox
                            className="right floated"
                            source={this.props.users.all}
                            updateResults={this.updateResults}
                        />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row >
                    {this.renderCards()}
                </Grid.Row>
            </Grid>
        )

    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getUsers}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserGrid));