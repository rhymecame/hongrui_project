import React from 'react';
import ContentLayout from '../public_components/content_layout';
import {Menu,Icon,Tabs,message,Form,Input,Button,Checkbox} from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';


export default class ProjectShow extends ContentLayout {

    constructor(props){
        super(props);
        this.state={    
            imgSrc: ''
        };
    }

    setMenu(){
        return (
            <div>
                <Menu
                    defaultSelectedKeys={['1']}>
                    <MenuItem key="1">
                        经典工程
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

        let img = {
            width : '100%',
            height: '500px',
        }

        let desc = {
            marginTop: '30px',
        }
        //获取从路由传过来的参数来取得相应的图片
        this.state.imgSrc =  this.props.location.query.imgSrc;
        return (
            <div style={content}>
                <div  >
                    <img src={this.state.imgSrc} style={img}/>
                </div>

                <div style={desc}>
                    工程介绍：abcdefghijklmn
                </div>
            </div>
        );
    
    }
}