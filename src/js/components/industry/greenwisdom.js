import React from 'react';
import ContentLayout from '../public_components/content_layout';
import {Menu} from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';
import {Link} from 'react-router';
import styles from '../../../css/industry.css';
import EstateDevOverview from './estatedev_overview';
import {Router,Route,hashHistory,Redirect} from 'react-router';
import Residential from './residential';
import SubMenu from 'antd/lib/menu/SubMenu';


export default class GreenWisdom extends ContentLayout{

    constructor(){
        super();
    }


    setMenu(){
        return (
            <div>
                <Menu mode='inline' defaultOpenKeys={['1']}
                    defaultSelectedKeys = {['1']}>
                    <SubMenu 
                        key='1'
                        title="装饰工程" >
                        <MenuItem class="left_menu"  key="1" style={{fontSize:17}}>
                            商业
                            <Link to={{pathname:"/industry/greenwisdom/estate_dev/residential" ,query:{id:1}}}/>
                        </MenuItem>
                        <MenuItem class="left_menu"  key="2" style={{fontSize:17}}>
                            住宅
                            <Link to={{pathname:"/industry/greenwisdom/estate_dev/residential" ,query:{id:2}}}/>
                        </MenuItem>
                        <MenuItem class="left_menu"  key="3" style={{fontSize:17}}>
                            学校
                            <Link to={{pathname:"/industry/greenwisdom/estate_dev/residential" ,query:{id:3}}}/>
                        </MenuItem>
                        <MenuItem class="left_menu"  key="4" style={{fontSize:17}}>
                            医院
                            <Link to={{pathname:"/industry/greenwisdom/estate_dev/residential" ,query:{id:4}}}/>
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
                        <Redirect exact from = "/industry/greenwisdom" to="/industry/greenwisdom/estate_dev/residential?id=1"></Redirect>
                        {/* <Route  exact path="/industry/greenwisdom" component={Residential}></Route> */}
                        {/* <Route path="/industry/estate_dev/safe_house" component={SafeHouse}></Route>
                        <Route path="/industry/estate_dev/city_complex" component={CityComplex}></Route> */}
                        <Route  path="/industry/greenwisdom/estate_dev/residential" component={Residential}></Route>
                </Router>
                </div>
            </div>
        );
    
    }
}