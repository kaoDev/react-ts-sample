import { delay, takeLatest } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import { Action } from 'redux-actions';
import { textChanged } from 'actions/actionCreators';
import { INPUT_CHANGED } from 'actions/actionTypes';

export function* changeTextAsync(textAction: Action<string>) {
    yield call(delay, 150);
    yield put(textChanged(textAction.payload || ''));
}

export function* watchTextChange() {
    yield takeLatest(INPUT_CHANGED, changeTextAsync as any);
}