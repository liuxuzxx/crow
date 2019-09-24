/**
 * Created by liuxu on 2018-09-05 14:01:46
 * description: store的生产单独放置在一个文件里面
 */

import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducer/reducer';
import saga from '../sage/saga';

const sageMiddleware = createSagaMiddleware();
const store = createStore(rootReducer,applyMiddleware(sageMiddleware));
sageMiddleware.run(saga);
export default store;
