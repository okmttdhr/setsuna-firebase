import { combineReducers } from 'redux'
import { routeReducer as router } from 'redux-simple-router'
import account from 'reducers/account'
import counter from 'reducers/counter'

export default combineReducers({
  account,
  counter,
  router
})
