/**
 * Created by liuxu
 * Date: 2020-04-13 16:22:20
 *
 * 股票搜索组件
 */

import React from 'react';
import {connect} from "react-redux";
import {STOCK_STOCK_HISTORY_DATA_LOAD_SYNC, STOCK_STOCK_SEARCH_LOAD_SYNC} from "../../saga/type/StockAction";
import {Select} from "antd";

const {Option} = Select;

class StockSearchComponent extends React.Component {

    handleSearch = value => {
        if (value) {
            const {searchStock} = this.props;
            searchStock(value);
        }
    };

    handleChange = value => {
        console.log(`选中的数据为:${JSON.stringify(value)}`);
        const {loadStockHistoryDatas} = this.props;
        loadStockHistoryDatas(value);
    };


    render() {
        const {searchStockDatas} = this.props;
        const options = searchStockDatas.map(stock => <Option key={stock.stockCode}>{stock.stockName}</Option>);
        return (
            <Select
                showSearch
                defaultActiveFirstOption={false}
                showArrow={false}
                style={{width: 200}}
                filterOption={false}
                onSearch={this.handleSearch}
                onChange={this.handleChange}
                notFoundContent={null}
            >
                {options}
            </Select>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        searchStockDatas: state.stock.searchStockDatas,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        searchStock: (condition) => {
            dispatch({type: STOCK_STOCK_SEARCH_LOAD_SYNC, condition: condition});
        },
        loadStockHistoryDatas: (stockCode) => {
            dispatch({type: STOCK_STOCK_HISTORY_DATA_LOAD_SYNC, stockCode: stockCode});
        },
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(StockSearchComponent);
