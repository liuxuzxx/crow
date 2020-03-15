/**
 * Created by liuxu on 2019-09-16 16:40:13
 * description: 实验下AntD的搜索表单
 */

import React from 'react';
import {Row, Col, Button, Input, Table, Form} from 'antd';
import {connect} from "react-redux";
import {createLoadLanguagePageDataSync} from "../../saga/type/FormAction";

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.columns = [
            {
                title: 'language',
                dataIndex: 'language',
                key: 'language',
                render: text => <a>{text}</a>,
            },
            {
                title: 'detail',
                dataIndex: 'detail',
                key: 'detail',
            }];
    }

    handleSearch = () => {
        console.log('查看search是否触发了方法!');
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                const {loadLanguagePageData} = this.props;
                loadLanguagePageData();
            }
        });
    };

    searchFormElement = () => {
        return (
            <Form className="ant-advanced-search-form">
                <Row gutter={24}>
                    <Col span={8}>
                        <Form.Item
                            label={`名字`}
                            name={'name'}
                            rules={[{required: true, message: '输入查询的内容'}]}>
                            <Input placeholder="输入查询的内容"/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={24} style={{textAlign: 'right'}}>
                        <Button type="primary" onClick={this.handleSearch}>
                            搜索
                        </Button>
                    </Col>
                </Row>
            </Form>
        );
    };

    render() {
        const {languagePageData} = this.props;
        return (
            <div>
                <div>
                    {this.searchFormElement()}
                </div>
                <div>
                    <Table
                        key={'language'}
                        columns={this.columns}
                        dataSource={languagePageData.data}
                        pagination={languagePageData.pagination}
                        loading={languagePageData.loading}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {languagePageData: state.form.languagePageData};
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadLanguagePageData: () => {
            dispatch(createLoadLanguagePageDataSync());
        },
    };
};

const SearchFormComponent = SearchForm;

export default connect(mapStateToProps, mapDispatchToProps)(SearchFormComponent);