/**
 * Created by liuxu on 2018-08-04 23:26:59
 * description: 跟着redux的官网实验一下react-redux框架的作用
 * 尝试说明一下state的取用过程：首先是在需要的组件上面使用connect函数，这样子这个组件就和Redux联合在一起了。
 * 然后需要属性的时候会从store里面的state当中取，也就是store统一管理
 */
import {combineReducers} from 'redux';
import {ADD_ARTICLE, ADD_COUNTER, FETCH_CLUES} from '../constants/action-type';

const initialArticle = {
    items: []
};

const articleReducer = (state = initialArticle, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return {...state, items: [...state.items, action.payload]};
        default:
            return state;
    }
};

const initialCounter = {
    number: 0
};
const counterReducer = (state = initialCounter, action) => {
    switch (action.type) {
        case ADD_COUNTER:
            return {...state, number: state.number + 1};
        default:
            return state;
    }
};

const initialClues = {
    clues: []
};
const cluesReducer = (state = initialClues, action) => {
    switch (action.type) {
        case FETCH_CLUES:
            return {...state, clues: [...action.payload]};
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    article: articleReducer,
    counter: counterReducer,
    clues:cluesReducer
});

export default rootReducer;