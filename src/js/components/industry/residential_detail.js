import React from 'react';
import Header from '../public_components/header';
import Footer from '../public_components/footer';
import ContentLayout from '../public_components/content_layout';
import {Menu,Icon,Tabs,message,Form,Input,Button,Checkbox} from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';
import SubMenu from 'antd/lib/menu/SubMenu';
import {Row,Col} from 'antd';
import {DisplayData, DisplayData1, DisplayData2} from './display_data';

const img = {
    width:"100%",
    height:"100%",
}



export default class ResidentialDetail extends React.Component {

    constructor(props){
        super(props);
        this.state={
            id: 0,
            title: '',
            imgbig: '',
            content:'',
            type:-1,
        }
        this.state.id =  this.props.location.query.id;
        this.state.type = this.props.location.query.type;

        this.initData();
        
    }

    initData(){
        let display_data;
        if(this.state.type == 0)
            display_data = DisplayData;
        else if(this.state.type == 1)
            display_data = DisplayData1;
        else
            display_data = DisplayData2;
        display_data.forEach(ele => {
            if(ele.id == this.state.id){
                this.state.title = ele.title;
                this.state.content = ele.discription;
                this.state.imgbig = ele.imglocal_url;
            }
        });
    }

    setHeaderImage(){
        let containerH = {
            width: '100%',
            height: '200px', 
            marginTop: '20px',
        };

        let imgH = {
            width: '100%',
            height: '100%', 
        };

        return (
            <div style={containerH}>
                <img style={imgH} src='./src/images/common.jpeg'/>
            </div>
        );
    }

    render(){
        let backgroundColor = '#F3F3F3'

        let container = {
            minHeight: '600px',
            width: '100%',
            backgroundColor: backgroundColor,
            marginBottom: '50px',
            padding: '30px',
        };

        let title={
            display: 'flex',
            textAlign: 'center',
            height: '30px',
            width: '100%',
            marginBottom: '25px',
        }
        let content={
            marginTop:"20px",
            height: '100%',
            marginLeft: 'auto',
            fontFamily:'微软雅黑',
            
        }

        return (
            <div>
            <Header></Header>
            {this.setHeaderImage()}
            <div style={{marginTop:'15px'}}>
                {/* 这里的row是用来把两边空出来的 */}
                <Row >
                    <Col span={3}/>
                    <Col span={18}>
                        <div style={container}>
                            <div style={title}>
                                <h2 style={{margin:'auto'}}>{this.state.title}</h2>
                            
                            </div>
                            <img style={img} src={this.state.imgbig}/>
                            <div style={content}>
                                {this.state.content}
                            </div>
                        </div>
                        
                    </Col>
                    <Col span={3}/>
                </Row>
            </div>
            <Footer></Footer>
            </div>
        );
    }
}
