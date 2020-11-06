import userActionTypes from "../action-types/user.type"

export const signInStartAction = (email, password) => {
  return {
    type: userActionTypes.SIGN_IN_START,
    payload: { email, password }
  }
}