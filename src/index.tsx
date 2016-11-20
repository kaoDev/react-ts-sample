import 'babel-polyfill';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { App } from 'containers/app';
import { createApplicationStore } from 'store/store'

const rootEl = document.getElementById('root');
ReactDOM.render((
    <Provider store={createApplicationStore()}>
        <AppContainer>
            <App />
        </AppContainer>
    </Provider>
),
    rootEl
);
// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('containers/app', () => {
        const NextApp = require('containers/app').App;
        ReactDOM.render((
            <Provider store={createApplicationStore()}>
                <AppContainer>
                    <NextApp />
                </AppContainer>
            </Provider>
        ),
            rootEl
        );
    });

    module.hot.accept();
}