import React from 'react';
import Header from '../public_components/header';
import Footer from '../public_components/footer';
import { Pagination, Col } from 'antd';
import { List, Typography } from 'antd';
import {Row} from 'antd';
import styles from '../../../css/news_center.css';
import {newsData} from './newsData'
import {Link} from 'react-router';


export default class NewsList extends React.Component {

    constructor(props){
        super(props);
        this.state={
            items: [],
        }
        this.initTitle();
    }

    initTitle(){
        let data = newsData;
        console.log(data);
        data.forEach(ele => {
            this.state.items.push(ele);
        });
    }

    renderItem(item){
        console.log(item);
        let url = '/news_center/news_detail';
        return (
            <List.Item>
                <Link to={{pathname: url, query: {id: item.id}}} >
                <Typography.Text mark>[ITEM]</Typography.Text> {item.title}
                </Link>
            </List.Item>
        );
    }
    
    render(){

        return(
            <div>                
                <div class="container">
                <Row class="list_row" style={{marginBottom:50,marginTop:15}}>
                <Col span={4}></Col>
                <Col span={16}>
                <h3 style={{ marginBottom: 16,textAlign:"center",fontSize:24}}>宏瑞要闻</h3>
                    <List
                        // header={<div>Header</div>}
                        // footer={<div>Footer</div>}
                        pagination ={true}
                        bordered
                        dataSource={this.state.items}
                        renderItem={item => {
                            return this.renderItem(item);
                        }}
                    />
                </Col>
                <Col span={4}></Col>
                </Row>
                </div>
            </div>

        );
    };
}