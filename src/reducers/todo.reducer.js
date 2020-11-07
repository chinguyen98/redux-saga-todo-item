const { default: todoActionTypes } = require("../action-types/todo.type");

const getIndex = (list, id) => {
  const index = list.findIndex(item => {
    return item.id === id;
  });

  return index;
}

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
      const index = getIndex(state.listTodo, id);

      return {
        ...state,
        listTodo: [
          ...state.listTodo.slice(0, index),
          ...state.listTodo.slice(index + 1),
        ],
      }
    }
    case todoActionTypes.TO_DO_DONE: {
      const { id } = action.payload;
      const cloneArr = [...state.listTodo];
      const index = getIndex(cloneArr, id);

      return {
        ...state,
        listTodo: [
          ...cloneArr.slice(0, index),
          {
            ...cloneArr[index],
            isDone: true,
          },
          ...cloneArr.slice(index + 1),
        ],
      }
    }
    default: {
      return { ...state };
    }
  }
}

export default todoReducer;