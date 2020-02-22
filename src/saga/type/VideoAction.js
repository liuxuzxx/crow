/**
 * @author 刘旭
 * @date 2020-02-21 17:12:33
 * 视频类型的动作action
 */
const VIDEO_FILE_LIST_LOAD_SYNC = "video.file.list.load.sync.VideoFileListLoadSync";
const VIDEO_FILE_LIST_LOAD = "video.file.list.load.VideoFileListLoad";
const VIDEO_PLAY_VIDEO_FILE_URL = "video.file.video.play.video.file.url.VideoPlayVideoFileUrl";

const createLoadVideoFilesSync = () => {
    return {type: VIDEO_FILE_LIST_LOAD_SYNC};
};

const createLoadVideoFiles = (payload) => {
    return {type: VIDEO_FILE_LIST_LOAD, payload: payload};
};

const createPlayVideoAction = (payload) => {
    return {type: VIDEO_PLAY_VIDEO_FILE_URL, payload: payload};
};

export {
    VIDEO_FILE_LIST_LOAD_SYNC,
    VIDEO_FILE_LIST_LOAD,
    VIDEO_PLAY_VIDEO_FILE_URL,
    createLoadVideoFilesSync,
    createLoadVideoFiles,
    createPlayVideoAction,
}
