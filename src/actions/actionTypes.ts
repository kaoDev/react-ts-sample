export enum ActionType {
  TEXT_CHANGED = 'TEXT_CHANGED',
  INPUT_CHANGED = 'INPUT_CHANGED',
}

export type InputChangedAction = {
  type: ActionType.INPUT_CHANGED
  input: string
}

export type TextChangedAction = {
  type: ActionType.TEXT_CHANGED
  text: string
}

export type Action = InputChangedAction | TextChangedAction
