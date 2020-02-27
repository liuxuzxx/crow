/**
 * Created by liuxu
 * Date: 2020-02-26 21:48:52
 * 原始视频对应的剪切视频的列表文件信息
 */

import React from "react";
import {connect} from 'react-redux';
import {Card, List} from "antd";

class CutVideoFilesComponent extends React.Component {

    render() {
        const {cutVideoFiles} = this.props;
        return (
            <List
                grid={{gutter: 16, column: 1}}
                dataSource={cutVideoFiles.data}
                renderItem={item => (
                    <List.Item>
                        <Card
                            title={item.name}>
                            {item.name}
                        </Card>
                    </List.Item>
                )}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cutVideoFiles: state.video.cutVideoFiles,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CutVideoFilesComponent);