/**
 * @author 刘旭
 * @date 2020-02-21 17:22:45
 * 视频文件展示组件
 */

import React from "react";
import {connect} from "react-redux";
import {VIDEO_FILE_LIST_LOAD_SYNC} from "../../saga/type/VideoAction";


class VideoFileShowComponent extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {loadVideoFiles} = this.props;
        loadVideoFiles();
    }

    render() {

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
