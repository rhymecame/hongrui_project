import React from 'react';
import {Row,Col, Menu} from 'antd';
import {Link} from 'react-router';

const SubMenu = Menu.SubMenu;


export default class MidContainer extends React.Component {

    render(){
        return(
            <div>
                <Row style={{marginBottom:50,marginTop:50}}>
                    <Col span={4}></Col>
                    <Col span={3}>
                        <Menu mode="vertical"  >
                            {/* <Menu.Item key="1">
                            <Link to="/">集团简介</Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                            <Link to="/">董事长致辞</Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                            <Link to="/">集团资质</Link>
                            </Menu.Item>
                            <Menu.Item key="4">
                            <Link to="/">组织结构</Link>
                            </Menu.Item> */}
                            <SubMenu key="sub1" title={<span>Navigation One</span>}>
                            </SubMenu>
                            {/* <SubMenu key="sub1" title={<Link to="/">集团简介</Link>}>

                            </SubMenu>
                            <SubMenu key="sub1" title={<Link to="/">集团简介</Link>}>

                            </SubMenu>
                            <SubMenu key="sub1" title={<Link to="/">集团简介</Link>}>

                            </SubMenu> */}
                        </Menu>
                    </Col>
                    <Col span={12}>
                    </Col>
                    <Col span={4}></Col>
                </Row>
            </div>

        );

    };
}