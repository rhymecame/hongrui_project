import React from 'react';
import Header from '../public_components/header';
import Footer from '../public_components/footer';
import { Pagination, Col } from 'antd';
import { List, Typography } from 'antd';
import {Row} from 'antd';
import styles from '../../../css/news_center.css';

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
    'Los Angeles battles huge wildfires.',
    'Los Angeles battles huge wildfires.',
    'Los Angeles battles huge wildfires.',
    'Los Angeles battles huge wildfires.',
    'Los Angeles battles huge wildfires.',
    'Los Angeles battles huge wildfires.',
    'Los Angeles battles huge wildfires.',
    'Los Angeles battles huge wildfires.',
    'Los Angeles battles huge wildfires.',
    'Los Angeles battles huge wildfires.',
    'Los Angeles battles huge wildfires.',
    'Los Angeles battles huge wildfires.',
    'Los Angeles battles huge wildfires.',
    'Los Angeles battles huge wildfires.',
    'Los Angeles battles huge wildfires.',
    'Los Angeles battles huge wildfires.',
    'Los Angeles battles huge wildfires.',
    'Los Angeles battles huge wildfires.',
  ];

export default class NewsCenter extends React.Component {
    
    render(){
        return(
            <div>
                <Header></Header>
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
                        dataSource={data}
                        renderItem={item => (<List.Item><Typography.Text mark>[ITEM]</Typography.Text> {item}</List.Item>)}
                    />
                </Col>
                <Col span={4}></Col>
                </Row>
                </div>
                <Footer></Footer>
            </div>

        );
    };


}