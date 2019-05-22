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

export default class EstateDev extends ContentLayout{

    constructor(){
        super();
    }


    setMenu(){
        return (
            <div>
                <Menu mode='inline' defaultOpenKeys={['1']}>
                    <SubMenu 
                        key='1'
                        title="地产开发" >
                        <MenuItem class="left_menu"  key="1">
                            学校
                            <Link to={{pathname:"/industry/estate_dev/residential" ,query:{id:1}}}/>
                        </MenuItem>
                        <MenuItem class="left_menu"  key="2">
                            住宅
                            <Link to={{pathname:"/industry/estate_dev/residential" ,query:{id:2}}}/>
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
                        <Route path="/industry/estate_dev" component={EstateDevOverview}></Route>
                        {/* <Route path="/industry/estate_dev/safe_house" component={SafeHouse}></Route>
                        <Route path="/industry/estate_dev/city_complex" component={CityComplex}></Route> */}
                        <Route exact path="/industry/estate_dev/residential" component={Residential}></Route>
                </Router>
                </div>
            </div>
        );
    
    }

    
}