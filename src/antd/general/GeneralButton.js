/**
 * Created by liuxu on 2019-03-10 15:02:42
 * description: 展示AntD的各种按钮的样式和基本使用 通用的一些组件
 */
import { UploadOutlined } from '@ant-design/icons';

import { Button, message, Row, Col, Upload } from 'antd';
import React from "react";
import {connect} from 'react-redux';

class GeneralButton extends React.Component {


    constructor(props) {
        super(props);

        console.log('创建了GlobalAllButton组件对象');
    }

    primaryClickHandler = () => {
        message.info('点击了primary格式的按钮!');
    };

    defaultClickHandler = () => {
        message.info('点击了default格式的按钮!');
    };

    dashedClickHandler = () => {
        message.info('点击了dashed虚线格式的按钮!');
    };

    dangerClickHandler = () => {
        message.warn('点击了danger危险操作的按钮');
    };

    render() {
        const props = {
            action: 'http://192.168.31.187:19006/app/api/rest/video/upload',
            onChange({ file, fileList }) {
                if (file.status !== 'uploading') {
                    console.log(file, fileList);
                }
            },
            defaultFileList: [

            ],
        };
        return (
            <div className="gutter-example">
                <Row gutter={16}>
                    <Col className="gutter-row" span={6}>
                        <Button type={'primary'} onClick={this.primaryClickHandler}>主要颜色Primary</Button>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <Button onClick={this.defaultClickHandler}>默认Default</Button>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <Button type={'dashed'} onClick={this.dashedClickHandler}>虚线按钮</Button>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <Button type={'danger'} onClick={this.dangerClickHandler}>危险操作</Button>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col className={'gutter-row'} span={6}>
                        <Button type={'danger'} disabled={true}>一个禁止操作的危险按钮</Button>
                    </Col>
                    <Col className={'gutter-row'} span={6}>
                        <Upload {...props}>
                            <Button>
                                <UploadOutlined /> Upload
                            </Button>
                        </Upload>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default connect(null, null)(GeneralButton);

