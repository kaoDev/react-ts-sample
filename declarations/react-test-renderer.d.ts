// Type definitions for react-test-renderer 15.5
// Project: https://facebook.github.io/react/
// Definitions by: Arvitaly <https://github.com/arvitaly>, Lochbrunner <https://github.com/lochbrunner>, Lochbrunner <https://github.com/lochbrunner>, John Reilly <https://github.com/johnnyreilly/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { ReactElement, ReactInstance } from 'react'

type TestRendererOptions = {
  createNodeMock: (element: ReactElement<any>) => any
}

type ReactTestRendererJSON = {
  type: string
  props: { [propName: string]: any }
  children: null | Array<ReactTestRendererNode>
  $$typeof?: Symbol // Optional because we add it with defineProperty().
}
type ReactTestRendererNode = ReactTestRendererJSON | string

type Container = {
  children: Array<Instance | TextInstance>
  createNodeMock: Function
  tag: 'CONTAINER'
}

type Props = Object
type Instance = {
  type: string
  props: Object
  children: Array<Instance | TextInstance>
  rootContainerInstance: Container
  tag: 'INSTANCE'
}

type TextInstance = {
  text: string
  tag: 'TEXT'
}

type FindOptions = {
  // performs a "greedy" search: if a matching node is found, will continue
  // to search within the matching node's children. (default: true)
  deep: boolean
}

export type Predicate = (node: ReactTestInstance<any>) => boolean | undefined

export interface ReactTestInstance<P> {
  toJSON(): ReactTestRendererJSON
  unmount(nextElement?: ReactElement<P>): void
  update(nextElement: ReactElement<P>): void
  getInstance(): ReactInstance

  type(): any

  props(): P

  parent(): ReactTestInstance<any> | undefined

  children(): Array<ReactTestInstance<any> | string>
  // Custom search functions
  find(predicate: Predicate): ReactTestInstance<any>

  findByType(type: any): ReactTestInstance<any>

  findByProps(props: Object): ReactTestInstance<any>

  findAll(
    predicate: Predicate,
    options?: FindOptions
  ): Array<ReactTestInstance<any>>

  findAllByType(type: any, options?: FindOptions): Array<ReactTestInstance<any>>

  findAllByProps(
    props: Object,
    options?: FindOptions
  ): Array<ReactTestInstance<any>>
}
// https://github.com/facebook/react/blob/master/src/renderers/testing/ReactTestMount.js#L155
export function create<T>(
  nextElement: ReactElement<T>,
  options?: TestRendererOptions
): ReactTestInstance<T>
