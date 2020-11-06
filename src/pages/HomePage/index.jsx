import React from 'react';
import { Alert, Button, Col, Container, Form, FormGroup, FormLabel, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function HomePage() {
  const { firstName } = useSelector(state => state.user);
  const { listTodo } = useSelector(state => state.todo);

  return (
    <Container className="mr-5">
      <Row>
        <Col className="d-flex flex-column justify-content-center align-items-center">
          <h1>Todo List!!!</h1>
          <p className="text-success">Hello {firstName} </p>
        </Col>
      </Row>
      <Form>
        <Row className="d-flex justify-content-center align-items-center">
          <Col>
            <FormGroup>
              <Row>
                <Col xs={8}>
                  <Form.Control name="todo" type="text" placeholder="Enter new todo!" />
                </Col>
                <Col xs={4}>
                  <Button type="submit">Add new</Button>
                </Col>
              </Row>
            </FormGroup>
          </Col>
        </Row>
      </Form>
      <Row>
        <Col>
          {
            listTodo.length === 0 && <Alert variant="danger">No thing!!</Alert>
          }
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;