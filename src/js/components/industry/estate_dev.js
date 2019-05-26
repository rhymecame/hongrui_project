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
import {InsulationData} from './combuniss_data';
import { List, Card, Row } from 'antd';
import { Pagination } from 'antd';


const paginationProps = {
    showQuickJumper: true,
    // simple:true,
      
  };

export default class EstateDev extends ContentLayout{

    constructor(){
        super();
    }


    setMenu(){
        return (
            <div>
                <Menu mode='inline' defaultOpenKeys={['1']} defaultSelectedKeys={['1']}>
                    <MenuItem
                        key='1'
                    >
                        {/* <MenuItem class="left_menu"  key="1" style={{fontSize:17}}>
                            学校
                            <Link to={{pathname:"/industry/estate_dev/residential" ,query:{id:1}}}/>
                        </MenuItem>
                        <MenuItem class="left_menu"  key="2" style={{fontSize:17}}>
                            住宅
                            <Link to={{pathname:"/industry/estate_dev/residential" ,query:{id:2}}}/>
                        </MenuItem> */}
                        外墙保温
                    </MenuItem>

                </Menu>
            </div>
        );

    }

    setContent(){


        let display_data = InsulationData;
        let img = {
            height:"100%",
            width:"100%",
        }
        let content = {
            marginTop: '30px',
            marginLeft: '50px',
            width : '80%',
            // height: '600px',
        }
            return (
                <div style={content}>
                    
                    <List style={{marginLeft:'15%'}} grid={{gutter:12, column:2}}
                        dataSource={display_data}
                        pagination={paginationProps}
                        renderItem={item =>(
                            <List.Item>
                                <Card headStyle={{textAlign:"center"}} title={item.title}>
                                    {/* <Link to={{pathname:"/residential_details",query:{id:item.id,type:item.type}}}target="_blank"> */}
                                    <img style={img} src={item.imglocal_url}></img>
                                </Card>
                            </List.Item>
                        )}
                    />
                    
                </div>
            );
        
    
    }

    
}