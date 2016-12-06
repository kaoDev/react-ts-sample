import { Action } from 'redux-actions';
import { ApplicationState, initialAppState } from 'models/applicationState';
import * as types from 'actions/actionTypes';

export const reduceApplicationState = (state: ApplicationState = initialAppState, action: Action<any>) => {
    switch (action.type) {
        case types.TEXT_CHANGED:
            const textAction = action as Action<string>;
            return new ApplicationState(textAction.payload || '');
        default:
            return state;
    }
};