import React from 'react';
import ContentLayout from "../public_components/content_layout";
import {Menu,Icon,Tabs,message,Form,Input,Button,Checkbox} from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';


export default class ContactUs extends  ContentLayout{
    constructor(props){
        super(props);
    }


    setMenu(){
        return (
            <div>
                <Menu
                    defaultSelectedKeys={['1']}>
                    <MenuItem key="1" style={{fontSize:20,color:"black"}}>
                        联系我们
                    </MenuItem>
                </Menu>
            </div>
        );
        
    }


    setContent(){
        let content = {
            textAlign: 'center', //水平居中
            marginTop: '30px',
            width : '100%',
            height: '100%',
        }
        
        let map = {
            width : '80%',
            height: '100%',
            // backgroundSize: '100% 100%',
            marginBottom:30,
            
        }


        return (
            <div>
                <div style={content}>
                    <img style={map} src="./src/images/location.jpg"/>
                    <h2>北京宏瑞基业建筑工程有限公司</h2>
                    <p style={{fontSize:17}}>地址：北京市大兴区天华大街5号院 （绿地启航国际12号楼307) </p>
                    <p style={{fontSize:17}}>手机：13717696303 </p>
                    <p style={{fontSize:17}}>邮箱号：Beijinghrjy@163.com</p>
                    
                </div>
                
            </div>
        );
    
    }
}