import todoActionTypes from "../action-types/todo.type"

export const todoCreateAction = (content) => {
  return {
    type: todoActionTypes.TO_DO_CREATE,
    payload: {
      content
    }
  }
}