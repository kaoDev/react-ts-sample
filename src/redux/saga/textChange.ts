import { delay, takeLatest } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import { Action } from 'redux-actions';
import { textChanged } from 'actions/actionCreators';
import { INPUT_CHANGED } from 'actions/actionTypes';

export const changeTextAsync = function* (textAction: Action<string>) {
    yield call(delay, 150);
    yield put(textChanged(textAction.payload || ''));
}

export const watchTextChange = function* () {
    yield takeLatest(INPUT_CHANGED, changeTextAsync);
}