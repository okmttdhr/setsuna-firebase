import { handleActions } from 'redux-actions'
import { users as initialState } from 'reducers/initialState'
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
