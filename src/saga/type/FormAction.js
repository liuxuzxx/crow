/**
 * Created by liuxu on 2019-09-16 18:08:54
 * description: 有关于Form表单的模拟数据
 */
const FORM_LOAD_LANGUAGE_PAGE_DATA = "form.load.language.page.data.Form_Load_Language_Page_Data";
const FORM_LOAD_LANGUAGE_PAGE_DATA_SYNC = "form.load.language.page.data.Form_Load_Language_Page_Data_Sync";

const createLoadLanguagePageData = (payload) => {
    return {type: FORM_LOAD_LANGUAGE_PAGE_DATA, payload: payload};
};

const createLoadLanguagePageDataSync = () => {
    return {type: FORM_LOAD_LANGUAGE_PAGE_DATA_SYNC};
};

export {
    FORM_LOAD_LANGUAGE_PAGE_DATA,
    FORM_LOAD_LANGUAGE_PAGE_DATA_SYNC,
    createLoadLanguagePageData,
    createLoadLanguagePageDataSync,
};