import { watchTextChange } from './textChange'
import { SagaIterator } from 'redux-saga'
import { fork } from 'redux-saga/effects'

export const rootSaga: () => SagaIterator = function* rootSaga() {
  yield [fork(watchTextChange)]
}
