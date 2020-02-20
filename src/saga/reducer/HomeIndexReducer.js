/**
 * Created by liuxu on 2019-03-10 21:37:18
 * description: 首页的减速器
 */
import {HOME_INDEX_ACTION_LOAD_MENU} from '../type/HomeIndexAction';

const homeMenuReducer = (state = {menus: []}, action) => {
    console.log('查看state',state);
    console.log('查看action',action);
    switch (action.type) {
        case HOME_INDEX_ACTION_LOAD_MENU:
            return {
                ...state,
                menus: action.payload
            };
        default:
            return state;
    }
};

export {homeMenuReducer};