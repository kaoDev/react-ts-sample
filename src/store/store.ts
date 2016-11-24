import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { reduceApplicationState } from 'reducers/applicationReducer'
import * as sagas from 'sagas/sagas'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const createApplicationStore = () => {
    const store = createStore(reduceApplicationState, composeEnhancers(applyMiddleware(sagaMiddleware)))
    sagaMiddleware.run(sagas.rootSaga)
    return store
}
