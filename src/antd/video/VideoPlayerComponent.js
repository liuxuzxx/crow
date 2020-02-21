/**
 * Created by liuxu
 * Date: 2020-02-20 19:55:28
 * 视频播放组件的实验
 */

import React from "react";
import {connect} from "react-redux";
import ReactPlayer from "react-player";

class VideoPlayerComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log('VideoPlayerComponent Component is created!');
    }

    render() {
        return (
            <ReactPlayer
                className='react-player'
                url='/home/liuxu/Videos/01.mkv'
                width='100%'
                height='100%'
            />
        );
    }
}

export default connect(null, null)(VideoPlayerComponent);