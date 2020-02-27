/**
 * @author 刘旭
 * @date 2020-02-21 17:12:33
 * 视频类型的动作action
 */
const VIDEO_FILE_LIST_LOAD_SYNC = "video.file.list.load.sync.VideoFileListLoadSync";
const VIDEO_FILE_LIST_LOAD = "video.file.list.load.VideoFileListLoad";
const VIDEO_PLAY_VIDEO_FILE_URL = "video.file.video.play.video.file.url.VideoPlayVideoFileUrl";
const CUT_VIDEO_LIST_LOAD_SYNC = "cut.video.list.load.sync.CutVideoListLoadSync";
const CUT_VIDEO_LIST_LOAD = "cut.video.list.load.CutVideoListLoad";

const createLoadVideoFilesSync = () => {
    return {type: VIDEO_FILE_LIST_LOAD_SYNC};
};

const createLoadVideoFiles = (payload) => {
    return {type: VIDEO_FILE_LIST_LOAD, payload: payload};
};

const createPlayVideoAction = (payload) => {
    return {type: VIDEO_PLAY_VIDEO_FILE_URL, payload: payload};
};

const createCutVideoLoadSync = () => {
    return {type: CUT_VIDEO_LIST_LOAD_SYNC};
};

const createCutVideoLoad = (payload) => {
    return {type: CUT_VIDEO_LIST_LOAD, payload: payload};
};

export {
    VIDEO_FILE_LIST_LOAD_SYNC,
    VIDEO_FILE_LIST_LOAD,
    VIDEO_PLAY_VIDEO_FILE_URL,
    CUT_VIDEO_LIST_LOAD_SYNC,
    CUT_VIDEO_LIST_LOAD,
    createLoadVideoFilesSync,
    createLoadVideoFiles,
    createPlayVideoAction,
    createCutVideoLoadSync,
    createCutVideoLoad,
}
