import { watchTextChange } from './textChange';

export function* rootSaga() {
    yield [
        watchTextChange()
    ];
}