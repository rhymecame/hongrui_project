import React from 'react';
import { Row, Col } from 'antd';
import styles from '../../css/webSite.css';


export default class Footer extends React.Component{
    render(){
        return(
            <footer>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} class="footer">
                        &copy;&nbsp;2019 宏瑞建筑.All Right Reserved.
                        
                    </Col>
                    <Col span={2}></Col>
                </Row>

            </footer>
          
        );
    };
}