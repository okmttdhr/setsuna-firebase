import { createAction } from 'redux-actions'
import * as constants from 'constants'

const setQuery = createAction(constants.REQUEST_POSTS)

export default {
  setQuery
}
