import { handleActions } from 'redux-actions'
import { account as initialState } from 'reducers/initialState'
import * as constants from 'constants'

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
    return nextState
  },

  [constants.REQUEST_CREATE_AUTH_FAILURE]: (state, action) => ({
    ...state,
    isFetching: false,
    errorMessage: action.payload
  }),

  [constants.REQUEST_DELETE_AUTH_SUCCESS]: (state, action) => initialState
}, initialState)
