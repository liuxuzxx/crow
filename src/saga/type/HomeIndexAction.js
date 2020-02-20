/**
 * Created by liuxu on 2019-03-10 21:34:22
 * description: 首页的动作类型
 */
const HOME_INDEX_ACTION_LOAD_MENU_ASYNC = 'home.index.action.LoadMenuAsync';
const HOME_INDEX_ACTION_LOAD_MENU = 'home.index.action.LoadMenu';

const createLoadMenuAction = (payload) => {
    return {type: HOME_INDEX_ACTION_LOAD_MENU, payload: payload};
};

const createLoadMenuAsyncAction = () => {
    return {type: HOME_INDEX_ACTION_LOAD_MENU_ASYNC};
};

export {
    HOME_INDEX_ACTION_LOAD_MENU_ASYNC,
    HOME_INDEX_ACTION_LOAD_MENU,
    createLoadMenuAction,
    createLoadMenuAsyncAction,
};