import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { registerStartAction } from '../../actions/user.action';

function RegisterPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string()
      .email('Vui lòng nhập đúng định dạng email!')
      .required('Vui lòng nhập email!'),
    firstname: yup.string()
      .required('Vui lòng nhập tên!'),
    lastname: yup.string()
      .required('Vui lòng nhập họ!'),
    password: yup.string()
      .required('Vui lòng nhập password!'),
    confirmPasword: yup.string()
      .required('Vui lòng nhập xác nhận mật khẩu!')
      .oneOf([yup.ref('password')], 'Mật khẩu xác nhận không khớp!'),
  });

  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const handleRegister = ({ email, password, firstname, lastname }) => {
    dispatch(registerStartAction(email, password, firstname, lastname, history.push));
  }

  return (
    <Container className="login-page py-5">
      <h1 className="text-center">Register Page</h1>
      <Form onSubmit={handleSubmit(handleRegister)}>
        <Row className="d-flex justify-content-center">
          <Col className="pb-3" md={8}>
            <Form.Label>Email address <span className="text-danger">{errors.email?.message}</span></Form.Label>
            <Form.Control ref={register} name="email" type="text" placeholder="Enter email" />
          </Col>
          <Col className="pb-3" md={8}>
            <Form.Label>Your firsname: <span className="text-danger">{errors.firstname?.message}</span></Form.Label>
            <Form.Control ref={register} name="firstname" type="text" placeholder="Enter your firstname" />
          </Col>
          <Col className="pb-3" md={8}>
            <Form.Label>Your lastname: <span className="text-danger">{errors.lastname?.message}</span></Form.Label>
            <Form.Control ref={register} name="lastname" type="text" placeholder="Enter your lastname" />
          </Col>
          <Col className="pb-3" md={8}>
            <Form.Label>Password <span className="text-danger">{errors.password?.message}</span></Form.Label>
            <Form.Control ref={register} name="password" type="password" placeholder="Enter password" />
          </Col>
          <Col className="pb-3" md={8}>
            <Form.Label>Confirm password <span className="text-danger">{errors.confirmPasword?.message}</span></Form.Label>
            <Form.Control ref={register} name="confirmPasword" type="password" placeholder="Enter password again" />
          </Col>
          <Col md={8}>
            <Button type="submit">
              <span>
                <b>Register</b>
              </span>
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}

export default RegisterPage;