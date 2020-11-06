import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function IntroPage() {
  return (
    <Container>
      <Row>
        <Col className="text-center" md={12}>
          <h1>Hello!</h1>
          <a target="_blank" href="https://github.com/chinguyen98/redux-saga-todo-item"><h3>Click here to access my github project!</h3></a>
        </Col>
      </Row>
    </Container>
  )
}

export default IntroPage;