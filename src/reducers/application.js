import * as constants from 'constants'
import { handleActions } from 'redux-actions'
import { application as initialState } from 'reducers/initialState'

export default handleActions({
  [constants.TOGGLE_OVERLAY]: (state) => ({
    ...state,
    isOverlay: !state.isOverlay,
  }),
  [constants.TOGGLE_MODAL_LOGIN]: (state) => ({
    ...state,
    isModalLoginShow: !state.isModalLoginShow,
  }),
  [constants.TOGGLE_MODAL_POST]: (state) => ({
    ...state,
    isModalPostShow: !state.isModalPostShow,
  }),
}, initialState)
