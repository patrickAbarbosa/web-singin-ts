import { call, put, takeLatest } from 'redux-saga/effects'

import { fetchSignIn } from './actions/signin'
import { userTypes } from './reducers/user'

// eslint-disable-next-line
function* signIn() {
  try {
    const response = yield call(fetchSignIn)

    yield put({ type: userTypes.SIGN_IN_SUCCESS, payload: response })
  } catch (err) {
    yield put({ type: userTypes.SIGN_IN_FAIL })
  }
}

// eslint-disable-next-line
export default function * root() {
  yield [takeLatest(userTypes.SIGN_IN, signIn)]
}
