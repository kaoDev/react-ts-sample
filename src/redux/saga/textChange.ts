import { delay, takeLatest } from 'redux-saga'
import { put, call } from 'redux-saga/effects'
import { Action, ActionType } from 'actions/actionTypes'
import { textChanged } from 'actions/actionCreators'

export const changeTextAsync = function*(action: Action) {
  if (action.type === ActionType.INPUT_CHANGED) {
    yield call(delay, 150)
    yield put(textChanged(action.input))
  }
}

export const watchTextChange = function*() {
  yield takeLatest(ActionType.INPUT_CHANGED, changeTextAsync)
}
