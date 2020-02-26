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
import {Divider, Icon, Row, message, Col} from "antd";
import axios from 'axios';


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

    cutVideoInformation = {
        startTime: null,
        endTime: null,
        parentId: -1,
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
        this.player.seekTo(currentPlayTime);
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
        console.log(`查看时间:${this.player.getCurrentTime()}`);
    };

    handleProgress = (state) => {
        if (!this.state.seeking) {
            this.setState(state);
        }
    };

    handleDuration = (duration) => {
        this.setState({duration});
    };

    handleScissorEvent = () => {
        let currentTime = this.player.getCurrentTime();
        message.success(`开始剪切视频了!开始时间为:${currentTime}`);
        this.cutVideoInformation = {...this.cutVideoInformation, startTime: currentTime};
    };

    handleCheckEvent = () => {
        const {playVideoFile} = this.props;
        const {videoId} = playVideoFile;
        let currentTime = this.player.getCurrentTime();
        message.success(`剪切视频完成!结束时间为:${currentTime}`);
        this.cutVideoInformation = {...this.cutVideoInformation, endTime: currentTime, parentId: videoId};
        message.success(`提交的对象内容是:${JSON.stringify(this.cutVideoInformation)}`);
        let url = REMOTE_SERVER_URL + "/api/rattrap/video/cut-video";
        axios.post(url, this.cutVideoInformation)
            .then((response) => {
                console.log(`${JSON.stringify(response)}  查看回复的信息`);
            });
    };

    render() {
        const {playbackRate} = this.state;
        const {playVideoFile} = this.props;
        const {videoId} = playVideoFile;
        let url = REMOTE_SERVER_URL + "/api/rattrap/video/" + videoId + "/play-video";
        return (
            <div>
                <Row gutter={[16, 16]}>
                    <Row span={20}>
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
                    </Row>
                    <Divider/>
                    <Row span={4}>
                        <Col span={3}>
                            <Icon
                                type="scissor"
                                twoToneColor="#52c41a"
                                style={{fontSize: '30px', color: '#52c41a'}}
                                onClick={this.handleScissorEvent}
                            />
                        </Col>
                        <Col span={4}>
                            <Icon type="check-circle"
                                  twoToneColor="#52c41a"
                                  style={{fontSize: '30px', color: '#ff0000'}}
                                  onClick={this.handleCheckEvent}/>
                        </Col>
                    </Row>
                </Row>
            </div>
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
