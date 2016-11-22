import 'babel-polyfill'
import { textChanged } from 'actions/actionCreators';
import { changeTextAsync } from 'sagas/sagas'
import { put, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'

test('changeTextAsync acts correctly', () => {
    const textValue = 'text'
    const generator = changeTextAsync(textValue)

    expect(generator.next().value).toEqual(call(delay, 150))

    expect(generator.next().value).toEqual(put(textChanged(textValue)))
})