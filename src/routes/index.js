import { Route, IndexRoute } from 'react-router'
import CoreLayout from 'layouts/CoreLayout/index'
import HomeView from 'views/HomeView/index'
import PostsView from 'views/PostsView/index'
import PostView from 'views/PostView/index'

export default (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={HomeView} />
    <Route path='/timeline' component={PostsView} />
    <Route path='/post/:id' component={PostView} />
  </Route>
)
