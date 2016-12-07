import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reduceApplicationState } from 'reducers/applicationReducer';
import { rootSaga } from 'redux/saga/root';
import { ApplicationState } from 'models/applicationState';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const createApplicationStore = () => {
    const store = createStore<ApplicationState>(reduceApplicationState, composeEnhancers(applyMiddleware(sagaMiddleware)));
    sagaMiddleware.run(rootSaga);
    return store;
};
