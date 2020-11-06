const { default: todoActionTypes } = require("../action-types/todo.type");

const initState = {
  listTodo: [
    {
      content: 'Example Not Done!',
      isDone: false,
    },
    {
      content: 'Example Done!',
      isDone: true,
    },
  ],
}

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case todoActionTypes.TO_DO_CREATE: {
      const { content } = action.payload;
      const item = {
        content,
        isDone: false,
      }
      return {
        ...state,
        listTodo: [
          ...state.listTodo, item
        ]
      }
    }
    default: {
      return { ...state };
    }
  }
}

export default todoReducer;