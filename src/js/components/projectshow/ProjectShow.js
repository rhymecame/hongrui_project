import React from 'react';
import ContentLayout from '../public_components/content_layout';
import {Menu,Icon,Tabs,message,Form,Input,Button,Checkbox} from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';


export default class ProjectShow extends ContentLayout {

    constructor(props){
        super(props);
        this.state={
            id: 1,    
            imgSrc: '',
            projectName: '',
            projectDesc: '',
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
        console.log(this.props.location.query);
        this.state.imgSrc =  this.props.location.query.imgSrc;
        this.state.id = this.props.location.query.id;
        this.state.projectName = this.props.location.query.projectName;
        this.state.projectDesc = this.props.location.query.projectDesc;

        return (
            <div style={content}>
                <div  >
                    <img src={this.state.imgSrc} style={img}/>
                </div>

                <div style={desc}>
                    <div>
                        <h3 style={{display : 'inline'}}>工程名：</h3> {this.state.projectName}
                    </div>
                    <p/>
                    工程介绍：{this.state.projectDesc}
                </div>
            </div>
        );
    
    }
}