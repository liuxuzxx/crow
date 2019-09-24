/**
 * Created by liuxu on 2018-08-04 23:29:48
 * description: 定义的store,应该是负责存储全应用的state数据信息
 */
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index'
import thunkMiddleware from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;