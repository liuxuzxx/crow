/**
 * Created by liuxu
 * Date: 2020-04-13 14:49:52
 * 股票的reducer对象
 */
import {STOCK_STOCK_HISTORY_DATA_LOAD, STOCK_STOCK_SEARCH_LOAD} from "../type/StockAction";

const stockReducer = (state = {
    stockHistoryDatas: [],
    searchStockDatas: [],
}, action) => {
    switch (action.type) {
        case STOCK_STOCK_HISTORY_DATA_LOAD:
            return {
                ...state,
                stockHistoryDatas: action.payload,
            };
        case STOCK_STOCK_SEARCH_LOAD:
            return {
                ...state,
                searchStockDatas: action.payload,
            };
        default:
            return state;
    }
};

export {stockReducer};