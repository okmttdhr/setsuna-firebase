import thunk from 'redux-thunk'
import rootReducer from 'reducers/rootReducer'
import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux'

export default function configureStore(initialState) {
  let createStoreWithMiddleware
  const middleware = applyMiddleware(thunk)

  if (__DEBUG__) {
    createStoreWithMiddleware = compose(
      middleware,
      window.devToolsExtension
        ? window.devToolsExtension()
        : require('../containers/DevTools').default.instrument()
    )
  } else {
    createStoreWithMiddleware = compose(middleware)
  }

  const store = createStoreWithMiddleware(createStore)(
    rootReducer, initialState
  )
  if (module.hot) {
    module.hot.accept('../reducers/rootReducer', () => {
      const nextRootReducer = require('../reducers/rootReducer').default

      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}
