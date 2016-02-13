import { createHashHistory } from 'history'
import { syncReduxAndRouter } from 'redux-simple-router'
import routes from 'routes'
import Root from 'containers/Root'
import configureStore from 'utils/configureStore'

const store = configureStore({})
const history = createHashHistory({ queryKey: false })

syncReduxAndRouter(history, store, (state) => state.router)

// Render the React application to the DOM
ReactDOM.render(
  <Root history={history} routes={routes} store={store} />,
  document.getElementById('root')
)
