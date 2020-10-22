import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import authReducer from './reducers/auth'
import youtubeReducer from './reducers/youtube'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middleware = process.env.ENV === 'production'
  ? applyMiddleware(thunk)
  : composeEnhancers(applyMiddleware(thunk))

const appReducer = combineReducers({
  auth: authReducer,
  youtube: youtubeReducer
})

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined
  }
  return appReducer(state, action)
}

export default createStore(rootReducer, middleware)
