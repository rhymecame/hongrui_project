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
                    <h1>施工力量 Construction strength</h1>
                    <p style={{fontSize:17}}>公司拥有施工人员1000人，同时可承接20--50万平米的施工，精细化的管理，专业的施工团队，
                    质优人和创企业品牌。</p>
                    <h1>我们的团队</h1>
                    <p style={{fontSize:17}}>
                    高学历专业化的建造师、工程师、造价师为先导，技术施工专业化，安全防范为首的庞大的施工队伍，零事故零维修。
                    </p>
                    
                    
                </div>
            </div>
        );
    
    }
}