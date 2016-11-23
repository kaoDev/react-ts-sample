import { ApplicationState } from './../models/applicationState';
import { delay, Task, takeLatest, Saga } from 'redux-saga'
import { put, cancel, take, fork, call } from 'redux-saga/effects'
import { Action } from 'redux-actions'
import { textChanged, inputChanged } from 'actions/actionCreators'
import { INPUT_CHANGED } from 'actions/actionTypes'

export function* changeTextAsync(textAction: Action<string>) {
    yield call(delay, 150)
    yield put(textChanged(textAction.payload || ''))
}

export function* watchTextChange() {
    yield takeLatest(INPUT_CHANGED, changeTextAsync as any)
}

export function* rootSaga() {
    yield [
        watchTextChange()
    ]
}