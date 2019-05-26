import React from 'react';
import ContentLayout from '../public_components/content_layout';
import {Menu} from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';
import SubMenu from 'antd/lib/menu/SubMenu';
import styles from '../../../css/industry.css';
import InfrastructShowPage from './infrastructure_show';
import {Router,Route,hashHistory, Redirect} from 'react-router';
import {Link} from 'react-router';

export default class Infrastructure extends ContentLayout{

    constructor(){
        super();
    }


    setMenu(){
        
        return (
            <div >
                <Menu
                    defaultOpenKeys={['1']}
                    mode='inline'
                    defaultSelectedKeys={['1']}>
                    
                    <MenuItem key='1' style={{fontSize:17}}>地面工程</MenuItem>

                </Menu>
            </div>
        );

    }

    setContent(){



        let img = {
            width: '100%',
            height: '100%', 
        };

        let content = {
            marginTop: '30px',
            marginLeft: '50px',
            width : '80%',
            // height: '600px',
        }

        return (
            <div style = {content}>
            <Router history={hashHistory}>
            <Redirect exact from="/industry/infras" to='/industry/infras/item1?id=1'></Redirect>
            <Route path="/industry/infras/item1" component={InfrastructShowPage}></Route>
            <Route path="/industry/infras/item2" component={InfrastructShowPage}></Route>
            </Router>
            </div>
        
        
        );

    }
}