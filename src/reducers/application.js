import * as constants from 'constants'
import { handleActions } from 'redux-actions'
import { application as initialState } from 'reducers/initialState'

export default handleActions({
  [constants.TOGGLE_OVERLAY]: (state) => ({
    ...state,
    isOverlay: !state.isOverlay,
  }),
}, initialState)
