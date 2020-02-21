/**
 * @author 刘旭
 * @date 2020-02-21 17:22:45
 * 视频文件展示组件
 */

import React from "react";
import {connect} from "react-redux";
import {VIDEO_FILE_LIST_LOAD_SYNC} from "../../saga/type/VideoAction";
import {List} from "antd";


class VideoFileShowComponent extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {loadVideoFiles} = this.props;
        loadVideoFiles();
    }

    render() {
        const {videoFiles} = this.props;
        console.log(videoFiles);
        return (
            <div>
                <List
                    size="large"
                    header={<div>头部信息</div>}
                    footer={<div>尾部信息</div>}
                    bordered
                    dataSource={videoFiles.data}
                    renderItem={item => <List.Item>{item.FileName}</List.Item>}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    videoFiles: state.video.videoFiles,
});

const mapDispatchToProps = (dispatch) => {
    return {
        loadVideoFiles: () => {
            dispatch({type: VIDEO_FILE_LIST_LOAD_SYNC});
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoFileShowComponent);
