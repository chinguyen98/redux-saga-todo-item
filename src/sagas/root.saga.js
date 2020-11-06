import { all, call } from 'redux-saga/effects';
import watchLogin from './login.saga';

export default function* rootSaga() {
  yield all([
    call(watchLogin),
  ]);
}