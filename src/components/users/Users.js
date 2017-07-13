import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import UserGrid from './UserGrid';
import UserProfile from './UserProfile';
import {
    Route
} from 'react-router-dom'


class Users extends Component {
    render() {
        let {match} = this.props;
        return (
            <div>
                <Route path={`${match.url}/:id`} render={() => <UserProfile test="test" /> } />
                
                <Route exact path={`${match.url}`} test="test" component={UserGrid}/>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Users));