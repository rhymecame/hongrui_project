import React from 'react';
import { Row, Col } from 'antd';
import styles from '../../../css/webSite.css';


export default class Footer extends React.Component{
    
    render(){
        let footer={
            backgroundColor: '#333333',
            height: '80px',

        }

        let info={
            float: 'left',
            color: '#ffffff',
            marginTop: '40px',
        }

        let record={
            float: 'right',
            color: '#ffffff',
            marginTop: '40px',
        }
        return(
            <footer style={footer}>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} class="footer" >
                        <div>
                        <div style={info}>
                            Copyright &copy;&nbsp;2019 北京宏瑞基业建筑工程有限公司  地址：北京市大兴区兴华大街（二段）3号院3号楼1层117 电话：010-61198036
                        </div>
                        <div style={record}>
                            京ICP备19018591号-1	
                        </div>
                        </div>
                    </Col>
                    <Col span={2}></Col>
                </Row>

            </footer>
          
        );
    };
}