import { handleActions } from 'redux-actions'
import { user as initialState } from 'reducers/initialState'
import * as constants from 'constants'

export default handleActions({
  [constants.REQUEST_CREATE_AUTH]: (state) => ({
    ...state,
    errorMessage: '',
  }),

  [constants.REQUEST_CREATE_AUTH_SUCCESS]: (state) => ({
    ...state,
    errorMessage: '',
  }),

  [constants.REQUEST_CREATE_AUTH_FAILURE]: (state, action) => ({
    ...state,
    errorMessage: action.payload,
  }),

  [constants.REQUEST_DELETE_AUTH_SUCCESS]: () => initialState,
}, initialState)
