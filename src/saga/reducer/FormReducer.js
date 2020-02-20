/**
 * Created by liuxu on 2019-09-16 18:11:47
 * description: form表单的减速器
 */

import {FORM_LOAD_LANGUAGE_PAGE_DATA} from '../type/FormAction';

const formReducer = (state = {
    languagePageData: {data: [], pagination: {total: 0}, loading: false}
}, action) => {
    switch (action.type) {
        case FORM_LOAD_LANGUAGE_PAGE_DATA:
            return {
                ...state,
                languagePageData: action.payload,
            };
        default:
            return state;
    }
};

export {formReducer};