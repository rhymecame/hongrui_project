import React from 'react';
import Header from '../public_components/header';
import Footer from '../public_components/footer';
import ContentLayout from '../public_components/content_layout';
import {Menu,Icon,Tabs,message,Form,Input,Button,Checkbox} from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';
import SubMenu from 'antd/lib/menu/SubMenu';

export default class Introduction extends React.Component {
    render(){
        return (
            <div style={{width: '70%'}}>
                <h2>公司简介</h2>
                <p/>
                北京宏瑞基业建筑工程有限公司成立于2011年5月，公司位于北京市大兴区天华大街
                5号院，注册资金5000万元，公司拥有一支坚强的领导班子，并设多个部门，保障各项工程总体规划和运营
            </div>
        );
    }
}