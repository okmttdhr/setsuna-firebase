import { combineReducers } from 'redux'
import { routeReducer as router } from 'redux-simple-router'
import application from 'reducers/application'
import user from 'reducers/user'
import counter from 'reducers/counter'
import posts from 'reducers/posts'

export default combineReducers({
  application,
  user,
  counter,
  router,
  posts,
})
