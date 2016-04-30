import { createAction } from 'redux-actions'
import * as constants from 'constants'

const requestPosts = createAction(constants.REQUEST_POSTS)
const requestPostsDone = createAction(constants.REQUEST_POSTS_DONE)

export default {
  requestPosts,
  requestPostsDone,
}
