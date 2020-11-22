/**
 * Created by liuxu
 * Date: 2020-04-13 10:46:50
 * 股票历史数据趋势图，如果之后看着不行，可以修改展示的模式
 */

import React from 'react';
import ReactEcharts from "echarts-for-react";

class StockHistoryEchartComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    title = () => {
        return {
            text: 'Stock数据',
            subtext: 'Default layout',
            top: 'bottom',
            left: 'right',
            fixed: true,
        };
    };

    stockDateTime = (stockHistoryDatas) => {
        return stockHistoryDatas.map(function (historyData) {
            return historyData.dateTime;
        });
    };

    getOption = () => {
        const {stockHistoryDatas} = this.props;
        let filterStockHistoryDatas = stockHistoryDatas.filter(function (history) {
            return history.startPrice > 0;
        });
        let xStockDateTimes = this.stockDateTime(filterStockHistoryDatas);

        return {
            title: this.title(),
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                }
            },
            legend: {
                data: ['每日数据']
            },
            grid: {
                left: '10%',
                right: '10%',
                bottom: '15%'
            },
            xAxis: {
                type: 'category',
                data: xStockDateTimes,
                scale: true,
                boundaryGap: false,
                axisLine: {onZero: false},
                splitLine: {show: false},
                splitNumber: 20,
                min: 'dataMin',
                max: 'dataMax'
            },
            yAxis: {
                scale: true,
                splitArea: {
                    show: true
                }
            },
            series: [
                {
                    name: '每日数据',
                    type: 'line',
                    data: filterStockHistoryDatas.map(function (history) {
                        return history.startPrice;
                    }),
                    smooth: true,
                    lineStyle: {
                        opacity: 0.5
                    }
                },
            ]
        };
    };

    render() {
        let option = this.getOption();
        return <ReactEcharts
            option={option}
            notMerge={true}
            lazyUpdate={true}
            style={{height: '100%', width: '100%'}}
            theme={"theme_name"}/>;
    }
}

export default StockHistoryEchartComponent;