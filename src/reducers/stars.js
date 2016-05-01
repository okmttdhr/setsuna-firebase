import { handleActions } from 'redux-actions'
import { stars as initialState } from 'reducers/initialState'
import * as constants from 'constants'

export default handleActions({
  [constants.REQUEST_POSTS]: (state) => ({
    ...state,
    isLoading: true,
    errorMessage: '',
  }),
  [constants.REQUEST_POSTS_DONE]: (state) => ({
    ...state,
    isLoading: false,
    errorMessage: '',
  }),
}, initialState)
