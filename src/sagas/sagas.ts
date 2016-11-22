import { takeEvery, delay, Task } from 'redux-saga'
import { put, cancel, take, fork, call } from 'redux-saga/effects'
import { Action } from 'redux-actions'
import { textChanged, inputChanged } from 'actions/actionCreators'
import { INPUT_CHANGED } from 'actions/actionTypes'

export function* changeTextAsync(text: string) {
    yield call(delay, 150)
    yield put(textChanged(text))
}

export function* watchTextChange() {
    let task: Task<any> | undefined
    while (true) {
        const { payload } = (yield take(INPUT_CHANGED)) as Action<string>
        if (task) {
            yield cancel(task)
        }
        task = yield fork(changeTextAsync, payload)
    }
}

export function* rootSaga() {
    yield [
        watchTextChange()
    ]
}