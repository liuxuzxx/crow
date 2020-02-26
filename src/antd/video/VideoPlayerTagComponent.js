/**
 * @author 刘旭
 * @date 2020-02-21 17:22:45
 * 视频文件展示组件
 */

import React from "react";
import {connect} from "react-redux";
import {Row, Col, Divider} from "antd";
import VideoPlayerComponent from "./VideoPlayerComponent";
import VideoFilesShowComponent from "./VideoFilesShowComponent";


class VideoPlayerTagComponent extends React.Component {

    render() {
        return (
            <div>
                <Row gutter={[16, 16]}>
                    <Col span={20}>
                        <Row gutter={[16, 16]}>
                            <Col span={24}>
                                <VideoPlayerComponent/>
                            </Col>
                        </Row>
                        <Divider/>
                        <Row gutter={[16, 16]}>
                            <Col span={24}>
                                <VideoFilesShowComponent/>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={4}>

                    </Col>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayerTagComponent);
