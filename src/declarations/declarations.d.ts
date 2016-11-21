declare var module: any
declare module 'react-hot-loader'

declare var require: {
    (path: string): any
    <T>(path: string): T
    (paths: string[], callback: (...modules: any[]) => void): void
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void
}

interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
}

