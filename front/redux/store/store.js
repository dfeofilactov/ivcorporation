import {
    createStore,
    applyMiddleware,
} from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga';
import reducer from '../reducer/reducer';

const sagaMiddleware = createSagaMiddleware();

const logger = createLogger({
    collapsed: true,
    //
});

console.log(process.env.NODE_ENV === 'PRODUCTION');

const store = createStore(
    reducer,
    process.env.NODE_ENV === 'PRODUCTION' ?
        applyMiddleware(sagaMiddleware) :
        applyMiddleware(logger, sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
