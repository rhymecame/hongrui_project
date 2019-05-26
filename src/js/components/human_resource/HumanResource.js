import React from 'react';
import Header from '../public_components/header';
import Footer from '../public_components/footer';
import ContentLayout from '../public_components/content_layout';
import {Menu,Icon,Tabs,message,Form,Input,Button,Checkbox} from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';
import SubMenu from 'antd/lib/menu/SubMenu';
import {Router,Route,hashHistory, Redirect} from 'react-router';
import {Link} from 'react-router';
import OurTeam from './our_team';
import Recruit from './recruit';

export default class HumanResource extends ContentLayout {

    setMenu(){
        return (
            <div>
                <Menu
                    defaultOpenKeys={['1']}
                    mode='inline'
                    defaultSelectedKeys={['1']}>
                <SubMenu 
                        key='1'
                        title="人力资源" >
                    <MenuItem key="1" style={{fontSize:17,color:"black"}}>
                        <Link to="/hr/our_team">团队介绍</Link>
                    </MenuItem>
                    <MenuItem key="2" style={{fontSize:17,color:"black"}}>
                        <Link to="/hr/recruit">招聘信息</Link>
                    </MenuItem>
                </SubMenu>
                </Menu>
            </div>
        );
        
    }


    setContent(){
        let content = {
            marginTop: '30px',
            marginLeft: '50px',
            width : '80%',
            height: '100%',
        }
        
        return (
            <div>
                <div  style={content}>
                <Router history={hashHistory}>
                        {/* <Route path="/culture" component={Introduction}></Route> */}
                        <Redirect from="/hr" to="/hr/our_team" />
                        <Route path="/hr/our_team" component={OurTeam}></Route>
                        {/* <Route path="/culture/vision" component={Vision}></Route>
                        <Route path="/culture/purpose" component={Purpose}></Route> */}
                        <Route path="/hr/recruit" component={Recruit}></Route>
                        {/* <Route path="/culture/business_philosophy" component={BussPh}></Route> */}
                </Router>
                </div>
            </div>
        );
    
    }
}