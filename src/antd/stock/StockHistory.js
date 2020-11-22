/**
 * Created by liuxu
 * Date: 2020-04-13 10:42:03
 *
 * 股票历史数据信息的展示全图
 */

import React from 'react';
import StockHistoryEchartComponent from "../echart/StockHistoryEchartComponent";
import {connect} from "react-redux";
import StockSearchComponent from "./StockSearchComponent";

class StockHistory extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {stockHistoryDatas} = this.props;
        console.log(`查看获取历史数据的个数:${stockHistoryDatas.length}`);
        return (
            <div style={{height: '100%', width: '100%'}}>
                <StockSearchComponent/>
                <StockHistoryEchartComponent stockHistoryDatas={stockHistoryDatas}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        stockHistoryDatas: state.stock.stockHistoryDatas,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(StockHistory);