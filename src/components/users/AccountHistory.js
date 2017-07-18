import _ from 'lodash'
import faker from 'faker'
import React from 'react'
import { Button, Icon, Accordion, Table, Label, Modal } from 'semantic-ui-react'

// const panels = _.times(3, () => ({
//   title: "View User's Account History",
//   content: "Put table here",
// }))


const AccountHistory = () => (
  <Accordion styled fluid>
    <Accordion.Title>
        <Icon name="dropdown"/>
        View User's Account History
    </Accordion.Title>
    <Accordion.Content>
        <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Date</Table.HeaderCell>
          <Table.HeaderCell>Account History</Table.HeaderCell>
          <Table.HeaderCell>By</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Label>First</Label>
          </Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row>
      </Table.Body>

      <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
          <Button secondary>Create</Button>
        </Table.HeaderCell>
      </Table.Row>
      </Table.Footer>
    </Table>
    </Accordion.Content>  
  </Accordion>
)

export default AccountHistory; 
