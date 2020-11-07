import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

import './todo-item.scss';

function TodoItem({ content, isDone, deleteItem, setDone }) {
  return (
    <Col
      className={`p-1 my-2 todo-item todo-item--${isDone ? 'done' : 'notdone'}`}
      xs={12} md={4}
    >
      <Row className="d-flex justify-content-center align-items-center p-2">
        <Col className="todo-item__content mb-2" xs={12}>
          {content}
        </Col>
        <Col className="d-flex justify-content-center align-items-center" xs={12}>
          {
            !isDone && <Button className="mx-1" variant="success" onClick={setDone}>Done</Button>
          }
          <Button
            className="mx-1"
            variant="danger"
            onClick={deleteItem}
          >Delete</Button>
        </Col>
      </Row>
    </Col>
  );
}

export default TodoItem;