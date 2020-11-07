import userActionTypes from "../action-types/user.type"

export const signInStartAction = (email, password, redirectCallback) => {
  return {
    type: userActionTypes.SIGN_IN_START,
    payload: { email, password, redirectCallback },
  }
}

export const registerStartAction = (email, password, firstname, lastname, redirectCallback) => {
  return {
    type: userActionTypes.REGISTER_START,
    payload: { email, password, firstname, lastname, redirectCallback },
  }
}

export const signInSetLoadingAction = (isLoading) => {
  return {
    type: userActionTypes.SIGN_IN_SET_LOADING,
    payload: { isLoading },
  }
}

export const signInSetErrorAction = (error) => {
  return {
    type: userActionTypes.SIGN_IN_SET_ERROR,
    payload: { error },
  }
}

export const signInSetUserAction = (firstName, lastName, isLoading) => {
  return {
    type: userActionTypes.SIGN_IN_SET_USER,
    payload: { firstName, lastName, isLoading },
  }
}