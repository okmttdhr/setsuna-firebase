import { createAction } from 'redux-actions'
import * as constants from 'constants'

export const toggleOverlay = createAction(constants.TOGGLE_OVERLAY)

export default {
  toggleOverlay,
}
