import { createAction, Action } from 'redux-actions';
import * as types from './actionTypes';

export const textChanged: (text: string) => Action<string> = createAction<string, string>(
    types.TEXT_CHANGED,
    (text: string) => text
);

export const inputChanged: (text: string) => Action<string> = createAction<string, string>(
    types.INPUT_CHANGED,
    (text: string) => text
);