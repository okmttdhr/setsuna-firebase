import * as constants from 'constants'
import { handleActions } from 'redux-actions'

export default handleActions({
  [constants.COUNTER_INCREMENT]: (state, action) => state + action.payload,
}, 1)
