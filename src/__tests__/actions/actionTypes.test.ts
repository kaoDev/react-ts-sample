import { ActionType } from 'actions/actionTypes'

test('every action type should have the own name as string value', () => {
  for (const type in ActionType) {
    expect(ActionType[type]).toBeDefined()
    expect(type).toEqual(ActionType[type] as string)
  }
})
