/**
 * Created by liuxu
 * Date: 2020-02-22 20:34:19
 * 展示视频文件的组件
 */
import React from "react";
import {connect} from 'react-redux';
import {createLoadVideoFilesSync, createPlayVideoAction, VIDEO_FILE_LIST_LOAD_SYNC} from "../../saga/type/VideoAction";
import {Card, List} from "antd";

class VideoFilesShowComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {loadVideoFiles} = this.props;
        loadVideoFiles();
    }

    handleCardClick = (videoFile) => {
        const {playVideo} = this.props;
        playVideo(videoFile);
    };

    render() {
        const {videoFiles} = this.props;
        return (
            <List
                grid={{gutter: 16, column: 4}}
                dataSource={videoFiles.data}
                renderItem={item => (
                    <List.Item>
                        <Card
                            title={item.fileName}
                            onClick={() => this.handleCardClick(item)}>
                            {item.fileName}
                        </Card>
                    </List.Item>
                )}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    videoFiles: state.video.videoFiles,
});

const mapDispatchToProps = (dispatch) => {
    return {
        loadVideoFiles: () => {
            dispatch(createLoadVideoFilesSync());
        },
        playVideo: (videoFile) => {
            dispatch(createPlayVideoAction(videoFile));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoFilesShowComponent);