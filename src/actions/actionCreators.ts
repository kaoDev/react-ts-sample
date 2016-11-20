import { createAction } from 'redux-actions'
import * as types from './actionTypes'

export const textChanged = createAction<string>(
    types.TEXT_CHANGED,
    (text: string) => text
)

export const inputChanged = createAction<string>(
    types.INPUT_CHANGED,
    (text: string) => text
)