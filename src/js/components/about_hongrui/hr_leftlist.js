import React from 'react';
import {Row,Col, Menu} from 'antd';
import {Link} from 'react-router';
import Header from '../public_components/header';
import Footer from '../public_components/footer';
import {Router,Route,hashHistory} from 'react-router';
import HRIntroduction from './hr_introduction';
import HRSpeech from './hr_speech';
import HROrganization from './hr_organization';
import HRQualification from './hr_qualification';
import styles from '../../../css/about_hongrui.css';
import Residential from '../industry/residential';

const SubMenu = Menu.SubMenu;


export default class HRLeftList extends React.Component {

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

    // constructor(){
    //     super();
    //     this.state={
    //         defaultSelectedKeys: ['1'],
    //     }
    // }

    render(){
        return(
            <div>
                <Header></Header>
                {this.setHeaderImage()}
                <Row class="list_row" style={{marginBottom:50,marginTop:30}}>
                    <Col span={4}></Col>
                    <Col span={3}>
                        <Menu mode="vertical" defaultSelectedKeys={["1"]}>
                            <Menu.Item key="1">
                            <Link to="/about_hongrui">公司简介</Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                            <Link to="/about_hongrui/hr_speech">董事长致辞</Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                            <Link to="/about_hongrui/hr_qualification">公司资质</Link>
                            </Menu.Item>
                            <Menu.Item key="4">
                            <Link to="/about_hongrui/hr_organization">组织结构</Link>
                            </Menu.Item>
                            <Menu.Item key="5">
                            
                            </Menu.Item>
                            <Menu.Item key="6">
                            
                            </Menu.Item>
                            <Menu.Item key="7">
                            
                            </Menu.Item>
                            <Menu.Item key="8">
                            
                            </Menu.Item>
                        </Menu>
                    </Col>
                    <Col span={2}></Col>
                    <Col span={10}>
                        <div>
                        <Router history={hashHistory}>
                            <Route path="/about_hongrui" component={HRIntroduction}></Route>
                            <Route path="/about_hongrui/hr_introduction" component={HRIntroduction}></Route>
                            <Route path="/about_hongrui/hr_speech" component={HRSpeech}></Route>
                            {/* <Route path="/about_hongrui/hr_speech" component={Residential}></Route> */}
                            <Route path="/about_hongrui/hr_organization" component={HROrganization}></Route>
                            <Route path="/about_hongrui/hr_qualification" component={HRQualification}></Route>
                        </Router>   
                        </div>
                    </Col>
                    <Col span={4}></Col>
                </Row>
                <Footer></Footer>
            </div>

        );

    };
}