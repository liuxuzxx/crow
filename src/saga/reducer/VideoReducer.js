/**
 * @author 刘旭
 * @date 2020-02-21 17:12:06
 * 视频方面的reducer
 */
import {CUT_VIDEO_LIST_LOAD, VIDEO_FILE_LIST_LOAD, VIDEO_PLAY_VIDEO_FILE_URL} from "../type/VideoAction";

const videoReducer = (state = {
    videoFiles: {data: []},
    playVideoFile: {},
    cutVideoFiles: {data: []},
}, action) => {
    switch (action.type) {
        case VIDEO_FILE_LIST_LOAD:
            return {
                ...state,
                videoFiles: action.payload,
            };
        case VIDEO_PLAY_VIDEO_FILE_URL:
            return {
                ...state,
                playVideoFile: action.payload,
            };
        case CUT_VIDEO_LIST_LOAD:
            return {
                ...state,
                cutVideoFiles: action.payload,
            };
        default:
            return state;
    }
};

export {videoReducer};
