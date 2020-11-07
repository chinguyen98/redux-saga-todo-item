import { takeLatest } from "redux-saga/effects";
import userActionTypes from "../action-types/user.type";
import { registerApi } from "../api/auth.api";
import handleHttpError from "../helpers/handleHttpError";

function* registerProcess({ payload: { email, firstname, lastname, password, redirectCallback } }) {
  try {
    yield registerApi(email, password, firstname, lastname);
    redirectCallback('/auth/login');
  } catch (error) {
    const message = yield handleHttpError(error);
    console.log(message);
  }
}

function* watchRegister() {
  yield takeLatest(userActionTypes.REGISTER_START, registerProcess);
}

export default watchRegister;