import { all, call } from 'redux-saga/effects';
import watchLogin from './login.saga';
import watchLogout from './logout.saga';
import watchRegister from './register.saga';

export default function* rootSaga() {
  yield all([
    call(watchLogin),
    call(watchRegister),
    call(watchLogout),
  ]);
}