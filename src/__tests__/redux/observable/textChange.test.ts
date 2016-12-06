import configureMockStore from 'redux-mock-store';
import { IStore } from 'redux-mock-store';
import { createEpicMiddleware } from 'redux-observable';
import { textChangedEpic } from 'redux/observable/textChange';
import { inputChanged, textChanged } from 'actions/actionCreators';
import { expectEpic, f } from './utils';

const epicMiddleware = createEpicMiddleware(textChangedEpic);
const mockStore = configureMockStore([epicMiddleware]);

describe('input is debounced', () => {

    let store: IStore<{}>;

    beforeEach(() => {
        store = mockStore();
    });

    afterEach(() => {
        epicMiddleware.replaceEpic(textChangedEpic);
    });

    test('input change is debounced and replaced by text changed', () => {
        const i = `a-b${f(16)}c`;
        const o = `--${f(15)}b${f(16)}c`;

        const inputValues = {
            a: inputChanged('a'),
            b: inputChanged('ab'),
            c: inputChanged('abc')
        };
        const outputValues = {
            b: textChanged('ab'),
            c: textChanged('abc')
        };

        expectEpic(textChangedEpic, { marbles: i, values: inputValues }, { marbles: o, values: outputValues }, store);
    });
});