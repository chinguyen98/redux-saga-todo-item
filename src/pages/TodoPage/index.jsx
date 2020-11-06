import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function TodoPage() {
  return (
    <Container>
      <Row>
        <Col className="text-center" md={12} xs={12}>
          <h1>Todo List!!!</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default TodoPage;