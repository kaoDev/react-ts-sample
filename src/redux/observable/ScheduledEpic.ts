import { ActionsObservable, Epic } from 'redux-observable';
import { MiddlewareAPI } from 'redux';
import { Scheduler } from 'rxjs/Scheduler';
import { Observable } from 'rxjs/Observable';

export interface ScheduledEpic<T> extends Epic<T> {
    (action$: ActionsObservable<T>, store?: MiddlewareAPI<any>, scheduler?: Scheduler): Observable<T>;
}