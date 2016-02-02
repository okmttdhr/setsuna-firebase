import { Route, IndexRoute } from 'react-router'
import utils from 'utils/index'
import CoreLayout from 'layouts/CoreLayout/index'
import HomeView from 'views/HomeView/index'
import PostsView from 'views/PostsView/index'
import PostView from 'views/PostView/index'

function requireAuth (nextState, replaceState) {
  if (!utils.getAuth()) replaceState({ nextPathname: nextState.location.pathname }, '/')
}

export default (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={HomeView} />
    <Route path='/timeline' component={PostsView} onEnter={requireAuth} />
    <Route path='/post/:id' component={PostView} onEnter={requireAuth} />
  </Route>
)
