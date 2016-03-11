import { createAction } from 'redux-actions'
import * as constants from 'constants'

export const toggleOverlay = createAction(constants.TOGGLE_OVERLAY)
export const toggleModalLogin = createAction(constants.TOGGLE_MODAL_LOGIN)
export const toggleModalPost = createAction(constants.TOGGLE_MODAL_POST)

export default {
  toggleOverlay,
  toggleModalLogin,
  toggleModalPost,
}
