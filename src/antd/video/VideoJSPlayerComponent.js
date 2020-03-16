/**
 * Created by liuxu
 * Date: 2020-03-15 18:26:52
 * 使用video.js创建的视频播放器
 */

import React from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import {REMOTE_SERVER_URL} from "../../config/RemoteRestConfig";
import vttThumbnails from "videojs-vtt-thumbnails";

class VideoJSPlayerComponent extends React.Component {

    constructor(props) {
        super(props);
        this.defaultProperties = {
            autoplay: true,
            controls: true,
            playbackRates: [0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0, 10.0],
            plugins: {
                vttThumbnails: {
                    src: REMOTE_SERVER_URL + "/api/rattrap/video/video-file/" + 1 + "/vtt-file",
                    width: 120,
                    height: 90,
                },
            },
        };
    }

    componentDidMount() {
        videojs.registerPlugin('vttThumbnails', vttThumbnails);
        let properties = {...this.props, ...this.defaultProperties};
        this.player = videojs(this.videoNode, properties, function onPlayerReady() {
            console.log(`准备好播放视频了!!!!!!`);
        });
    }

    componentWillUnmount() {
        if (this.player) {
            this.player.dispose()
        }
    }

    render() {
        return (
            <div>
                <video ref={node => this.videoNode = node} className={'video-js'}>
                </video>
            </div>
        );
    }
}

export default VideoJSPlayerComponent;
