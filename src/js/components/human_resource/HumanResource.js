import React from 'react';
import Header from '../public_components/header';
import Footer from '../public_components/footer';
import ContentLayout from '../public_components/content_layout';
import {Menu,Icon,Tabs,message,Form,Input,Button,Checkbox} from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';

export default class HumanResource extends ContentLayout {

    setMenu(){
        return (
            <div>
                <Menu
                    defaultSelectedKeys={['1']}>
                    <MenuItem key="1">
                        人力资源
                    </MenuItem>
                </Menu>
            </div>
        );
        
    }


    setContent(){
        let content = {
            marginTop: '30px',
            marginLeft: '50px',
            width : '80%',
            height: '100%',
        }
        
        return (
            <div>
                <div  style={content}>
                    公司秉承：<h2>一张蓝图绘制到底，精益求精创品忧</h2>
                    <p/>
                    <p/>
                    质优拓市场，诚信赢未来，
                    人文为准则。在开放式整合，行业整合，信息共享，共赢未来的政策指引下，与行业朋友携手前进。
                    不忘初心，砥砺前行，为打造业精人和的新型企业而努力奋进
                </div>
            </div>
        );
    
    }
}