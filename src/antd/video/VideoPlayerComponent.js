/**
 * Created by liuxu
 * Date: 2020-02-20 19:55:28
 * 视频播放组件的实验
 */

import React from "react";
import {connect} from "react-redux";
import ReactPlayer from "react-player";
import {REMOTE_SERVER_URL} from "../../config/RemoteRestConfig";
import keydown from "react-keydown";


class VideoPlayerComponent extends React.Component {

    config = {
        playbackRateMax: 15,
        playbackRateMin: 1,
    };

    state = {
        playbackRate: 1,
        volume: 0.8,
        played: 0,
        loaded: 0,
        duration: 0,
    };

    ref = player => {
        this.player = player
    };

    @keydown("ctrl+up")
    handleCtrlUpEvent() {
        const {playbackRate} = this.state;
        if (playbackRate < this.config.playbackRateMax) {
            this.setState({
                playbackRate: playbackRate + 1,
            });
        }
    }

    @keydown("ctrl+right")
    handleCtrlRightEvent() {
        console.log(`选择了加速视频10秒钟...`);
        this.setState({seeking: false});
        let currentPlayTime = this.player.getCurrentTime() + 10;
        this.player.seekTo(parseFloat("0.669"));
    }

    @keydown('ctrl+down')
    handleCtrlDownEvent() {
        const {playbackRate} = this.state;
        if (playbackRate > this.config.playbackRateMin) {
            this.setState({
                playbackRate: playbackRate - 1,
            });
        }
    }

    @keydown("ctrl+left")
    handleCtrlLeftEvent() {
        let currentPlayTime = this.player.getCurrentTime() - 10;
        this.player.seekTo(currentPlayTime);
    }

    handlePause = () => {
        console.log('onPause');
        console.log(`查看时间:${this.player.getCurrentTime()}`)
    };

    handleProgress = (state) => {
        console.log(`调用了onProgress方法...${JSON.stringify(state)} ${this.player.getCurrentTime()}`);
        if (!this.state.seeking) {
            this.setState(state);
        }
    };

    handleDuration = (duration) => {
        console.log('onDuration', duration)
        this.setState({ duration })
    };

    render() {
        const {playbackRate} = this.state;
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
                playbackRate={playbackRate}
                controls={true}
                onPause={this.handlePause}
                onProgress={this.handleProgress}
                onDuration={this.handleDuration}
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

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayerComponent);
