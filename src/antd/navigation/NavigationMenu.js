/**
 * Created by liuxu on 2019-03-11 15:39:20
 * description: 导航菜单的使用，使用React-Router组件
 */

import React from 'react';
import {Menu, Icon} from 'antd';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import GeneralButton from '../general/GeneralButton';

const {SubMenu} = Menu;

class NavigationMenu extends React.Component {
    constructor(props) {
        super(props);
        console.log('NavigationMenu Component is created!');
    }

    /**
     * 利用后台返回的menu数据，填充成前端的菜单
     * @param menus
     */
    fillMenu = (menus) => {
        return menus.map(menu => menu.children ?
            <SubMenu key={menu.menuId} title={<span><Icon type={menu.menuType}/>{menu.menuName}</span>}>
                {this.fillMenu(menu.children)}
            </SubMenu> :
            <Menu.Item key={menu.menuId}>
                <Icon type={menu.menuType}/>
                <Link to={menu.link}>{menu.menuName}</Link>
            </Menu.Item>);
    };

    render() {
        const {menus} = this.props;
        return (
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                {this.fillMenu(menus)}
            </Menu>
        );
    }
}

export default NavigationMenu;