import { unsetUserAction } from "../actions/user.action";

const { takeLatest, apply, call, put } = require("redux-saga/effects");
const { default: userActionTypes } = require("../action-types/user.type");

function* logoutProcess({ payload: { redirectCallback } }) {
  yield put(unsetUserAction());
  yield apply(localStorage, localStorage.removeItem, ['token']);
  yield call(redirectCallback, '/auth/login');
}

function* watchLogout() {
  yield takeLatest(userActionTypes.LOG_OUT, logoutProcess);
}

export default watchLogout;