/**
 * Created by liuxu on 2019-03-11 16:28:56
 * description: 导航的路由器
 * 暂停，暂时放置，目前不清楚有何种方案可以生成Route，所以暂时放置，手动添加对象
 */

import React from 'react';
import {Route} from 'react-router-dom';
import * as AllComponents from './AllComponents';

class NavigationRouter extends React.Component {
    constructor(props) {
        super(props);
        console.log('NavigationRouter is create!');
    }

    createRoute = (menus) => {
        let routeList = [];
        console.log(`查看数组的长度:`);
        console.log(routeList.length);
        menus.forEach(function (childrenMenu) {
            this.recursiveMenu(childrenMenu, routeList);
        });
        return routeList;
    };


    recursiveMenu = (menu, routeList) => {
        if (menu.component) {
            routeList.push(this.route(menu));
        }
        if (menu.children) {
            menu.children.forEach(function (childrenMenu) {
                this.recursiveMenu(childrenMenu, routeList);
            });
        }
    };

    route = (menu) => {
        const Component = AllComponents[menu.component];
        return (
            <Route
                path={menu.link}
                component={props => <Component {...props} />}
            />
        );
    };

    render() {
        const {menus} = this.props;
        return (
            <div>
                {this.createRoute(menus)}
            </div>
        );
    }
}

export default NavigationRouter;