import { takeLatest } from "redux-saga/effects";
import userActionTypes from "../action-types/user.type";

function* registerProcess({ payload: { email, name, password, redirectCallback } }) {
  yield console.log({ email, name, password, redirectCallback });
}

function* watchRegister() {
  yield takeLatest(userActionTypes.REGISTER_START, registerProcess);
}

export default watchRegister;