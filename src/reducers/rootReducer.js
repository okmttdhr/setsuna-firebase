import { combineReducers } from 'redux'
import { routeReducer as router } from 'redux-simple-router'
import counter from 'reducers/counter'

export default combineReducers({
  counter,
  router
})
