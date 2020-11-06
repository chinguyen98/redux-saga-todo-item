import { put, takeLatest } from "redux-saga/effects";
import userActionTypes from "../action-types/user.type";
import { signInSetErrorAction, signInSetLoadingAction, signInSetUserAction } from "../actions/user.action";
import { signInApi } from "../api/auth.api";
import * as jwt from 'jsonwebtoken';
import handleHttpError from "../helpers/handleHttpError";

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* signInProcess({ payload: { email, password, redirectCallback } }) {
  try {
    yield put(signInSetLoadingAction(true));
    //yield delay(3000);//assuming this take take 3s to response!
    const response = yield signInApi(email, password);
    const { firstname, lastname } = yield jwt.decode(response.accessToken);
    yield put(signInSetUserAction(firstname, lastname, false));
    redirectCallback('/');
  } catch (err) {
    const message = yield handleHttpError(err);
    yield put(signInSetErrorAction(message));
  }
}

function* watchLogin() {
  yield takeLatest(userActionTypes.SIGN_IN_START, signInProcess);
}

export default watchLogin;