import React from 'react';
import { Alert, Button, Col, Container, Form, FormGroup, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import TodoItem from '../../components/TodoItem';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { todoCreateAction, todoDeleteAction } from '../../actions/todo.action';
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

  const renderTodoList = () => {
    const gui = listTodo.map(item => {
      return (
        <TodoItem
          key={item.id}
          content={item.content}
          isDone={item.isDone}
          deleteItem={() => { handleDeleteTodoItem(item.id) }}
        />
      )
    })

    return gui;
  }

  return (
    <Container className="mr-5">
      <Row>
        <Col className="d-flex flex-column justify-content-center align-items-center">
          <h1>Todo List!!!</h1>
          <p className="text-success">Hello {firstName} </p>
        </Col>
      </Row>
      <Form onSubmit={handleSubmit(handleAddTodoItem)}>
        <Row className="d-flex justify-content-center align-items-center">
          <Col>
            <FormGroup>
              <Row>
                <Col xs={8}>
                  <Form.Control ref={register} name="todo" type="text" placeholder="Enter new todo!" />
                  {
                    <p className="text-danger">{errors.todo?.message}</p>
                  }
                </Col>
                <Col xs={4}>
                  <Button type="submit">Add new</Button>
                </Col>
              </Row>
            </FormGroup>
          </Col>
        </Row>
      </Form>
      <Container>
        {
          listTodo.length === 0 ? <Alert variant="danger">No thing!!</Alert> : renderTodoList()
        }
      </Container>
    </Container>
  );
}

export default HomePage;