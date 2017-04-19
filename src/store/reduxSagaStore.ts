import {ApplicationState} from 'models/applicationState';
import {reduceApplicationState} from 'reducers/applicationReducer';
import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from 'redux/saga/root';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function createApplicationStore() {
    const store = createStore<ApplicationState>(
        reduceApplicationState, composeEnhancers(applyMiddleware(sagaMiddleware)));
    sagaMiddleware.run(rootSaga);

    return store;
};
