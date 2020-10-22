import {
  AUTH_BEGIN,
  AUTH_END
} from '../actions/auth'

const initialState = {
  currentUser: {},
  account: {},
  isLoggedIn: false,
  loading: false
}

const authReducer = (state = initialState, action) => {
  console.log('Reducer: ', action)
  const { type, account, currentUser } = action

  switch (type) {
    case AUTH_BEGIN:
      return { ...state, loading: true }

    case AUTH_END:
      return { ...state, loading: false }

    default:
      return state
  }
}

export default authReducer