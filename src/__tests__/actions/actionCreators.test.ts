import { textChanged, inputChanged } from 'actions/actionCreators'
import { ActionType } from 'actions/actionTypes'

const textValue = 'text'

describe('textChanged should create a valid action', () => {
  const action = textChanged(textValue)

  test('action should equal expected model', () => {
    expect(action).toEqual({
      type: ActionType.TEXT_CHANGED,
      text: textValue,
    })
  })
})

describe('inputChanged should create a valid action', () => {
  const action = inputChanged(textValue)

  test('action should equal expected model', () => {
    expect(action).toEqual({
      type: ActionType.INPUT_CHANGED,
      input: textValue,
    })
  })
})
