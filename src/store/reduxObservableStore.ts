import { ApplicationState } from 'models/applicationState'
import { reduceApplicationState } from 'reducers/applicationReducer'
import { applyMiddleware, compose, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { rootEpic } from 'redux/observable/root'

const epicMiddleware = createEpicMiddleware(rootEpic)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

if (module.hot) {
  module.hot.accept('redux/observable/root', () => {
    const rootEpic = require('redux/observable/root').rootEpic
    epicMiddleware.replaceEpic(rootEpic)
  })
}

export const createApplicationStore = () => {
  return createStore<ApplicationState>(
    reduceApplicationState,
    composeEnhancers(applyMiddleware(epicMiddleware))
  )
}
