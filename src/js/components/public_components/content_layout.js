import React from 'react';
import Header from './header';
import Footer from './footer';
import { Menu } from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';

export default class ContentLayout extends React.Component {

    /*内容页面的基类，
    可以通过继承该类，直接重写setMenu和setContent来修改其中的内容
    不需要重写render函数
    */
    constructor(props){
        super(props);
    }

    setMenu(){

    }

    setContent(){

    }

    //获取当前参数中的id值，一般情况下该值对应menu中被选中的item的key
    getCurrentSelectedId(){
        let id= this.props.location.query.id;
        if(id==undefined){
            id='1';
        }
        return id;
    }

    setHeaderImage(){
        let container = {
            width: '100%',
            height: '200px', 
            marginTop: '20px',
        };

        let img = {
            width: '100%',
            height: '100%', 
        };

        return (
            <div style={container}>
                <img style={img} src='./src/images/common.jpeg'/>
            </div>
        );
    }

    getView(){
        let container={
            width: '100%',
            minHeight: '600px', 
            display: 'flex',
            paddingLeft: '40px',
            paddingRight: '40px',
            marginTop: '20px',
            marginBottom: '20px',
        }
        
        
        let content = {
            width: '100%',
            height: '100%',
            minHeight: '600px',
            marginLeft: '10px',
            background: '#F7F7F7',
        };
        
        let menu = {
            // marginLeft: '100px',
            width: '20%',
            height: '100%',
            background: '#F4F4F4',
        }

        return(
            <div>
                {this.setHeaderImage()}
            <div style={container}>

                <div style={menu}>
                    {this.setMenu()}
                </div>

                <div  style={content}>
                {this.setContent()}
                </div>
            </div>
            </div>
        );

    };
    

    render(){  
        return(
            <div>
                {this.getView()}
            </div>  
        );
    };
}