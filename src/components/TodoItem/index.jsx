import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

import './todo-item.scss';

function TodoItem({ content, isDone, deleteItem }) {
  return (
    <Row className={`p-1 my-2 todo-item--${isDone ? 'done' : 'notdone'}`}>
      <Col xs={12}>
        <Row className="d-flex justify-content-center align-items-center">
          <Col className="mb-2" xs={12}>
            {content}
          </Col>
          <Col className="d-flex justify-content-center align-items-center" xs={12}>
            {
              !isDone && <Button className="mx-1" variant="success">Done</Button>
            }
            <Button
              className="mx-1"
              variant="danger"
              onClick={deleteItem}
            >Delete</Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default TodoItem;