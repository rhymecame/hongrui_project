import React from 'react';
import ContentLayout from '../public_components/content_layout';
import {Menu} from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';
import SubMenu from 'antd/lib/menu/SubMenu';
import styles from '../../../css/industry.css';

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
                        title="资本经营" >
                        <MenuItem class="left_menu"  key="1">
                            宏瑞基业基础建设
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
        
        
        <img style={img} src='./src/images/infra.jpeg'/>
        
        
        );

    }
}