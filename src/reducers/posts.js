import { handleActions } from 'redux-actions'
import { posts as initialState } from 'reducers/initialState'
import * as constants from 'constants'

export default handleActions({
  [constants.REQUEST_POSTS]: (state) => ({
    ...state,
    errorMessage: ''
  })
}, initialState)
