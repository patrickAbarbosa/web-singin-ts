import { createWrapper } from 'next-redux-wrapper'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import UserReducer from './reducers/user'
import rootSaga from './sagas'

const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    combineReducers({
      UserReducer,
    }),
    applyMiddleware(sagaMiddleware),
  )

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  store.sagaTask = sagaMiddleware.run(rootSaga)

  return store
}

const wrapper = createWrapper(makeStore)

export default wrapper
