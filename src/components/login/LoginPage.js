import React from 'react'
import { 
  Button, 
  Container, 
  Form, 
  Menu, 
  Input, 
  TextArea, 
  Checkbox, 
  Radio, 
  RadioGroup, 
  Dropdown, 
  Select, 
  Divider, 
  Header, 
  Label, 
  Segment 
} from 'semantic-ui-react'
// import { Input, TextArea, Checkbox, Radio, RadioGroup, Dropdown, Select, } from 'formsy-semantic-ui-react'
import './LoginPage.css'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

////////////////////////////////////////////////////////////
// 1. Click the public page
// 2. Click the protected page
// 3. Log in
// 4. Click the back button, note the URL each time

const styles = {
  root: {
    marginTop: 18,
  },

  customErrorLabel: {
    color: '#f00',
    textAlign: 'center',
  },
};

const errorLabel = <Label color="red" pointing="left"/>;

const LoginPage = () => (
  <Router>
    <div className="ui middle aligned center aligned grid">
      <div className="column">
        <Container className="login-form" text>
          <Header className="header" as='h1' textAlign='center'>Login</Header>
            <Segment padded inverted>
            
              <Form inverted className="ui form">
                <Form.Group widths='equal'>
                  <AuthButton/>
                  <div>
                      <Header as="h3"><Link to="/public">Public Page</Link></Header>
                      <Header as="h3"><Link to="/protected">A&E Flying Club Dashboard</Link></Header>
                      <br/>
                  </div>
                  <Route path="/public" component={Public}/>
                  <Route path="/login" component={Login}/>
                  <PrivateRoute path="/protected" component={Protected}/>
                 </Form.Group>
                </Form>
            </Segment>
          </Container>
        </div>
    </div>
  </Router>
)

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const AuthButton = withRouter(({ history }) => (
  fakeAuth.isAuthenticated ? (
    <p>
      Welcome! <Button secondary onClick={() => {
        fakeAuth.signout(() => history.push('/'))
      }}>Sign out</Button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
))

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    fakeAuth.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

const Public = () => <Header as="h2">Public</Header>
const Protected = () => <Header as="h2">Protected</Header>

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  }

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true })
    })
  }

  render() {

    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state
    
    if (redirectToReferrer) {
      return (
        <Redirect to={from}/>
      )
    }
    
    return (
      <div className='login-page'>
        <Container fluid text>
            <Header as="h4">You must log in to view the page at {from.pathname}</Header>
            <Button secondary onClick={this.login}>Log in</Button>
        </Container>
      </div>
    )
  }
}



const inputWithDefaultValue = (
  <Input 
    name="inputWithDefaultValue"
    placeholder="Email"
    defaultValue="john@doe.test"
    icon="mail"
    iconPosition="left"
    required
    validations="isEmail"
    validationErrors={{
      isEmail: 'This is not a valid email',
      isDefaultRequiredValue: 'Email is Required',
    }}
    errorLabel={ errorLabel }
    style={ styles.formElement }
  />
);

export default LoginPage;