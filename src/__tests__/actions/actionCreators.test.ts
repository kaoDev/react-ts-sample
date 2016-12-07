import { textChanged, inputChanged } from 'actions/actionCreators';
import { TEXT_CHANGED, INPUT_CHANGED } from 'actions/actionTypes';

const textValue = 'text';

describe('textChanged should create a valid action', () => {

    const action = textChanged(textValue);

    test('action should equal expected model', () => {
        expect(action).toEqual({
            type: TEXT_CHANGED,
            payload: textValue
        });
    });
});

describe('inputChanged should create a valid action', () => {

    const action = inputChanged(textValue);

    test('action should equal expected model', () => {
        expect(action).toEqual({
            type: INPUT_CHANGED,
            payload: textValue
        });
    });
});