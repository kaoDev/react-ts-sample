import { ActionType, Action } from './actionTypes'

export const textChanged = (text: string): Action => ({
  type: ActionType.TEXT_CHANGED,
  text,
})

export const inputChanged = (input: string): Action => ({
  type: ActionType.INPUT_CHANGED,
  input,
})
