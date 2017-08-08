import { MiddlewareAPI } from 'redux'
import { ActionsObservable } from 'redux-observable'
import { ScheduledEpic } from 'redux/observable/ScheduledEpic'
import { TestScheduler } from 'rxjs/testing/TestScheduler'

export type MarbleValues = {
  marbles: string
  values?: any
  error?: any
}

export const expectEpic = <T>(
  epic: ScheduledEpic<T, any>,
  input: MarbleValues,
  output: MarbleValues,
  store: MiddlewareAPI<any>
) => {
  const testScheduler = new TestScheduler((actual, expected) => {
    return expect(actual).toEqual(expected)
  })

  const action$ = new ActionsObservable<T>(
    testScheduler.createHotObservable(input.marbles, input.values, input.error)
  )

  const test$ = epic(action$, store, testScheduler)

  test$.subscribe()

  testScheduler
    .expectObservable(test$)
    .toBe(output.marbles, output.values, output.error)

  testScheduler.flush()
}

/**
 * creates a string of '-' to represent the wished number of time frames
 */
export const f = (frames: number) => {
  return new Array(frames + 1).join('-')
}
