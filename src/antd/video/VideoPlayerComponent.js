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
import {Divider, Icon, Row, message, Col, Modal} from "antd";
import axios from 'axios';
import {CUT_VIDEO_LIST_LOAD_SYNC} from "../../saga/type/VideoAction";

const {confirm} = Modal;

class VideoPlayerComponent extends React.Component {

    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
    }

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
        this.player = player;
    };

    progressRef = progress => {
        this.progress = progress;
        this.progress.addEventListener("mousemove", function (event) {
            console.log(event.offsetX);
        });
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
        this.setState({seeking: false});
        let currentPlayTime = this.player.getCurrentTime() + 1;
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
        let currentPlayTime = this.player.getCurrentTime() - 1;
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
        this.cutVideoInformation = {...this.cutVideoInformation, startTime: JSON.stringify(currentTime)};
    };

    handleCheckEvent = () => {
        const {playVideoFile, loadCutVideoFiles} = this.props;
        const {videoId, fileName} = playVideoFile;
        let currentTime = this.player.getCurrentTime();
        this.cutVideoInformation = {
            ...this.cutVideoInformation,
            endTime: JSON.stringify(currentTime),
            parentId: videoId
        };
        let tempCutVideoInformation = this.cutVideoInformation;

        let confirmContext = <div>
            <p>{`原始视频名字：${fileName}`}</p>
            <p>{`时       间:${tempCutVideoInformation.startTime}---${tempCutVideoInformation.endTime}`}</p>
        </div>;

        confirm({
            title: '您是否剪切这个视频?',
            content: confirmContext,
            onOk() {
                let url = REMOTE_SERVER_URL + "/api/rattrap/video/cut-video";
                axios.post(url, tempCutVideoInformation)
                    .then((response) => {
                        message.success('截取视频成功!');
                        loadCutVideoFiles(videoId);
                    });
            },
            onCancel() {
                message.warn(`您取消了这次裁剪活动!`)
            },
        });
    };

    handleMouseMove(event) {
        console.log(event);
    }

    render() {
        const {playbackRate} = this.state;
        const {playVideoFile} = this.props;
        const {videoId} = playVideoFile;

        let url = REMOTE_SERVER_URL + "/api/rattrap/video/video-file/" + 1 + "/play-video";
        return (
            <div>
                <Row gutter={[16, 16]}>
                    <Row span={18}>
                        <ReactPlayer
                            className='react-player'
                            ref={this.ref}
                            url={url}
                            width='50%'
                            height='50%'
                            playing={false}
                            progressInterval={10}
                            playbackRate={playbackRate}
                            controls={true}
                            onPause={this.handlePause}
                            onProgress={this.handleProgress}
                            onDuration={this.handleDuration}
                        />
                    </Row>
                    <div style={{width: 625, height: 10, backgroundColor: '#ff0000', marginLeft: 15}}
                         ref={this.progressRef}/>
                    <Divider/>
                    <Row span={3}>
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
                    <Divider/>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    playVideoFile: state.video.playVideoFile,
});

const mapDispatchToProps = (dispatch) => {
    return {
        loadCutVideoFiles: (parentId) => {
            dispatch({type: CUT_VIDEO_LIST_LOAD_SYNC, parentId: parentId});
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayerComponent);
