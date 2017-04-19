import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import { Action } from 'redux-actions';
import { INPUT_CHANGED } from 'actions/actionTypes';
import { textChanged } from 'actions/actionCreators';
import { ApplicationState } from 'models/applicationState';
import { ScheduledEpic } from 'redux/observable/ScheduledEpic';

export const textChangedEpic: ScheduledEpic<Action<string>, ApplicationState> = (action$, store?, scheduler?) =>
    action$
        .filter((action: Action<string>) => action.type === INPUT_CHANGED)
        .map((action: Action<string>) => textChanged(action.payload || ''))
        .debounceTime(150, scheduler);