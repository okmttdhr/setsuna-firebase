import { createAction } from 'redux-actions'
import * as constants from 'constants'

const requestPosts = createAction(constants.REQUEST_POSTS)

export default {
  requestPosts,
}
