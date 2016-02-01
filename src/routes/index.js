import { Route, IndexRoute } from 'react-router'
import CoreLayout from 'layouts/CoreLayout/index'
import HomeView from 'views/HomeView/index'
import PostView from 'views/PostView/index'

export default (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={HomeView} />
    <Route path='/posts/:id' component={PostView} />
  </Route>
)
