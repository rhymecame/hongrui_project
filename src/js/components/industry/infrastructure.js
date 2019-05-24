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
            <div>
                <Menu
                    defaultOpenKeys={['1']}
                    mode='inline'
                    defaultSelectedKeys={['1']}>
                    <SubMenu style={{fontSize:22}}
                        key='1'
                        title="基础设施" >
                        <MenuItem class="left_menu"  key="1" style={{fontSize:17}}>
                            停车场
                            <Link to={{pathname: "/industry/infras/item1", query:{id:1}}}/>
                        </MenuItem>
                        <MenuItem class="left_menu"  key="2" style={{fontSize:17}}>
                            管道房
                            <Link to={{pathname: "/industry/infras/item2", query:{id:2}}}/>
                        </MenuItem>
                        
                    </SubMenu>

                </Menu>
            </div>
        );

    }

    setContent(){



        let img = {
            width: '100%',
            height: '100%', 
        };

        return (
            <Router history={hashHistory}>
            <Redirect from="/industry/infrastructure" to='/industry/infras/item1?id=1'></Redirect>
            <Route path="/industry/infras/item1" component={InfrastructShowPage}></Route>
            <Route path="/industry/infras/item2" component={InfrastructShowPage}></Route>
            </Router>
        
        
        );

    }
}