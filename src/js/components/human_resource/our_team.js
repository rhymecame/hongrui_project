import React from 'react';
import Header from '../public_components/header';
import Footer from '../public_components/footer';
import ContentLayout from '../public_components/content_layout';
import {Menu,Icon,Tabs,message,Form,Input,Button,Checkbox} from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';
import SubMenu from 'antd/lib/menu/SubMenu';
import {Row,Col} from 'antd';

export default class OurTeam extends React.Component {
    render(){
        let img = {
            width:"100%",
            height:"280px",
        }
        return (
            <div>
            <Row>
                <Col>
                    <h2>施工力量 Construction strength</h2>
                    <p style={{fontSize:17}}>
                    公司拥有施工人员1000人，同时可承接20--50万平米的施工，精细化的管理，专业的施工团队， 质优人和创企业品牌。
                    </p>
                
                    
                    <h2>我们的团队 Our Team</h2>
                    <p style={{fontSize:17}}>
                    高学历专业化的建造师、工程师、造价师为先导，技术施工专业化，安全防范为首的庞大的施工队伍，零事故零维修。
                    </p>

                    <div>
                        <img src='./src/images/team.jpg' style={img}></img>
                    </div>
                   
                </Col>
            </Row>
            </div>
        );
    }
}