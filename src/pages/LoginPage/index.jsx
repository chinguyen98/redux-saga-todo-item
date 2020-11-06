import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

import './login-page.scss';

function LoginPage() {
  return (
    <Container className="login-page py-5">
      <h1 className="text-center">Login Page</h1>
      <Form>
        <Row className="d-flex justify-content-center">
          <Col className="pb-3" md={8}>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Col>
          <Col className="pb-3" md={8}>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" />
          </Col>
          <Col md={8}>
            <Button variant="primary" type="submit">
              Login
          </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}

export default LoginPage;