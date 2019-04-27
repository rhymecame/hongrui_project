import React from 'react';
import ContentLayout from '../public_components/content_layout';
import {Menu} from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';
import styles from '../../../css/industry.css';

export default class GreenWisdom extends ContentLayout{

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
                    
                        <MenuItem class="left_menu" style={{fontSize:20}} key="1">
                            绿色智造   
                        </MenuItem>
                </Menu>
            </div>
        );

    }

    setContent(){

        // let container = {
        //     width: '80%',
        //     height: '100%', 
        //     marginTop: '30%',
        //     marginLeft:'30%',
        //     marginRight:'30%',
        //     marginBottom:'30%',
        // };


        let img = {
            width: '100%',
            height: '100%', 
        };

        return (
        
        
        <img style={img} src='./src/images/header.jpg'/>
        
        
        );

    }
}