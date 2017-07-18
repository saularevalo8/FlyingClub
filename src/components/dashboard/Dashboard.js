import React, {Component} from 'react';
import {Table, Grid, Segment, Card, Accordion, Icon, Button, Image, List, } from 'semantic-ui-react';

const Dashboard = () => (
  <Card.Group>
    <Card>
      <Card.Content>
        <Card.Header>ACTIVE</Card.Header>
        <Card.Meta>44</Card.Meta>
        <Card.Description>Currect Flying Club members</Card.Description>
      </Card.Content>
       <Accordion>
    <Accordion.Title>
      <Icon name='dropdown' />
      More Info?
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
        <Card.Header content='Jake Smith' />
        <Card.Meta content='Musicians' />
        <Card.Description content='Jake is a drummer living in New York.' />
      </Card.Content>
       <Accordion>
    <Accordion.Title>
      <Icon name='dropdown' />
      More Info?
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
      <Card.Content
        header='Elliot Baker'
        meta='Friend'
        description='Elliot is a music producer living in Chicago.'
      />
       <Accordion>
    <Accordion.Title>
      <Icon name='dropdown' />
      More Info?
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
        <Card.Header>Matthew Harris</Card.Header>
        <Card.Meta>Co-Worker</Card.Meta>
        <Card.Description>Matthew is a pianist living in Nashville.</Card.Description>
      </Card.Content>
       <Accordion>
    <Accordion.Title>
      <Icon name='dropdown' />
      More Info?
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
        <Card.Header content='Jake Smith' />
        <Card.Meta content='Musicians' />
        <Card.Description content='Jake is a drummer living in New York.' />
      </Card.Content>
       <Accordion>
    <Accordion.Title>
      <Icon name='dropdown' />
      More Info?
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
      <Card.Content
        header='Elliot Baker'
        meta='Friend'
        description='Elliot is a music producer living in Chicago.'
      />
       <Accordion>
    <Accordion.Title>
      <Icon name='dropdown' />
      More Info?
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
        <Card.Header>Matthew Harris</Card.Header>
        <Card.Meta>Co-Worker</Card.Meta>
        <Card.Description>Matthew is a pianist living in Nashville.</Card.Description>
      </Card.Content>
       <Accordion>
    <Accordion.Title>
      <Icon name='dropdown' />
      More Info?
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
        <Card.Header content='Jake Smith' />
        <Card.Meta content='Musicians' />
        <Card.Description content='Jake is a drummer living in New York.' />
      </Card.Content>
       <Accordion>
    <Accordion.Title>
      <Icon name='dropdown' />
      More Info?
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
