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
  // Custom search functions
  find(predicate: Predicate): React.ReactElement<any>

  findByType<P>(type: React.ComponentType<P>): React.ReactElement<P>

  findByProps(props: Object): ReactTestInstance<any>

  findAll(
    predicate: Predicate,
    options?: FindOptions
  ): Array<React.ReactElement<any>>

  findAllByType<P>(
    type: React.ComponentType<P>,
    options?: FindOptions
  ): Array<React.ReactElement<P>>

  findAllByProps(
    props: Object,
    options?: FindOptions
  ): Array<React.ReactElement<any>>
}

export type RenderedComponent<P> = {
  root: ReactTestInstance<P>

  toJSON(): ReactTestRendererJSON
  unmount(): void
  update(nextElement: ReactElement<P>): void
  getInstance(): ReactInstance
}

// https://github.com/facebook/react/blob/master/src/renderers/testing/ReactTestMount.js#L155
export function create<T>(
  nextElement: ReactElement<T>,
  options?: TestRendererOptions
): RenderedComponent<T>
