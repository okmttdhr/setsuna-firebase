import constants from 'constants'
import { handleActions } from 'redux-actions'

export default handleActions({
  [constants.REQUEST_CREATE_AUTH]: (state) => ({
    ...state,
    isFetching: true,
    errorMessage: ''
  }),

  [constants.REQUEST_CREATE_AUTH_SUCCESS]: (state, action) => {
    const nextState = {
      ...state,
      auth: action.payload.auth,
      expires: action.payload.expires,
      google: action.payload.google,
      provider: action.payload.provider,
      token: action.payload.token,
      uid: action.payload.uid,
      isFetching: false,
      errorMessage: ''
    }
    localStorage.setItem('Account', JSON.stringify(nextState))
    return nextState
  },

  [constants.REQUEST_CREATE_AUTH_FAILURE]: (state, action) => ({
    ...state,
    isFetching: false,
    errorMessage: action.payload
  })
}, {
  auth: {},
  expires: null,
  google: {},
  provider: null,
  token: null,
  uid: null,
  isFetching: false,
  errorMessage: ''
})
