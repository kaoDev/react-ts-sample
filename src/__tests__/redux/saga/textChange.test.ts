import { inputChanged, textChanged } from 'actions/actionCreators'
import { changeTextAsync } from 'redux/saga/textChange'
import { put, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'

describe('test debouncing of text input', () => {
  const textValue = 'text'

  const generator = changeTextAsync(inputChanged(textValue))

  test('delay is called', () => {
    expect(generator.next().value).toEqual(call(delay, 150))
  })

  test('text change is called', () => {
    expect(generator.next().value).toEqual(put(textChanged(textValue)))
  })
})
