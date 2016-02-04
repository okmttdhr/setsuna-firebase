import { combineReducers } from 'redux'
import { routeReducer as router } from 'redux-simple-router'
import user from 'reducers/user'
import counter from 'reducers/counter'
import posts from 'reducers/posts'

export default combineReducers({
  user,
  counter,
  router,
  posts
})
