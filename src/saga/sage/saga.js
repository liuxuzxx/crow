/**
 * Created by liuxu on 2018-09-05 14:21:28
 * description: 创建saga的文件
 */

import {takeEvery} from 'redux-saga';
import {put, fork} from 'redux-saga/effects';
import {createLoadMenuAction, HOME_INDEX_ACTION_LOAD_MENU_ASYNC} from '../type/HomeIndexAction';

import axios from 'axios';
import {createLoadLanguagePageData, FORM_LOAD_LANGUAGE_PAGE_DATA_SYNC} from "../type/FormAction";

export function* loadHomeMenuSync() {
    console.log(`Async加载异步数据Menu信息!`);
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
        }
    ];
    yield put(createLoadMenuAction(payload));
}

export function* loadFormLanguageSync() {
    yield put(createLoadLanguagePageData({data: [], pagination: {total: 0}, loading: false}));
    let payload = {
        data:[{
            'language':'Java',
            'detail':'Java是一种面向对象的编程语言',
        },{
            'language':'C++',
            'detail':'C++又叫CPP，就是C Plus Plus的意思',
        },{
            'language':'Python',
            'detail':'一种脚本胶水语言',
        },{
            'language':'JavaScript',
            'detail':'前端脚本语言',
        },{
            'language':'Go',
            'detail':'速度快，有可能替代Java的前景类语言',
        }],
        pagination:{total:5},
        loading:false,
    };

    yield put(createLoadLanguagePageData(payload));
}

// Our watcher Saga: 在每个 INCREMENT_ASYNC action 调用后，派生一个新的 incrementAsync 任务
export default function* watchIncrementAsync() {
    yield takeEvery(HOME_INDEX_ACTION_LOAD_MENU_ASYNC, loadHomeMenuSync);
    yield takeEvery(FORM_LOAD_LANGUAGE_PAGE_DATA_SYNC, loadFormLanguageSync);
}