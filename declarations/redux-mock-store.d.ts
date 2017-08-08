// Type definitions for Redux Mock Store v0.0.6
// Project: https://github.com/arnaudbenard/redux-mock-store
// Definitions by: Marian Palkus <https://github.com/MarianPalkus>, Cap3 <http://www.cap3.de>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference types="redux" />
import * as Redux from 'redux'
import { Unsubscribe, Reducer } from 'redux'

declare module 'redux-mock-store' {
  export default function createMockStore<T>(
    middlewares?: Redux.Middleware[]
  ): mockStore<T>

  export type mockStore<T> = (state?: T) => IStore<T>

  export interface IStore<T> {
    dispatch(action: any): any
    getState(): T
    getActions(): any[]
    clearActions(): void
    subscribe(listener: () => void): Unsubscribe
    replaceReducer(nextReducer: Reducer<T>): void
  }
}
