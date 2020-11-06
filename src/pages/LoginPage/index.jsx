import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import './login-page.scss';

function LoginPage() {
  const schema = yup.object().shape({
    email: yup.string()
      .email('Vui lòng nhập đúng định dạng email!')
      .required('Vui lòng nhập email!'),
    password: yup.string()
      .required('Vui lòng nhập password!'),
  });

  const { handleSubmit, errors, register } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSignIn = ({ email, password }) => {
    console.log({ email, password });
  };

  return (
    <Container className="login-page py-5">
      <h1 className="text-center">Login Page</h1>
      <Form onSubmit={handleSubmit(handleSignIn)}>
        <Row className="d-flex justify-content-center">
          <Col className="pb-3" md={8}>
            <Form.Label>Email address <span className="text-danger">{errors.email?.message}</span></Form.Label>
            <Form.Control ref={register} name="email" type="text" placeholder="Enter email" />
          </Col>
          <Col className="pb-3" md={8}>
            <Form.Label>Password <span className="text-danger">{errors.password?.message}</span></Form.Label>
            <Form.Control ref={register} name="password" type="password" placeholder="Enter password" />
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