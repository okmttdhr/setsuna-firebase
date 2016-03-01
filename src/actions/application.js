import { createAction } from 'redux-actions'
import * as constants from 'constants'

export const toggleOverlay = createAction(constants.TOGGLE_OVERLAY)
export const toggleModalLogin = createAction(constants.TOGGLE_MODAL_LOGIN)

export default {
  toggleOverlay,
  toggleModalLogin,
}
