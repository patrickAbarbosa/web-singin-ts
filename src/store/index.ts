import { createWrapper } from 'next-redux-wrapper'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import ReduxThunk from 'redux-thunk'

import userReducer from './reducers/user'

const makeStore = () => {
  const store = createStore(
    combineReducers({
      userReducer,
    }),
    {},
    applyMiddleware(ReduxThunk),
  )

  return store
}

const wrapper = createWrapper(makeStore)

export default wrapper
