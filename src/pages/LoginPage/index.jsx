import React from 'react';
import { Alert, Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import './login-page.scss';
import { useDispatch, useSelector } from 'react-redux';
import { signInStartAction } from '../../actions/user.action';
import { useHistory } from 'react-router-dom';

function LoginPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  const errorMessage = useSelector(state => state.user.error);
  const isLoading = useSelector(state => state.user.isLoading);

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
    dispatch(signInStartAction(email, password, history.push));
  };


  return (
    <Container className="login-page py-5">
      <h1 className="text-center">Login Page</h1>
      <Form onSubmit={handleSubmit(handleSignIn)}>
        <Row className="d-flex justify-content-center">
          <Col md={8}>
            {
              errorMessage && <Alert variant="danger">{errorMessage}</Alert>
            }
          </Col>
          <Col className="pb-3" md={8}>
            <Form.Label>Email address <span className="text-danger">{errors.email?.message}</span></Form.Label>
            <Form.Control ref={register} name="email" type="text" placeholder="Enter email" defaultValue="dacchi6761@gmail.com" />
          </Col>
          <Col className="pb-3" md={8}>
            <Form.Label>Password <span className="text-danger">{errors.password?.message}</span></Form.Label>
            <Form.Control ref={register} name="password" type="password" placeholder="Enter password" defaultValue="Aa12345" />
          </Col>
          <Col md={8}>
            <Button variant={isLoading ? 'dark' : 'primary'} type="submit" disabled={isLoading}>
              <span>
                {
                  isLoading && <Spinner animation="border" variant="primary" size="sm" />
                }
                <b>Login{isLoading && '.......'}</b>
              </span>
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}

export default LoginPage;