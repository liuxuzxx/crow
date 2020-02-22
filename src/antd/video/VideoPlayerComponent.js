/**
 * Created by liuxu
 * Date: 2020-02-20 19:55:28
 * 视频播放组件的实验
 */

import React from "react";
import {connect} from "react-redux";
import ReactPlayer from "react-player";
import {REMOTE_SERVER_URL} from "../../config/RemoteRestConfig";

class VideoPlayerComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log('VideoPlayerComponent Component is created!');
    }

    ref = player => {
        this.player = player
    };

    handlePause = () => {
        console.log('onPause')
        console.log(`查看时间:${this.player.getCurrentTime()}`)
    };

    render() {
        const {playVideoFile} = this.props;
        const {videoId} = playVideoFile;
        let url = REMOTE_SERVER_URL + "/api/rattrap/video/" + videoId + "/play-video";
        return (
            <ReactPlayer
                className='react-player'
                ref={this.ref}
                url={url}
                width='100%'
                height='100%'
                playing={true}
                playbackRate={1.0}
                controls={true}
                onPause={this.handlePause}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    playVideoFile: state.video.playVideoFile,
});

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, null)(VideoPlayerComponent);
