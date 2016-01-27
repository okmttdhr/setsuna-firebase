import { createAction } from 'redux-actions'
import * as constants from 'constants'
// import config from 'utils/config'
// import Firebase from 'firebase'
// const firebaseRef = new Firebase(config.firebase.demoRef)

const setQuery = createAction(constants.SET_QUERY_TASK_MASTERS, (query = {}) => query)

export default {
  setQuery
}
