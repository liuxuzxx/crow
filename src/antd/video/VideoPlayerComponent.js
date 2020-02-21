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

    render() {
        let url = REMOTE_SERVER_URL + "/v1/api/rattrap/video/micro-video";
        return (
            <ReactPlayer
                className='react-player'
                url={url}
                width='50%'
                height='50%'
                playing={false}
                playbackRate={10.0}
                controls={true}
            />
        );
    }
}

export default connect(null, null)(VideoPlayerComponent);
