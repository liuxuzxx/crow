/**
 * 生成App组件对象，从0开始进行试验和测试
 */

import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import SelfDefineTriggerLayout from './antd/layout/SelfDefineTriggerLayout';

class App extends React.Component {
    constructor(props) {
        super(props);
        console.log('App组件生成了！');
    }

    render() {
        return (
            <SelfDefineTriggerLayout/>
        );
    }
}

export default connect(null,null)(App);
