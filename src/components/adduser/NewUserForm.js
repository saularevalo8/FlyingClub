import React, { Component } from 'react'
import { Container, Header, Segment, Button, Form, Input, Radio, Select} from 'semantic-ui-react'

const MemberStat = [
  { key: 'Active', text: 'Active', value: 'Active' },
  { key: 'Inactive', text: 'Inactive', value: 'Inactive' },
  { key: 'Student', text: 'Student', value: 'Student' },
  { key: 'Associate', text: 'Associate', value: 'Associate' },
  { key: 'Waiting List', text: 'Waiting List', value: 'Waiting List' },
  { key: 'Honorary', text: 'Honorary', value: 'Honorary' },
  { key: 'NonDues', text: 'NonDues', value: 'NonDues' },
  { key: 'A&P', text: 'A&P', value: 'A&P' },
]

const CertLevelOptions = [
    { key: 'Student', text: 'Student', value: 'Student'}, 
    { key: 'Sport', text: 'Sport', value: 'Sport'}, 
    { key: 'Recreational', text: 'Recreational', value: 'Recreational'},
    { key: 'Private', text: 'Private', value: 'Private'},
    { key: 'Commercial', text: 'Commercial', value: 'Commercial'}, 
    { key: 'ATP', text: 'ATP', value: 'ATP'}
]

const MedicalRecordsOptions = [
    { key: 'First', text: 'First', value: 'First'},
    { key: 'Second', text: 'Second', value: 'Second'},
    { key: 'Third', text: 'Third', value: 'Third'}, 
    { key: 'Basic Med', text: 'Basic Med', value: 'Basic Med'}
]

const SchedulePrivOptions = [
    { key: 'Current', text: 'Current', value: 'Current'}, 
    { key: 'Suspended', text: 'Suspended', value: 'Suspended'}
]

const ACAssignment = [
    { key: 'N73614', text: 'N73614', value: 'N73614'}, 
    { key: 'N21643', text: 'N21643', value: 'N21643'}, 
    { key: 'N6375T', text: 'N6375T', value: 'N6375T'}, 
    { key: 'N23676', text: 'N23676', value: 'N23676'}
]

class NewUserForm extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
    <Container text>
    <Header as='h1' textAlign='center'>Create New User</Header>
    <Segment padded>
      <Form>
        <Form.Group widths='equal'>
          <Form.Field control={Input} label='First name' placeholder='First name' />
          <Form.Field control={Input} label='Last name' placeholder='Last name' />
          <Form.Field control={Select} label='Membership Status' options={MemberStat} placeholder='Membership Status' />
        </Form.Group>
        <Form.Group widths='equal'>
            <Form.Field control={Input} label='Email' placeholder='Email'/>
            <Form.Field control={Input} label='Username' placeholder='Username'/>
            <Form.Field control={Input} label='Password' placeholder='Password'/>
        </Form.Group>
        <Form.Field control={Input} label='Address' placeholder='Address'/>
        <Form.Group widths='equal'>
            <Form.Field control={Input} label='Phone Number' placeholder='Phone Number'/>
            <Form.Field control={Select} label='Medical Records' options={MedicalRecordsOptions} placeholder='Medical Class'/>
        </Form.Group>
        <Form.Group inline>
          <label>Pilot Ratings</label>
          <Form.Field control={Radio} label='SEL' value='SEL' checked={value === 'SEL'} onChange={this.handleChange} />
          <Form.Field control={Radio} label='MEL' value='MEL' checked={value === 'MEL'} onChange={this.handleChange} />
          <Form.Field control={Radio} label='SES' value='SES' checked={value === 'SES'} onChange={this.handleChange} />
          <Form.Field control={Radio} label='MES' value='MES' checked={value === 'MES'} onChange={this.handleChange} />
          <Form.Field control={Radio} label='Complex' value='Complex' checked={value === 'Complex'} onChange={this.handleChange} />
          <Form.Field control={Radio} label='IFR' value='IFR' checked={value === 'IFR'} onChange={this.handleChange} />
          <Form.Field control={Radio} label='Multi' value='Multi' checked={value === 'Multi'} onChange={this.handleChange} />
        </Form.Group>
        <Form.Group widths='equal'>
            <Form.Field control={Select} label='Certification Level' options={CertLevelOptions} placeholder='Certification Level'/>
            <Form.Field control={Select} label='Scheduling Privileges' options={SchedulePrivOptions} placeholder='Scheduling Privileges'/>
            <Form.Field control={Select} label='A/C Assignment' options={ACAssignment} placeholder='A/C Assignment'/>
        </Form.Group>
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
    </Segment>
    </Container>
    )
  }
}

export default NewUserForm
