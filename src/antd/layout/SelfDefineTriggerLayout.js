/**
 * Created by liuxu on 2019-03-10 20:52:23
 * description: 自定义触发器类型的布局
 */
import React from 'react';
import {Layout, Icon} from 'antd';
import {connect} from 'react-redux';
import {createLoadMenuAsyncAction} from '../../saga/type/HomeIndexAction';
import NavigationMenu from '../navigation/NavigationMenu';
import {GeneralButton, SearchButton, SearchFormComponent, VideoPlayerComponent} from '../navigation/AllComponents';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import EchartComponent from "../echart/EchartComponent";

const {Header, Sider, Content} = Layout;

class SelfDefineTriggerLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        };
        console.log(`SelfDefineTriggerLayout创建了`);
    }

    componentDidMount() {
        const {loadMenu} = this.props;
        loadMenu();
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        const {menus} = this.props;
        return (
            <Router>
                <Layout>
                    <Sider
                        trigger={null}
                        collapsible
                        collapsed={this.state.collapsed}
                    >
                        <div className="logo"/>
                        <NavigationMenu menus={menus}/>
                    </Sider>
                    <Layout>
                        <Header style={{background: '#fff', padding: 0}}>
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />
                        </Header>
                        <Content style={{
                            margin: '24px 16px', padding: 24, background: '#fff', minHeight: 800,
                        }}
                        >
                            <Route path="/crow/button/general-button" component={GeneralButton}/>
                            <Route path="/crow/button/search-button" component={SearchButton}/>
                            <Route path={"/crow/echarts/echart-component"} component={EchartComponent}/>
                            <Route path={"/crow/form/search-form"} component={SearchFormComponent}/>
                            <Route path={"/crow/video/video-player"} component={VideoPlayerComponent}/>
                        </Content>
                    </Layout>
                </Layout>
            </Router>
        );
    }

}

const mapStateToProps = (state) => {
    return {menus: state.home.menus};
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadMenu: () => {
            dispatch(createLoadMenuAsyncAction());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelfDefineTriggerLayout);