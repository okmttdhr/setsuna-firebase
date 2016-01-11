import { Route, IndexRoute } from 'react-router'
import CoreLayout from 'layouts/CoreLayout/index'
import HomeView from 'views/HomeView/index'
import AboutView from 'views/AboutView'

export default (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={HomeView} />
    <Route path='/about' component={AboutView} />
  </Route>
)
