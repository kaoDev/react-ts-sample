import { ActionsObservable } from 'redux-observable'
import { MiddlewareAPI } from 'redux'
import { Scheduler } from 'rxjs/Scheduler'
import { Observable } from 'rxjs/Observable'

export type ScheduledEpic<T, S> = (
  action$: ActionsObservable<T>,
  store?: MiddlewareAPI<S>,
  scheduler?: Scheduler
) => Observable<T>
