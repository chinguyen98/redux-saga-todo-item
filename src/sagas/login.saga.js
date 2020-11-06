import { takeLatest } from "redux-saga/effects";
import userActionTypes from "../action-types/user.type";

function* signInProcess({ payload: { email, password } }) {
  console.log({email, password})
}

function* watchLogin() {
  yield takeLatest(userActionTypes.SIGN_IN_START, signInProcess);
}

export default watchLogin;