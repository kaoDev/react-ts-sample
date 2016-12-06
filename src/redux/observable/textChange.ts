import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import { Scheduler } from 'rxjs/Scheduler';
import { ActionsObservable } from 'redux-observable';
import { Action } from 'redux-actions';
import { INPUT_CHANGED } from 'actions/actionTypes';
import { textChanged } from 'actions/actionCreators';
import { MiddlewareAPI } from 'redux';
import { ApplicationState } from 'models/applicationState';
import { ScheduledEpic } from 'redux/observable/ScheduledEpic';

export const textChangedEpic: ScheduledEpic<Action<string>> = (action$: ActionsObservable<Action<string>>, store?: MiddlewareAPI<ApplicationState>, scheduler?: Scheduler) =>
    action$
        .filter((action: Action<string>) => action.type === INPUT_CHANGED)
        .map((action: Action<string>) => textChanged(action.payload || ''))
        .debounceTime(150, scheduler);