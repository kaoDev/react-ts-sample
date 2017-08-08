import { Action, ActionType } from 'actions//actionTypes'
import { ApplicationState, initialAppState } from 'models/applicationState'

export const reduceApplicationState = (
  state: ApplicationState = initialAppState,
  action: Action
) => {
  switch (action.type) {
    case ActionType.TEXT_CHANGED:
      return { text: action.text || '' }
    default:
      return state
  }
}
