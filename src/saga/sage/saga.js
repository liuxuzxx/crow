/**
 * Created by liuxu on 2018-09-05 14:21:28
 * description: 创建saga的文件
 */
import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';
import {createLoadMenuAction, HOME_INDEX_ACTION_LOAD_MENU_ASYNC} from '../type/HomeIndexAction';
import {createLoadLanguagePageData, FORM_LOAD_LANGUAGE_PAGE_DATA_SYNC} from "../type/FormAction";
import {REMOTE_SERVER_URL} from "../../config/RemoteRestConfig";
import {
    createCutVideoLoad,
    CUT_VIDEO_LIST_LOAD_SYNC,
    VIDEO_FILE_LIST_LOAD,
    VIDEO_FILE_LIST_LOAD_SYNC
} from "../type/VideoAction";
import {
    STOCK_STOCK_HISTORY_DATA_LOAD,
    STOCK_STOCK_HISTORY_DATA_LOAD_SYNC,
    STOCK_STOCK_SEARCH_LOAD, STOCK_STOCK_SEARCH_LOAD_SYNC
} from "../type/StockAction";

export function* loadHomeMenuSync() {
    let payload = [
        {
            menuId: 1,
            menuName: '个人中心',
            menuType: 'user',
            link: '/crow/person/personal-center',
            component: '',
        },
        {
            menuId: 2,
            menuName: '布局',
            menuType: 'video-camera',
            children: [{
                menuId: 200,
                menuName: 'Button 按钮',
                menuType: 'video-camera',
                children: [
                    {
                        menuId: 20000,
                        menuName: '常规按钮',
                        menuType: 'video-camera',
                        link: '/crow/button/general-button',
                        component: 'GeneralButton',
                    },
                    {
                        menuId: 20001,
                        menuName: '搜索按钮',
                        menuType: 'video-camera',
                        link: '/crow/button/search-button',
                    },
                    {
                        menuId: 20002,
                        menuName: 'Echart探索',
                        menuType: 'video-camera',
                        link: '/crow/echarts/echart-component',
                    }
                ]
            }, {
                menuId: 201,
                menuName: 'Icon 图标',
                menuType: 'video-camera',
                children: []
            }, {
                menuId: 202,
                menuName: 'Typography 排版',
                menuType: 'video-camera',
                children: []
            }]
        },
        {
            menuId: 3,
            menuName: '导航',
            menuType: 'upload',
            children: []
        },
        {
            menuId: 4,
            menuName: '表单',
            menuType: 'upload',
            children: [
                {
                    menuId: 400,
                    menuName: '搜索表单',
                    menuType: 'video-camera',
                    link: '/crow/form/search-form',
                    component: 'SearchFormComponent',
                }
            ]
        },
        {
            menuId: 5,
            menuName: '哪吒脑海',
            menuType: 'video-camera',
            children: [
                {
                    menuId: 50001,
                    menuName: 'Video',
                    menuType: 'video-camera',
                    link: '/crow/video/video-files',
                },
                {
                    menuId: 50002,
                    menuName: 'Stock',
                    menuType: 'video-camera',
                    link: '/crow/stock/stock-history'
                }
            ]
        }
    ];
    yield put(createLoadMenuAction(payload));
}

export function* loadFormLanguageSync() {
    yield put(createLoadLanguagePageData({data: [], pagination: {total: 0}, loading: false}));
    let payload = {
        data: [{
            'language': 'Java',
            'detail': 'Java是一种面向对象的编程语言',
        }, {
            'language': 'C++',
            'detail': 'C++又叫CPP，就是C Plus Plus的意思',
        }, {
            'language': 'Python',
            'detail': '一种脚本胶水语言',
        }, {
            'language': 'JavaScript',
            'detail': '前端脚本语言',
        }, {
            'language': 'Go',
            'detail': '速度快，有可能替代Java的前景类语言',
        }],
        pagination: {total: 5},
        loading: false,
    };

    yield put(createLoadLanguagePageData(payload));
}

export function* loadVideoFilesSync() {
    let url = REMOTE_SERVER_URL + "/api/rattrap/video/video-files";
    let data = {};
    yield axios.get(url)
        .then(function (response) {
            data = response.data;
        });
    yield put({type: VIDEO_FILE_LIST_LOAD, payload: data});
}

export function* loadCutVideoFilesSync(param) {
    const {parentId} = param;
    let url = REMOTE_SERVER_URL + "/api/rattrap/video/cut-video/" + parentId + "/videos";
    let data = {};
    yield axios.get(url)
        .then(function (response) {
            data = response.data;
        });
    yield put(createCutVideoLoad(data));
}

export function* loadStockHistoryData(param) {
    const {stockCode} = param;
    let url = REMOTE_SERVER_URL + "/api/rattrap/stock/" + stockCode + "/history-data";
    let data = [];
    yield axios.get(url)
        .then(function (response) {
            data = response.data.data;
        });
    yield put({type: STOCK_STOCK_HISTORY_DATA_LOAD, payload: data});
}

export function* searchStock(param) {
    const {condition} = param;
    let url = REMOTE_SERVER_URL + "/api/rattrap/stock/stock?condition=" + condition;
    let data = [];
    yield axios.get(url)
        .then(function (response) {
            data = response.data.data;
        });
    yield put({type: STOCK_STOCK_SEARCH_LOAD, payload: data});
}

export default function* watchIncrementAsync() {
    yield takeLatest(HOME_INDEX_ACTION_LOAD_MENU_ASYNC, loadHomeMenuSync);
    yield takeLatest(FORM_LOAD_LANGUAGE_PAGE_DATA_SYNC, loadFormLanguageSync);
    yield takeLatest(VIDEO_FILE_LIST_LOAD_SYNC, loadVideoFilesSync);
    yield takeLatest(CUT_VIDEO_LIST_LOAD_SYNC, loadCutVideoFilesSync);
    yield takeLatest(STOCK_STOCK_HISTORY_DATA_LOAD_SYNC, loadStockHistoryData);
    yield takeLatest(STOCK_STOCK_SEARCH_LOAD_SYNC, searchStock);
}
