import React from 'react';
import { Alert, Button, Col, Container, Form, FormGroup, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import TodoItem from '../../components/TodoItem';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { todoCreateAction, todoDeleteAction, todoSetDoneAction } from '../../actions/todo.action';
import { v4 as uuidv4 } from 'uuid';

function HomePage() {
  const { firstName } = useSelector(state => state.user);
  const { listTodo } = useSelector(state => state.todo);

  const dispatch = useDispatch();

  const schema = yup.object().shape({
    todo: yup.string()
      .required('Vui lòng nhập liệu'),
  });

  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const handleAddTodoItem = ({ todo }) => {
    dispatch(todoCreateAction(uuidv4(), todo));
  }

  const handleDeleteTodoItem = (id) => {
    dispatch(todoDeleteAction(id));
  }

  const handleSetDoneTodoItem = (id) => {
    dispatch(todoSetDoneAction(id));
  }

  const renderTodoList = () => {
    const gui = listTodo.map(item => {
      return (
        <TodoItem
          key={item.id}
          content={item.content}
          isDone={item.isDone}
          deleteItem={() => { handleDeleteTodoItem(item.id) }}
          setDone={() => { handleSetDoneTodoItem(item.id) }}
        />
      )
    })

    return gui;
  }

  return (
    <Container className="d-flex flex-column justify-content-center align-content-center">
      <Row>
        <Col md={12} className="d-flex flex-column justify-content-center align-items-center">
          <h1>Todo List!!!</h1>
          <p className="text-success">Hello {firstName} </p>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="d-flex flex-column justify-content-center align-items-center">
          <Form onSubmit={handleSubmit(handleAddTodoItem)}>
            <Row className="d-flex justify-content-center align-items-center">
              <Col md={12}>
                <FormGroup>
                  <Row>
                    <Col md={8} xs={8}>
                      <Form.Control ref={register} name="todo" type="text" placeholder="Enter new todo!" />
                      {
                        <p className="text-danger">{errors.todo?.message}</p>
                      }
                    </Col>
                    <Col md={4} xs={4}>
                      <Button type="submit">Add new</Button>
                    </Col>
                  </Row>
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      <Row>
        {
          listTodo.length === 0 ? <Alert variant="danger">No thing!!</Alert> : renderTodoList()
        }
      </Row>
    </Container>
  );
}

export default HomePage;