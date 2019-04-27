import React from 'react';
import {Card} from 'antd';
import {Row,Col} from 'antd';
import styles from '../../../css/industry.css';
import {Link} from 'react-router';
import {Router,Route,hashHistory} from 'react-router';
import GreenWisdom from './greenwisdom';
import Header from '../public_components/header';
import Footer from '../public_components/footer';

const {Meta} = Card;

export default class DisplayCard extends React.Component {


    setHeaderImage(){
        let container = {
            width: '100%',
            height: '200px', 
            marginTop: '20px',
        };

        let img = {
            width: '100%',
            height: '100%', 
        };

        return (
            <div style={container}>
                <img style={img} src='./src/images/common.jpeg'/>
            </div>
        );
    }

    render(){
        return(
        <div>
            <Header></Header>

            {this.setHeaderImage()}
            <div style={{ background: '#FFFFFF', padding: '30px' }}>
            
                
                <Row gutter={16}>
                    <Col span={4}></Col>
                    <Col span={8}>
                        <Card headStyle={{textAlign:"center"}} title="绿色智造" bordered={true}>
                        <Link to="/industry/greenwisdom">
                        <img class="cardimage" alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
                        </Link>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card headStyle={{textAlign:"center"}} title="建筑安装" bordered={true}>
                        <Link to="/industry/cons_ins">
                        <img class="cardimage" alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
                        </Link>
                        </Card>
                    </Col>
                    <Col span={4}></Col>
                </Row>
                
                <Row gutter={16} style={{marginTop:30}}>
                    <Col span={4}></Col>
                    <Col span={8}>
                        <Card headStyle={{textAlign:"center"}} title="地产开发" bordered={true}>
                        <Link to="/industry/estate_dev">
                        <img class="cardimage" alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
                        </Link>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card headStyle={{textAlign:"center"}} title="基础设施" bordered={true}>
                        <Link to="/industry/infrastructure">
                        <img class="cardimage" alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
                        </Link>
                        </Card>
                    </Col>
                    <Col span={4}></Col>
                </Row>  
                </div>
            <Footer></Footer>
        </div>
            
            
        );

    };
}