/**
 * Created by liuxu on 2019-03-12 10:01:29
 * description: AntD的搜索按钮,和普通的按钮区别就是，icon不一样子
 */
import React from 'react';
import {Row, Col, Button} from 'antd';

class SearchButton extends React.Component {
    constructor(props) {
        super(props);
        console.log(`SearchButton Component is created!`);
    }

    render() {
        return (
            <div className="gutter-example">
                <Row>

                </Row>
            </div>
        );
    }
}

export default SearchButton;
