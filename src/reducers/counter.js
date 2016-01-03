import constants from 'constants'
import { handleActions } from 'redux-actions'

export default handleActions({
  [constants.COUNTER_INCREMENT]: (state, { payload }) => state + payload
}, 1)
