import React from 'react';
import Header from '../public_components/header';
import Footer from '../public_components/footer';
import ContentLayout from '../public_components/content_layout';
import {Menu,Icon,Tabs,message,Form,Input,Button,Checkbox} from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';
import SubMenu from 'antd/lib/menu/SubMenu';
import {Row,Col} from 'antd';

export default class Mission extends React.Component {
    render(){
        let img = {
            width:"100%",
            height:"100%",
        }
        return (
            <div>
            <Row>
                <Col span={10}>
                    <h2>企业使命</h2>
                    <p style={{fontSize:17}}>
                       品质合格是尽社会的义务，
                    </p>
                    <p style={{fontSize:17}}>
                       品质卓越是对社会的贡献。
                    </p>
                    <h2>企业愿景</h2>
                    <p style={{fontSize:17}}>
                       丰收田野新理念，真情服务是关键。
                    </p>
                    <p style={{fontSize:17}}>
                       信念信心信自己，创业创新创辉煌。
                    </p>
                    <h2>企业宗旨</h2>
                    <p style={{fontSize:17}}>
                       选择宏瑞，明智之举。
                    </p>
                    <p style={{fontSize:17}}>
                       产品优越，诚实守信。
                    </p>
                    <p style={{fontSize:17}}>
                       开拓创新，服务一流。
                    </p>
                </Col>
                <Col span={14}>
                <img style={img} src="./src/images/estate_dev.jpeg"></img>
                </Col>
            </Row>
            </div>
        );
    }
}
