/**
 * Created by liuxu
 * Date: 2020-03-15 18:26:52
 * 使用video.js创建的视频播放器
 */

import React from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import 'videojs-preview-thumbnails/dist/videojs-preview-thumbnails.js';

class VideoJSPlayerComponent extends React.Component {

    constructor(props) {
        super(props);
        this.defaultProperties = {
            autoplay: true,
            controls: true,
            playbackRates: [0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0, 10.0],
            plugins: {
                examplePlugin: {
                    exampleOption: true
                }
            },
        };
    }

    componentDidMount() {
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
        function examplePlugin(options) {
            this.on('play', function (e) {
                console.log('监控播放插件信息!');
            });
        }

        videojs.registerPlugin('examplePlugin', examplePlugin);

        return (
            <div>
                <video ref={node => this.videoNode = node} className={'video-js'}>
                </video>
            </div>
        );
    }
}

export default VideoJSPlayerComponent;
