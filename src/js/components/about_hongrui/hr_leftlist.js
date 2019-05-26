import React from 'react';
import {Row,Col, Menu} from 'antd';
import {Link} from 'react-router';
import Header from '../public_components/header';
import Footer from '../public_components/footer';
import {Router,Route,hashHistory} from 'react-router';
import HRIntroduction from './hr_introduction';
import HRSpeech from './hr_speech';
import HRQualification from './hr_qualification';
import styles from '../../../css/about_hongrui.css';
import Residential from '../industry/residential';
import HRReputation from './hr_reputation';
import QualificationDetail from './qualification_detail';
import SubMenu from 'antd/lib/menu/SubMenu';


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
        let id= this.props.location.query.id;
        if(id==undefined){
            id='1';
        }
        let idNum = parseInt(id);
        let subMenuopenKeys = (idNum>=3 && idNum <=8)?'sub1':'null';
        
        return(
            <div>
                {this.setHeaderImage()}
                <Row class="list_row" style={{marginBottom:50,marginTop:30}}>
                    <Col span={4}></Col>
                    <Col span={3}>
                        <Menu mode="inline" defaultSelectedKeys={[id]}
                              defaultOpenKeys={[subMenuopenKeys]}>
                            <Menu.Item key="1" style={{fontSize:17}}>
                            <Link to="/about_hongrui">企业简介</Link>
                            </Menu.Item>
                            <Menu.Item key="2" style={{fontSize:17}}>
                            <Link to="/about_hongrui/hr_speech">董事长致辞</Link>
                            </Menu.Item>
                            <SubMenu key='sub1' title = "企业资质" style={{fontSize:17}}>
                                <Menu.Item key="3" style={{fontSize:17}}>
                                    <Link to="/about_hongrui/hr_qualification/item?id=3">营业执照</Link>
                                </Menu.Item>
                                <Menu.Item key="4" style={{fontSize:17}}>
                                    <Link to="/about_hongrui/hr_qualification/item?id=4">资质证书</Link>
                                </Menu.Item>
                                <Menu.Item key="5" style={{fontSize:17}}>
                                    <Link to="/about_hongrui/hr_qualification/item?id=5">安全生产许可证</Link>
                                </Menu.Item>
                                <Menu.Item key="6" style={{fontSize:17}}>
                                    <Link to="/about_hongrui/hr_qualification/item?id=6">管理体系证书</Link>
                                </Menu.Item>
                                <Menu.Item key="7" style={{fontSize:17}}>
                                    <Link to="/about_hongrui/hr_qualification/item?id=7">AAA级信用</Link>
                                </Menu.Item>
                                <Menu.Item key="8" style={{fontSize:17}}>
                                    <Link to="/about_hongrui/hr_qualification/item?id=8">公信中国</Link>
                                </Menu.Item>
                            </SubMenu>
                            
                            <Menu.Item key="9" style={{fontSize:17}}>
                            <Link to="/about_hongrui/hr_reputation">企业信誉</Link>
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
                            <Route path="/about_hongrui/hr_reputation" component={HRReputation}></Route>
                            <Route path="/about_hongrui/hr_qualification" component={HRQualification}></Route>
                            <Route path="/about_hongrui/hr_qualification/item" component={QualificationDetail}></Route>
                        </Router>   
                        </div>
                    </Col>
                    <Col span={4}></Col>
                </Row>
            </div>

        );

    };
}