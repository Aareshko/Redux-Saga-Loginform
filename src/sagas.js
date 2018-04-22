import { call, takeLatest } from 'redux-saga/effects';

import { REQUEST_LOGIN } from './actions'
import { login } from './api';


function* loginSaga(action) {
  try {
    console.log(action.payload.email)
    const response = yield call(login, {'email':action.payload.email,'password':action.payload.password});
    console.log(response)
  } catch (e) {
    console.log(e)
  }
}

export default function* mySaga() {
  yield takeLatest(REQUEST_LOGIN, loginSaga);
}
