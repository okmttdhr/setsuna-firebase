import { createAction } from 'redux-actions'
import * as constants from 'constants'

const requestStars = createAction(constants.REQUEST_STARS)
const requestStarsDone = createAction(constants.REQUEST_STARS_DONE)

export default {
  requestStars,
  requestStarsDone,
}
