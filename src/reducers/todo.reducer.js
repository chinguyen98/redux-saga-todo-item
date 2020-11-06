const { default: todoActionTypes } = require("../action-types/todo.type");

const initState = {
  listTodo: [
    {
      id: '1',
      content: 'Example Not Done!',
      isDone: false,
    },
    {
      id: '2',
      content: 'Example Done!',
      isDone: true,
    },
  ],
}

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case todoActionTypes.TO_DO_CREATE: {
      const { id, content } = action.payload;
      const item = {
        id,
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
    case todoActionTypes.TO_DO_REMOVE: {
      const { id } = action.payload;
      const newlist = [...state.listTodo];
      // const index = state.listTodo.indexOf(item => {
      //   return item.id === id;
      // });
      return {
        ...state,
        listTodo: [
          ...newlist.filter(item => item.id !== id),
        ]
      }
    }
    default: {
      return { ...state };
    }
  }
}

export default todoReducer;