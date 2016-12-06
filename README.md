![build status](https://travis-ci.org/KalleOtt/react-ts-sample.svg?branch=master)
[![Code Climate](https://codeclimate.com/github/KalleOtt/react-ts-sample/badges/gpa.svg)](https://codeclimate.com/github/KalleOtt/react-ts-sample)
[![codecov.io](https://codecov.io/github/KalleOtt/react-ts-sample/coverage.svg?branch=master)](https://codecov.io/gh/KalleOtt/react-ts-sample?branch=master)

### Sample techstack for [React](https://facebook.github.io/react/), [redux](redux.js.org), [redux-saga](https://github.com/yelouafi/redux-saga)/[redux-observable](https://redux-observable.js.org/), [TypeScript](https://github.com/Microsoft/TypeScript) and [webpack](https://github.com/webpack/webpack)

As a usecase here is an simple markdown writer implementation, 
to bring in an async scenario the user input is debounced.

For async actions there is an implementation with redux-saga and redux-observable, 
they exist side by side and can be activated in the code. 
To Choose the wanted implementation change the import of 
```createApplicationStore``` to the wanted technology. At the moment there are 2 
stores available:

1. [```reduxObservableStore.ts```](src/store/reduxObservableStore.ts)
2. [```reduxSagaStore.ts```](src/store/reduxSagaStore.ts)


startup sample:

```
npm install
npm start
```
