import * as React from 'react';
import renderer from 'react-test-renderer';
import { App } from 'containers/app';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from 'redux/observable/root';

const epicMiddleware = createEpicMiddleware(rootEpic);
const mockStore = configureMockStore([epicMiddleware]);

jest.mock('react-toolbox/lib/input/Input', () => { return { inputFactory: () => 'Input' }; });

describe('App should be rendered', () => {

    const component = renderer.create(
        <Provider store={mockStore()}>
            <App />
        </Provider>
    );
    let tree = component.toJSON();

    test('Snapshot test', () => {
        expect(tree).toMatchSnapshot();
    });
});