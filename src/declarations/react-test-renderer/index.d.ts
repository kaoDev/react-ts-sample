declare module 'react-test-renderer' {
    import * as React from 'react'
    import { ReactElement } from 'react'

    export type TestRendererOptions = {
        createNodeMock: (element: ReactElement<any>) => any,
    }

    export interface ReactTestInstance {
        getInstance: () => ReactElement<any>
        update: (nextElement: ReactElement<any>) => void
        unmount: (nextElement: ReactElement<any>) => void
        toJSON: () => ReactElement<any> | null
    }

    export interface IRenderer {
        create: (
            nextElement: ReactElement<any>,
            options?: TestRendererOptions,
        ) => ReactTestInstance
        unstable_batchedUpdates: (callback: any, a: any, b: any, c: any, d: any, e: any) => any
    }

    const ReactTestRenderer: IRenderer
    export default ReactTestRenderer
}