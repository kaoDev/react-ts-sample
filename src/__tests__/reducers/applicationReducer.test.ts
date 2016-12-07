import { reduceApplicationState } from 'reducers/applicationReducer';
import { initialAppState } from 'models/applicationState';
import { ApplicationState } from 'models/applicationState';
import { textChanged, inputChanged } from 'actions/actionCreators';

describe('application state reducer handles actions correctly', () => {

    const appState = initialAppState;
    const changedText = 'some text';
    const appStateWithNewText = new ApplicationState(changedText);

    test('nothing happens on unknown action', () => {
        expect(reduceApplicationState(appState, { type: 'UNKNOWN' })).toBe(appState);
    });

    test('do nothing on INPUT_CHANGED', () => {
        expect(reduceApplicationState(appState, inputChanged(changedText))).toBe(appState);
    });

    test('change text value on TEXT_CHANGED', () => {
        expect(reduceApplicationState(appState, textChanged(changedText))).toEqual(appStateWithNewText);
    });
});