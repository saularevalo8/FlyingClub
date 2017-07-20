import React, {Component} from 'react';
import {Table, Grid, Segment, Card, Accordion, Icon, Button, Image, List,  } from 'semantic-ui-react';


const Dashboard = () => (
  <Card.Group>
    <Card>
      <Card.Content>
        <Card.Header>ACTIVE</Card.Header>
        <Card.Meta className="activeUsers"></Card.Meta>
      </Card.Content>
       <Accordion>
    <Accordion.Title>
      <Icon name='dropdown' />
      Members
    </Accordion.Title>
    <Accordion.Content>
      <List divided verticalAlign='middle'>
        <List.Item>
          <List.Content floated='right'>
            <Button>View</Button>
          </List.Content>
          <Image avatar src='./public/dist/img/avatar.png' />
          <List.Content>
            Lena
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content floated='right'>
            <Button>View</Button>
          </List.Content>
          <Image avatar src='/assets/images/avatar/small/lindsay.png' />
          <List.Content>
            Lindsay
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content floated='right'>
            <Button>View</Button>
          </List.Content>
          <Image avatar src='/assets/images/avatar/small/mark.png' />
          <List.Content>
            Mark
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content floated='right'>
            <Button>View</Button>
          </List.Content>
          <Image avatar src='/assets/images/avatar/small/molly.png' />
          <List.Content>
            Molly
          </List.Content>
        </List.Item>
      </List>
    </Accordion.Content>
    </Accordion>
    </Card>


    <Card>
      <Card.Content>
        <Card.Header>INACTIVE</Card.Header>
        <Card.Meta className="inactiveUser"></Card.Meta> 
      </Card.Content>
       <Accordion>
    <Accordion.Title>
      <Icon name='dropdown' />
      Memebrs
    </Accordion.Title>
    <Accordion.Content>
      <List divided verticalAlign='middle'>
        <List.Item>
          <List.Content floated='right'>
            <Button>View</Button>
          </List.Content>
          <Image avatar src='../public/dist/img/avatar.png' />
          <List.Content>
            Lena
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content floated='right'>
            <Button>View</Button>
          </List.Content>
          <Image avatar src='/assets/images/avatar/small/lindsay.png' />
          <List.Content>
            Lindsay
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content floated='right'>
            <Button>View</Button>
          </List.Content>
          <Image avatar src='/assets/images/avatar/small/mark.png' />
          <List.Content>
            Mark
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content floated='right'>
            <Button>View</Button>
          </List.Content>
          <Image avatar src='/assets/images/avatar/small/molly.png' />
          <List.Content>
            Molly
          </List.Content>
        </List.Item>
      </List>
    </Accordion.Content>
    </Accordion>
    </Card>

    <Card>
    <Card.Content>
      <Card.Header>STUDENT</Card.Header>
      <Card.Meta className="studentUser"></Card.Meta>
    </Card.Content>  
       <Accordion>
    <Accordion.Title>
      <Icon name='dropdown' />
      Members
    </Accordion.Title>
    <Accordion.Content>
      <List divided verticalAlign='middle'>
        <List.Item>
          <List.Content floated='right'>
            <Button>View</Button>
          </List.Content>
          <Image avatar src='../public/dist/img/avatar.png' />
          <List.Content>
            Lena
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content floated='right'>
            <Button>View</Button>
          </List.Content>
          <Image avatar src='/assets/images/avatar/small/lindsay.png' />
          <List.Content>
            Lindsay
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content floated='right'>
            <Button>View</Button>
          </List.Content>
          <Image avatar src='/assets/images/avatar/small/mark.png' />
          <List.Content>
            Mark
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content floated='right'>
            <Button>View</Button>
          </List.Content>
          <Image avatar src='/assets/images/avatar/small/molly.png' />
          <List.Content>
            Molly
          </List.Content>
        </List.Item>
      </List>
    </Accordion.Content>
    </Accordion>
    </Card>

    <Card>
      <Card.Content>
        <Card.Header>ASSOICATE</Card.Header>
        <Card.Meta className="associateUser"></Card.Meta>
      </Card.Content>
       <Accordion>
    <Accordion.Title>
      <Icon name='dropdown' />
      Memebers
    </Accordion.Title>
    <Accordion.Content>
      <List divided verticalAlign='middle'>
        <List.Item>
          <List.Content floated='right'>
            <Button>View</Button>
          </List.Content>
          <Image avatar src='../public/dist/img/avatar.png' />
          <List.Content>
            Lena
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content floated='right'>
            <Button>View</Button>
          </List.Content>
          <Image avatar src='/assets/images/avatar/small/lindsay.png' />
          <List.Content>
            Lindsay
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content floated='right'>
            <Button>View</Button>
          </List.Content>
          <Image avatar src='/assets/images/avatar/small/mark.png' />
          <List.Content>
            Mark
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content floated='right'>
            <Button>View</Button>
          </List.Content>
          <Image avatar src='/assets/images/avatar/small/molly.png' />
          <List.Content>
            Molly
          </List.Content>
        </List.Item>
      </List>
    </Accordion.Content>
    </Accordion>
    </Card>

    <Card>
      <Card.Content>
        <Card.Header>WAITING LIST</Card.Header>
        <Card.Meta className="waitingListUser"></Card.Meta>
      </Card.Content>
       <Accordion>
    <Accordion.Title>
      <Icon name='dropdown' />
      Members
    </Accordion.Title>
    <Accordion.Content>
      <List divided verticalAlign='middle'>
        <List.Item>
          <List.Content floated='right'>
            <Button>View</Button>
          </List.Content>
          <Image avatar src='../public/dist/img/avatar.png' />
          <List.Content>
            Lena
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content floated='right'>
            <Button>View</Button>
          </List.Content>
          <Image avatar src='/assets/images/avatar/small/lindsay.png' />
          <List.Content>
            Lindsay
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content floated='right'>
            <Button>View</Button>
          </List.Content>
          <Image avatar src='/assets/images/avatar/small/mark.png' />
          <List.Content>
            Mark
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content floated='right'>
            <Button>View</Button>
          </List.Content>
          <Image avatar src='/assets/images/avatar/small/molly.png' />
          <List.Content>
            Molly
          </List.Content>
        </List.Item>
      </List>
    </Accordion.Content>
    </Accordion>
    </Card>

    <Card>
      <Card.Content>
      <Card.Header>HONORARY</Card.Header>
      <Card.Meta className="honorary"></Card.Meta> 
      </Card.Content> 
       <Accordion>
    <Accordion.Title>
      <Icon name='dropdown' />
      Members
    </Accordion.Title>
    <Accordion.Content>
      <List divided verticalAlign='middle'>
        <List.Item>
          <List.Content floated='right'>
            <Button>View</Button>
          </List.Content>
          <Image avatar src='../public/dist/img/avatar.png' />
          <List.Content>
            Lena
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content floated='right'>
            <Button>View</Button>
          </List.Content>
          <Image avatar src='/assets/images/avatar/small/lindsay.png' />
          <List.Content>
            Lindsay
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content floated='right'>
            <Button>View</Button>
          </List.Content>
          <Image avatar src='/assets/images/avatar/small/mark.png' />
          <List.Content>
            Mark
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content floated='right'>
            <Button>View</Button>
          </List.Content>
          <Image avatar src='/assets/images/avatar/small/molly.png' />
          <List.Content>
            Molly
          </List.Content>
        </List.Item>
      </List>
    </Accordion.Content>
    </Accordion>
    </Card>

    <Card>
      <Card.Content>
        <Card.Header>A & P</Card.Header>
        <Card.Meta className="ap"></Card.Meta> 
      </Card.Content>
       <Accordion>
    <Accordion.Title>
      <Icon name='dropdown' />
      Members
    </Accordion.Title>
    <Accordion.Content>
      <List divided verticalAlign='middle'>
        <List.Item>
          <List.Content floated='right'>
            <Button>View</Button>
          </List.Content>
          <Image avatar src='../public/dist/img/avatar.png' />
          <List.Content>
            Lena
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content floated='right'>
            <Button>View</Button>
          </List.Content>
          <Image avatar src='/assets/images/avatar/small/lindsay.png' />
          <List.Content>
            Lindsay
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content floated='right'>
            <Button>View</Button>
          </List.Content>
          <Image avatar src='/assets/images/avatar/small/mark.png' />
          <List.Content>
            Mark
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content floated='right'>
            <Button>View</Button>
          </List.Content>
          <Image avatar src='/assets/images/avatar/small/molly.png' />
          <List.Content>
            Molly
          </List.Content>
        </List.Item>
      </List>
    </Accordion.Content>
    </Accordion>
    </Card>  
  </Card.Group>

)

export default Dashboard;
