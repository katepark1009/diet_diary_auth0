// DEFINITIONS
export const AUTH_BEGIN = 'AUTH_BEGIN'
export const AUTH_END = 'AUTH_END'

// ACTION CREATORS
export const authBegin = () => ({ type: AUTH_BEGIN })
export const authEnd = () => ({ type: AUTH_END })

// LOGIN
export const startLogin = (payload, setSubmitting) => {
  return async (dispatch, getState) => {
    dispatch(authBegin())
    try {

    } catch (error) {
      console.warn(error.response)
      dispatch(authEnd())
    }
  }
}