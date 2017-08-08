import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/debounceTime'
import { Action, ActionType, InputChangedAction } from 'actions/actionTypes'
import { textChanged } from 'actions/actionCreators'
import { ApplicationState } from 'models/applicationState'
import { ScheduledEpic } from 'redux/observable/ScheduledEpic'

export const textChangedEpic: ScheduledEpic<Action, ApplicationState> = (
  action$,
  store?,
  scheduler?
) =>
  action$
    .ofType(ActionType.INPUT_CHANGED)
    .map((action: InputChangedAction) => textChanged(action.input))
    .debounceTime(150, scheduler)
