import { combineEpics } from 'redux-observable'
import { textChangedEpic } from './textChange'

export const rootEpic = combineEpics(textChangedEpic)
