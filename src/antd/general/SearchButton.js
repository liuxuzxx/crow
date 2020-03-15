/**
 * Created by liuxu on 2019-03-12 10:01:29
 * description: AntD的搜索按钮,和普通的按钮区别就是，icon不一样子
 */
import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
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
                    <Col className="gutter-row" span={3}>
                        <Button type="primary" shape="circle" icon={<SearchOutlined />}/>
                    </Col>
                    <Col className="gutter-row" span={3}>
                        <Button type="primary" icon={<SearchOutlined />}>Search</Button>
                    </Col>
                    <Col className="gutter-row" span={3}>
                        <Button shape="circle" icon={<SearchOutlined />}/>
                    </Col>
                    <Col className="gutter-row" span={3}>
                        <Button icon={<SearchOutlined />}>Search</Button>
                    </Col>
                    <Col className={'gutter-row'} span={3}>
                        <Button shape="circle" icon={<SearchOutlined />}/>
                    </Col>
                    <Col className={'gutter-row'} span={3}>
                        <Button icon={<SearchOutlined />} shape={'round'}>Search</Button>
                    </Col>
                    <Col className={'gutter-row'} span={3}>
                        <Button type="dashed" shape="circle" icon={<SearchOutlined />}/>
                    </Col>
                    <Col className={'gutter-row'} span={3}>
                        <Button type="dashed" icon={<SearchOutlined />}>Search</Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default SearchButton;