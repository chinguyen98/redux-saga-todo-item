import todoActionTypes from "../action-types/todo.type"

export const todoCreateAction = (id, content) => {
  return {
    type: todoActionTypes.TO_DO_CREATE,
    payload: {
      id,
      content,
    }
  }
}