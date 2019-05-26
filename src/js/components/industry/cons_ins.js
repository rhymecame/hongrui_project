import React from 'react';
import ContentLayout from '../public_components/content_layout';
import {Menu} from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';
import SubMenu from 'antd/lib/menu/SubMenu';
import {Link} from 'react-router';
import styles from '../../../css/industry.css';
import EstateDevOverview from './estatedev_overview';
import {Router,Route,hashHistory} from 'react-router';
import Residential from './residential';


import ConsInsOverview from './consins_overview';

import ProductShowPage from './product_show';
import ProductDetail from './product_detail';

export default class ConsIns extends ContentLayout{

    constructor(){
        super();
    }


    setMenu(){
        return (
            <div>
                <Menu mode='inline' defaultOpenKeys={['1']}>
                    <SubMenu 
                        key='1'
                        title="防水工程" >
                        <MenuItem class="left_menu"  key="1" style={{fontSize:17}}>
                            屋顶防水
                            <Link to={{pathname: "/industry/cons_ins/view1", query:{id:1}}}/>
                        </MenuItem>
                        <MenuItem class="left_menu"  key="2" style={{fontSize:17}}>
                            地基防水
                            <Link to={{pathname: "/industry/cons_ins/view2", query:{id:2}}}/>
                        </MenuItem>
                        <MenuItem class="left_menu"  key="3" style={{fontSize:17}}>
                            室内防水
                            <Link to={{pathname: "/industry/cons_ins/view3", query:{id:3}}}/>
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
                        <Route path="/industry/cons_ins" component={ConsInsOverview}></Route>
                        <Route path="/industry/cons_ins/view1" component={ProductShowPage}></Route>
                        <Route path="/industry/cons_ins/view2" component={ProductShowPage}></Route>
                        <Route path="/industry/cons_ins/view3" component={ProductShowPage}></Route>
                        <Route path="/industry/cons_ins/view4" component={ProductShowPage}></Route>
                </Router>
                </div>
            </div>
        );
    
    }

    
}