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
import CityComplex from './city_complex';
import SafeHouse from './safe_house';
import ConsInsOverview from './consins_overview';

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
                        title="建筑安装" >
                        <MenuItem class="left_menu"  key="1">
                            民用建筑
                            <Link to="/industry/cons_ins/view1"/>
                        </MenuItem>
                        <MenuItem class="left_menu"  key="2">
                            工业建筑
                            <Link to="/industry/cons_ins/view2"/>
                        </MenuItem>
                        <MenuItem class="left_menu"  key="3">
                            机电安装
                            <Link to="/industry/cons_ins/view3"/>
                        </MenuItem>
                        <MenuItem class="left_menu"  key="4">
                            市政路桥
                            <Link to="/industry/cons_ins/view4"/>
                        </MenuItem>
                        <MenuItem class="left_menu"  key="5">
                            装饰装修
                            <Link to="/industry/cons_ins/view5"/>
                        </MenuItem>
                        <MenuItem class="left_menu"  key="6">
                            建筑幕墙
                            <Link to="/industry/cons_ins/view6"/>
                        </MenuItem>
                        <MenuItem class="left_menu"  key="7">
                            地基与基础
                            <Link to="/industry/cons_ins/view7"/>
                        </MenuItem>
                        <MenuItem class="left_menu"  key="8">
                            钢结构
                            <Link to="/industry/cons_ins/view8"/>
                        </MenuItem>
                        <MenuItem class="left_menu"  key="9">
                            新型建材
                            <Link to="/industry/cons_ins/view9"/>
                        </MenuItem>
                        <MenuItem class="left_menu"  key="10">
                            古建园林
                            <Link to="/industry/cons_ins/view10"/>
                        </MenuItem>
                        <MenuItem class="left_menu"  key="11">
                            楼宇工程
                            <Link to="/industry/cons_ins/view11"/>
                        </MenuItem>
                        <MenuItem class="left_menu"  key="12">
                            BOT工程
                            <Link to="/industry/cons_ins/view12"/>
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
                        <Route path="/industry/cons_ins/view1" component={Residential}></Route>
                        <Route path="/industry/cons_ins/view2" component={Residential}></Route>
                        <Route path="/industry/cons_ins/view3" component={Residential}></Route>
                        <Route path="/industry/cons_ins/view4" component={Residential}></Route>
                        <Route path="/industry/cons_ins/view5" component={Residential}></Route>
                        <Route path="/industry/cons_ins/view6" component={Residential}></Route>
                        <Route path="/industry/cons_ins/view7" component={Residential}></Route>
                        <Route path="/industry/cons_ins/view8" component={Residential}></Route>
                        <Route path="/industry/cons_ins/view9" component={Residential}></Route>
                        <Route path="/industry/cons_ins/view10" component={Residential}></Route>
                        <Route path="/industry/cons_ins/view11" component={Residential}></Route>
                        <Route path="/industry/cons_ins/view12" component={Residential}></Route>
                        
                </Router>
                </div>
            </div>
        );
    
    }

    
}