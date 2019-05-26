import React from 'react';
import Header from '../public_components/header';
import Footer from '../public_components/footer';
import ContentLayout from '../public_components/content_layout';
import {Menu,Icon,Tabs,message,Form,Input,Button,Checkbox} from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';
import SubMenu from 'antd/lib/menu/SubMenu';
import {Router,Route,hashHistory, Redirect} from 'react-router';
import {Link} from 'react-router';
import Mission from './mission';
import Vision from './vision';
import Purpose from './purpose';
import Value from './value';
import BussPh from './business_philosophy';
import styles from '../../../css/culture.css';
import { element } from 'prop-types';

const URL = [
    '/culture',
    "/culture/mission",
    "/culture/value",
]
export default class Culture extends ContentLayout {
    constructor(props){
        super(props);
    }

    getCurrentSelectedId(){
        let id=1;
        let pathname = this.props.location.pathname;
        console.log(pathname);
        for(let i=1;i<URL.length;i++){
            if(pathname==URL[i]){
                id=i;
                break;
             }
        }
        id = id.toString();
        return id;
    }

    setMenu(){
    let id=this.getCurrentSelectedId();
    console.log(id);

        return (
            <div>
                <Menu
                    defaultOpenKeys={['1']}
                    mode='inline'
                    defaultSelectedKeys={[id]}>
                    <SubMenu 
                        key='1'
                        title="企业文化" >
                        <MenuItem key="1" style={{fontSize:17}}>
                            企业标语
                            <Link to="/culture/mission"/>
                        </MenuItem>
                        {/* <MenuItem key="2" style={{fontSize:17}}>
                            企业愿景
                            <Link to="/culture/vision"/>
                        </MenuItem>
                        <MenuItem key="3" style={{fontSize:17}}>
                            企业宗旨
                            <Link to="/culture/purpose"/>
                        </MenuItem> */}
                        <MenuItem key="2" style={{fontSize:17}}>
                            企业价值观
                            <Link to="/culture/value"/>
                        </MenuItem>
                        {/* <MenuItem key="5" style={{fontSize:17}}>
                            企业经营理念
                            <Link to="/culture/business_philosophy"/>
                        </MenuItem> */}
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
                        <Redirect from="/culture" to="/culture/mission" />
                        <Route path="/culture/mission" component={Mission}></Route>
                        {/* <Route path="/culture/vision" component={Vision}></Route>
                        <Route path="/culture/purpose" component={Purpose}></Route> */}
                        <Route path="/culture/value" component={Value}></Route>
                        {/* <Route path="/culture/business_philosophy" component={BussPh}></Route> */}
                </Router>
                </div>
            </div>
        );
    
    }
}