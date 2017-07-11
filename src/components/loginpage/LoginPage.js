import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

const LoginPage = () => (
  <Form>
    <Form.Field>
      <label>Email</label>
      <input placeholder='Email' />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input placeholder='Password' />
    </Form.Field>
    <Button type='login'>Login</Button>
  </Form>
)

export default LoginPage
