import { combineReducers } from 'redux'
import { routeReducer as router } from 'redux-simple-router'
import user from 'reducers/user'
import counter from 'reducers/counter'
import taskMasters from 'reducers/taskMasters'

export default combineReducers({
  user,
  counter,
  router,
  taskMasters
})
