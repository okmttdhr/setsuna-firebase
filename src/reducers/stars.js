import { handleActions } from 'redux-actions'
import { stars as initialState } from 'reducers/initialState'
import * as constants from 'constants'

export default handleActions({
  [constants.REQUEST_STARS]: (state) => ({
    ...state,
    isLoading: true,
    errorMessage: '',
  }),
  [constants.REQUEST_STARS_DONE]: (state) => ({
    ...state,
    isLoading: false,
    errorMessage: '',
  }),
}, initialState)
