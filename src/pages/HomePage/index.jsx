import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function HomePage() {
  const { firstName } = useSelector(state => state.user);

  return (
    <Container>
      <Row>
        <Col className="text-center" md={12} xs={12}>
          <h1>Todo List!!!</h1>
          <p className="text-success">Hello {firstName} </p>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;