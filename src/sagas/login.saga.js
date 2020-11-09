import { apply, call, delay, put, takeLatest } from "redux-saga/effects";
import userActionTypes from "../action-types/user.type";
import { signInSetErrorAction, signInSetLoadingAction, signInSetUserAction } from "../actions/user.action";
import { signInApi } from "../api/auth.api";
import * as jwt from 'jsonwebtoken';
import handleHttpError from "../helpers/handleHttpError";

function* signInProcess({ payload: { email, password, redirectCallback } }) {
  try {
    yield put(signInSetLoadingAction(true));
    yield delay(1000);//assuming this take take 3s to response!
    const response = yield apply('signInApi', signInApi, [email, password]);
    const { firstname, lastname } = yield call(['jwtDecode', jwt.decode], response.accessToken);
    yield put(signInSetUserAction(firstname, lastname, false));
    yield call(['redirectCallback', redirectCallback], '/');
  } catch (err) {
    const message = yield call(['handleHttpError', handleHttpError], err);
    yield put(signInSetErrorAction(message));
  }
}

function* watchLogin() {
  yield takeLatest(userActionTypes.SIGN_IN_START, signInProcess);
}

export default watchLogin;