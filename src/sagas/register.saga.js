import { apply, call, put, takeLatest } from "redux-saga/effects";
import userActionTypes from "../action-types/user.type";
import { signInSetErrorAction, signInSetLoadingAction } from "../actions/user.action";
import { registerApi } from "../api/auth.api";
import handleHttpError from "../helpers/handleHttpError";

function* registerProcess({ payload: { email, firstname, lastname, password, redirectCallback } }) {
  try {
    yield put(signInSetLoadingAction(true));
    yield apply('registerApi', registerApi, [email, password, firstname, lastname]);
    yield put(signInSetLoadingAction(false));
    yield call(['redirectCallback', redirectCallback], '/auth/login');
  } catch (error) {
    const message = yield call(['handleHttpError', handleHttpError], error);
    yield put(signInSetErrorAction(message));
  }
}

function* watchRegister() {
  yield takeLatest(userActionTypes.REGISTER_START, registerProcess);
}

export default watchRegister;