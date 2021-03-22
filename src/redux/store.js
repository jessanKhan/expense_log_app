import {createStore, applyMiddleware} from 'redux';

import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

// import combinereducer from '../reducers';
import rootSaga from './rootSaga';
import rootReducer from './rootReducer';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

// const store = createStore(rootReducer, applyMiddleware(...middleware));
const store = createStore(rootReducer);

// sagaMiddleware.run(rootSaga);

export default store;
