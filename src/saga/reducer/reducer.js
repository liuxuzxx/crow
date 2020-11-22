/**
 * Created by liuxu on 2018-09-05 13:54:01
 * description: 减速器的生成
 */
import {combineReducers} from 'redux';
import {homeMenuReducer} from './HomeIndexReducer';
import {formReducer} from "./FormReducer";
import {videoReducer} from "./VideoReducer";
import {stockReducer} from "./StockReducer";

const rootReducer = combineReducers({
    home: homeMenuReducer,
    form: formReducer,
    video: videoReducer,
    stock: stockReducer,
});

export default rootReducer;
