/**
 * Created by liuxu
 * Date: 2019-08-27 21:10:48
 * 实验Echarts的一些东西
 */
import React from "react";
import ReactEcharts from "echarts-for-react";
import { Button } from "antd";

class EchartComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 5,
        };
    }

    getCategories = () => {
        let categories = [];
        for (let i = 0; i < 9; i++) {
            categories[i] = {
                name: '类目' + i
            };
        }

        return categories;
    };

    getRandomNumber = (max) => {
        let min = 1;
        let rand = min + (Math.random() * (max - min));
        return rand;
    };

    getGraph = () => {
        return {
            data: [
                {
                    "id": "0",
                    "name": "id0",
                    "attributes": { "modularity_class": 4 },
                    x: 100,
                    y: 50,
                },
                {
                    "id": "1",
                    "name": "id1",
                    "attributes": { "modularity_class": 0 },
                    x: 120,
                    y: 50,
                },
                {
                    "id": "2",
                    "name": "id2",
                    "attributes": { "modularity_class": 1 },
                    x: 140,
                    y: 60,
                },
                {
                    "id": "3",
                    "name": "id3",
                    "attributes": { "modularity_class": 2 },
                    x: 160,
                    y: 70,
                }
            ],
            link: [
                { "id": "0", "source": "0", "target": "1" },
                { "id": "1", "source": "0", "target": "2" },
                { "id": "2", "source": "0", "target": "3" },
            ]
        };
    };

    getTitle = () => {
        return {
            text: 'Echart的探索',
            subtext: 'Default layout',
            top: 'bottom',
            left: 'right',
            fixed: true,
        };
    };

    getOption = () => {
        let categories = this.getCategories();
        let graph = this.getGraph();
        return {
            title: this.getTitle(),
            tooltip: {},
            legend: [{
                data: categories.map(function (a) {
                    return a.name;
                })
            }],
            series: [{
                name: 'Echart的探索',
                type: 'graph',
                layout: 'none',
                data: graph.data,
                links: graph.link,
                categories: categories,
                draggable: true,
                roam: true,
                label: {
                    normal: {
                        position: 'right'
                    }
                },
                focusNodeAdjacency: true,
            },]
        };
    };

    getEvents = () => {
        return {
            'mouseup': this.onMouseUpEventHandle,
        };
    };

    onMouseUpEventHandle = (evnet) => {
        console.log('有鼠标移动到我这个节点上了!', evnet);
    };

    handleClickMe = () => {
        this.setState({
            count: this.state.count + 5,
        });
    };

    render() {
        console.log('查看会不会引起重画的操作!');
        const option = this.getOption();
        return (
            <div style={{ height: '100%', width: '100%' }}>
                <ReactEcharts
                    option={option}
                    notMerge={true}
                    lazyUpdate={true}
                    onEvents={this.getEvents()}
                    style={{ height: '100%', width: '100%' }}
                    theme={"theme_name"} />
                <Button type={'primary'} value={'点击我'} onClick={this.handleClickMe} >惦记我</Button>
            </div>
        );
    }
}

export default EchartComponent;