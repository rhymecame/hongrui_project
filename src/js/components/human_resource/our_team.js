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
            height:"360px",
        }
        return (
            <div>
            <Row>
                <Col>
                    <h2>施工力量 Construction strength</h2>
                    <p style={{fontSize:17}}>
                    公司拥有管理人员48人，施工班组20多个，现场施工人员可达1000人，公司同时可承接20--80万平米的施工，公司秉承“精细化的管理，专业的施工团队，质优人和创企业品牌”。
                    </p>
                
                    
                    <h2>我们的团队 Our Team</h2>
                    <p style={{fontSize:17}}>
                    高学历专业化的建造师、工程师、设计师、造价师为先导，技术施工专业化，安全防范为首的庞大的施工队伍，零事故零维修。
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
