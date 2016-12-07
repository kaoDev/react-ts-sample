import 'babel-polyfill';
import { createApplicationStore } from 'store/reduxSagaStore';
import { ApplicationState } from 'models/applicationState';

describe('createApplicationStore should create a store object', () => {
    const store = createApplicationStore();

    test('saga store provides a valid redux store object', () => {
        expect(store).toBeDefined();
        expect(store.dispatch).toBeDefined();
        expect(store.getState).toBeDefined();
        expect(store.subscribe).toBeDefined();
    });

    test('saga store provides a ApplicationState', () => {
        expect(store.getState()).toBeInstanceOf(ApplicationState);
    });
});