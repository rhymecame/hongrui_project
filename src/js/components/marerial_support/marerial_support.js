import React from 'react';
import ContentLayout from '../public_components/content_layout';
import {Menu} from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';
import SubMenu from 'antd/lib/menu/SubMenu';
import {Link} from 'react-router';
import styles from '../../../css/industry.css';

import {Router,Route,hashHistory} from 'react-router';
import MaterialDetail from './material_detail';
import {Redirect} from 'react-router';



export default class MaterialSupport extends ContentLayout{

    constructor(){
        super();
    }


    setMenu(){
        let id = this.getCurrentSelectedId();

        return (
            <div>
                <Menu mode='inline' defaultOpenKeys={['1']} defaultSelectedKeys={[id]}>
                    <SubMenu 
                        key='1'
                        title="材料供应" 
                        defaul>
                        <MenuItem class="left_menu"  key="1" style={{fontSize:17}}>
                            保温系列
                            <Link to={{pathname:"/material_support/view" ,query:{id:1}}}/>
                        </MenuItem>
                        <MenuItem class="left_menu"  key="2" style={{fontSize:17}}>
                            砂浆系列
                            <Link to={{pathname:"/material_support/view" ,query:{id:2}}}/>
                        </MenuItem>
                        <MenuItem class="left_menu"  key="3" style={{fontSize:17}}>
                            涂料系列
                            <Link to={{pathname:"/material_support/view" ,query:{id:3}}}/>
                        </MenuItem>
                        <MenuItem class="left_menu"  key="4" style={{fontSize:17}}>
                            腻子系列
                            <Link to={{pathname:"/material_support/view" ,query:{id:4}}}/>
                        </MenuItem>
                        <MenuItem class="left_menu"  key="5" style={{fontSize:17}}>
                            装饰材料
                            <Link to={{pathname:"/material_support/view" ,query:{id:5}}}/>
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
            // height: '600px',
        }
        
        return (
            <div>
                <div  style={content}>
                <Router history={hashHistory}>
                        <Redirect from="/material_support" to="/material_support/view?id=1"/>
                        <Route path="/material_support/view" component={MaterialDetail}></Route>
                </Router>
                </div>
            </div>
        );
    
    }

    
}