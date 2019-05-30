import React from 'react';
import Header from '../public_components/header';
import Footer from '../public_components/footer';
import ContentLayout from '../public_components/content_layout';
import {Menu,Icon,Tabs,message,Form,Input,Button,Checkbox, Row, Col} from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';
import SubMenu from 'antd/lib/menu/SubMenu';

export default class Value extends React.Component {
    
    render(){

        let img = {
            width:"60%",
            height:"70%",
        }

        return (
            <div>
                <Row>
                    <Col span={10}>
                    <h1>企业价值观</h1>
                    <p style={{fontSize:20}}>
                       全员参与，强化管理。
                    </p>
                    <p style={{fontSize:20}}>
                       精益求精，铸造品质。
                    </p>
                    <h1>企业经营理念</h1>
                    <p style={{fontSize:20}}>
                       为客户创造价值。
                    </p>
                    <p style={{fontSize:20}}>
                       为员工创造机会。
                    </p>
                    <p style={{fontSize:20}}>
                       为企业和社会创造效益。
                    </p>
                    </Col>
                    <Col span={14}>
                        <img style={img} src="./src/images/service_slogan.jpg"></img>
                    </Col>
                </Row>
            </div>
        );
    }
}
