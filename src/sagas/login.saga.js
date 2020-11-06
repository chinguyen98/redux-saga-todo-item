import { put, takeLatest } from "redux-saga/effects";
import userActionTypes from "../action-types/user.type";
import { signInSetErrorAction, signInSetLoadingAction, signInSetUserAction } from "../actions/user.action";
import { signInApi } from "../api/auth.api";
import * as jwt from 'jsonwebtoken';
import handleHttpError from "../helpers/handleHttpError";

function* signInProcess({ payload: { email, password } }) {
  try {
    yield put(signInSetLoadingAction(true));
    const response = yield signInApi(email, password);
    const { firstname, lastname } = yield jwt.decode(response.accessToken);
    yield put(signInSetUserAction(firstname, lastname, false));
  } catch (err) {
    const message = yield handleHttpError(err);
    yield put(signInSetErrorAction(message));
  }
}

function* watchLogin() {
  yield takeLatest(userActionTypes.SIGN_IN_START, signInProcess);
}

export default watchLogin;