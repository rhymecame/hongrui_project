import React from 'react';
import {Card} from 'antd';
import {Row,Col} from 'antd';
import styles from '../../../css/industry.css';
import {Link} from 'react-router';

const {Meta} = Card;

export default class DisplayCard extends React.Component {
    render(){
        return(
            <div style={{ background: '#FFFFFF', padding: '30px' }}>
                
                <Row gutter={16}>
                    <Col span={4}></Col>
                    <Col span={8}>
                        <Card headStyle={{textAlign:"center"}} title="绿色智造" bordered={true}>
                        <Link to="/">
                        <img class="cardimage" alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
                        </Link>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card headStyle={{textAlign:"center"}} title="建筑安装" bordered={true}>
                        <img class="cardimage" alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
                        </Card>
                    </Col>
                    <Col span={4}></Col>
                </Row>
                
                <Row gutter={16} style={{marginTop:30}}>
                    <Col span={4}></Col>
                    <Col span={8}>
                        <Card headStyle={{textAlign:"center"}} title="地产开发" bordered={true}>
                        <img class="cardimage" alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card headStyle={{textAlign:"center"}} title="基础设施" bordered={true}>
                        <img class="cardimage" alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
                        </Card>
                    </Col>
                    <Col span={4}></Col>
                </Row>
                

            </div>
        );

    };
}