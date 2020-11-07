import { all, call } from 'redux-saga/effects';
import watchLogin from './login.saga';
import watchRegister from './register.saga';

export default function* rootSaga() {
  yield all([
    call(watchLogin),
    call(watchRegister),
  ]);
}