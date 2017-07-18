import React, {Component} from 'react'
import {Grid, Icon, Image, Breadcrumb, Button, Form, Segment, Loader, Dimmer, Container, Header, Input, Radio, Select, Accordion} from 'semantic-ui-react';
import AccountHistory from './AccountHistory';
import {withRouter, Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {getUser, resetSelectedUser} from '../../store/actions/user_actions';
import {connect} from 'react-redux';

const options = [
    {key: '1', text: 'Employee', value: 'Employee'},
    {key: '2', text: 'Contractor', value: 'Contractor'},
];

const MemberStat = [
  { key: 'Active', text: 'Active', value: 'Active' },
  { key: 'Inactive', text: 'Inactive', value: 'Inactive' },
  { key: 'Student', text: 'Student', value: 'Student' },
  { key: 'Associate', text: 'Associate', value: 'Associate' },
  { key: 'Waiting List', text: 'Waiting List', value: 'Waiting List' },
  { key: 'Honorary', text: 'Honorary', value: 'Honorary' },
  { key: 'NonDues', text: 'NonDues', value: 'NonDues' },
  { key: 'A&P', text: 'A&P', value: 'A&P' },
];

const CertLevelOptions = [
    { key: 'Student', text: 'Student', value: 'Student'}, 
    { key: 'Sport', text: 'Sport', value: 'Sport'}, 
    { key: 'Recreational', text: 'Recreational', value: 'Recreational'},
    { key: 'Private', text: 'Private', value: 'Private'},
    { key: 'Commercial', text: 'Commercial', value: 'Commercial'}, 
    { key: 'ATP', text: 'ATP', value: 'ATP'}
];

const MedicalRecordsOptions = [
    { key: 'First', text: 'First', value: 'First'},
    { key: 'Second', text: 'Second', value: 'Second'},
    { key: 'Third', text: 'Third', value: 'Third'}, 
    { key: 'Basic Med', text: 'Basic Med', value: 'Basic Med'}
];

const SchedulePrivOptions = [
    { key: 'Current', text: 'Current', value: 'Current'}, 
    { key: 'Suspended', text: 'Suspended', value: 'Suspended'}
];

const ACAssignment = [
    { key: 'N73614', text: 'N73614', value: 'N73614'}, 
    { key: 'N21643', text: 'N21643', value: 'N21643'}, 
    { key: 'N6375T', text: 'N6375T', value: 'N6375T'}, 
    { key: 'N23676', text: 'N23676', value: 'N23676'}
];

class UserProfile extends Component {
    state = {}
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    componentWillMount() {
        this.props.getUser(this.props.match.params.id);
    }

    componentWillUnmount() {
        this.props.resetSelectedUser();
    }

    updateResults = (results) => {
        this.setState({results})
    };

    handleChange = (e, {value}) => this.setState({value});

    renderGrid = () => {
        const { value } = this.state; 
        let {selected} = this.props.users;
        console.log(this.props);
        return (
            <Grid>
                <Grid.Row columns={1}>
                    <Grid.Column>
                        <Breadcrumb size='large'>
                            <Breadcrumb.Section as={Link} to="/">Home</Breadcrumb.Section>
                            <Breadcrumb.Divider icon='right chevron'/>
                            <Breadcrumb.Section as={Link} to="/users">Users</Breadcrumb.Section>
                            <Breadcrumb.Divider icon='right chevron'/>
                            <Breadcrumb.Section active>User Profile</Breadcrumb.Section>
                        </Breadcrumb>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1}>
                    <Grid.Column>
                        <Header as='h2' dividing>
                            <Icon name='user'/>
                            <Header.Content>
                                {selected.firstName} {selected.lastName}
                            </Header.Content>
                        </Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column mobile={16} tablet={4} computer={4}>
                        <Image src={selected.images.small} shape="rounded"/>
                        <Button secondary style={{width: "100%", marginTop: "12"}}>Upload New Picture</Button>

                    </Grid.Column>
                    <Grid.Column width={12} floated="right">
                        <Form>
                            <Form.Group widths='equal'>
                                <Form.Field control={Input} label='First name' placeholder='First name' value={selected.firstName} />
                                <Form.Field control={Input} label='Last name' placeholder='Last name' value={selected.lastName}/>
                                <Form.Field control={Select} label='Membership Status' options={MemberStat} placeholder='Membership Status' value={selected.MemberStatus}/>    
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Field control={Input} label='Email' placeholder='Email' value={selected.email}/>
                                <Form.Field control={Input} label='Username' placeholder='Username' value={selected.username}/>
                                <Form.Field control={Input} label='Password' placeholder='Password' value={selected.password}/>
                            </Form.Group>
                            <Form.Field control={Input} label='Address' placeholder='Address'value={selected.address}/>
                            <Form.Group widths='equal'>
                                <Form.Field control={Input} label='Phone Number' placeholder='Phone Number' value={selected.phoneNum}/>
                                <Form.Field control={Select} label='Medical Records' options={MedicalRecordsOptions} placeholder='Medical Class' value={selected.medicalRecords}/>
                            </Form.Group>
                            <Form.Group inline>
                                <label>Pilot Ratings</label>
                                <Form.Field control={Radio} label='SEL' value='SEL' checked={selected.pilotRatings.values} onChange={this.handleChange} />
                                <Form.Field control={Radio} label='MEL' value='MEL' checked={selected.pilotRatings.values} onChange={this.handleChange} />
                                <Form.Field control={Radio} label='SES' value='SES' checked={selected.pilotRatings.values} onChange={this.handleChange} />
                                <Form.Field control={Radio} label='MES' value='MES' checked={selected.pilotRatings.values} onChange={this.handleChange} />
                                <Form.Field control={Radio} label='Complex' value='Complex' checked={selected.pilotRatings.values} onChange={this.handleChange} />
                                <Form.Field control={Radio} label='IFR' value='IFR' checked={selected.pilotRatings.values} onChange={this.handleChange} />
                                <Form.Field control={Radio} label='Multi' value='Multi' checked={selected.pilotRatings.values} onChange={this.handleChange} />
                                <Form.Field control={Radio} label='None' value='None' checked={selected.pilotRatings.values} onChange={this.handleChange} />
                            </Form.Group><Form.Group widths='equal'>
                                <Form.Field control={Select} label='Certification Level' options={CertLevelOptions} placeholder='Certification Level'/>
                                <Form.Field control={Select} label='Scheduling Privileges' options={SchedulePrivOptions} placeholder='Scheduling Privileges'/>
                                <Form.Field control={Select} label='A/C Assignment' options={ACAssignment} placeholder='A/C Assignment'/>
                            </Form.Group>
                            <Form.Button>Update</Form.Button>
                        </Form>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row >
                    <Grid.Column width={12} floated="right">
                        <AccountHistory/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }

    render() {
        let {selected} = this.props.users;
        if (selected) {
            return (
                <div>
                    {this.renderGrid()}
                </div>
            )
        } else {
            return (
                <Segment>
                    <Dimmer active>
                        <Loader />
                    </Dimmer>
                </Segment>
            )
        }


    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getUser, resetSelectedUser}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfile));