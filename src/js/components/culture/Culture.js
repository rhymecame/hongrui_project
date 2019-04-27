import React from 'react';
import Header from '../public_components/header';
import Footer from '../public_components/footer';
import ContentLayout from '../public_components/content_layout';
import {Menu,Icon,Tabs,message,Form,Input,Button,Checkbox} from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';
import SubMenu from 'antd/lib/menu/SubMenu';
import Hold from './Hold';
import Introduction from './Introduction';
import {Router,Route,hashHistory, Redirect} from 'react-router';
import {Link} from 'react-router';

const URL = [
    '/culture',
    "/culture/introduction",
    "/culture/hold",
]
export default class Culture extends ContentLayout {
    constructor(props){
        super(props);
        this.state={
            defaultSelectedKeys: ['1'],
        }

        let url = this.props.location.pathname;
        if(url == URL[0] || url == URL[1]){
            this.state.defaultSelectedKeys = ['1'];
        }else if(url == URL[2]){
            this.state.defaultSelectedKeys = ['2'];
        }
        console.log(this.props);
    }

    setMenu(){
        return (
            <div>
                <Menu
                    defaultOpenKeys={['1']}
                    mode='inline'
                    defaultSelectedKeys={this.state.defaultSelectedKeys}>
                    <SubMenu 
                        key='1'
                        title="企业文化" >
                        <MenuItem key="1">
                            公司简介
                            <Link to="/culture/introduction"/>
                        </MenuItem>
                        <MenuItem key="2">
                            企业秉承
                            <Link to="/culture/hold"/>
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
                        <Redirect from="/culture" to="/culture/introduction" />
                        <Route path="/culture/introduction" component={Introduction}></Route>
                        <Route path="/culture/hold" component={Hold}></Route>
                </Router>
                </div>
            </div>
        );
    
    }
}