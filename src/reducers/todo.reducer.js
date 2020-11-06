const { default: todoActionTypes } = require("../action-types/todo.type");

const initState = {
  listTodo: [],
}

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case todoActionTypes.TO_DO_CREATE: {
      const { content } = action.payload;
      return {
        ...state,
        listTodo: [
          ...state.listTodo, content
        ]
      }
    }
    default: {
      return { ...state };
    }
  }
}

export default todoReducer;