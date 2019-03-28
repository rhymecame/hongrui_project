import React from 'react';
import {Row,Col, Modal} from 'antd';
import {Menu,Icon,Tabs,message,Form,Input,Button,Checkbox} from 'antd';
import styles from '../../css/webSite.css';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;

class Header extends React.Component{
    constructor(){
        super();
        this.state ={
            current:'hongrui',
            modalVisible:false,
            action:'login',
            hasLogined:false,
            userNickName:'',
            userid:0
        };
    };
    setModalVisible(value){
        this.setState({modalVisible:value});
    };
    handleClick(e){
        if(e.key === "register"){
            this.setState({current:'register'});
            this.setModalVisible(true);
        }
        else{
            {
                this.setState({current:e.key});
            }
        }
    };
    handleSubmit(e){
        //page starts submit
        
    };
    render(){
        let {getFieldProps} = this.props.form;
        const userShow = this.state.hasLogined
        ?<Menu.Item key="logout" class="register">
            <Button type="primary" htmlType="button">{this.state.userNickName}</Button>
            &nbsp;&nbsp;
            <Link target="_blank">
                <Button type="dashed" htmlType="button">办公系统</Button>
            </Link>
            &nbsp;&nbsp;
            <Button type="ghost" htmlType="button">登出</Button>
        </Menu.Item>
        :
        <Menu.Item key="register" class="register">
            <Icon type="appstore"/>注册/登录
        </Menu.Item>;

        return(
            <header>
                <Row>
                    <Col span={1}></Col>
                    <Col span={3}>
                        <a href="/" class="logo">
                            <img src="./src/images/logo.png" alt="logo" ></img>
                            <span>宏瑞建筑</span>
                        </a>
                    </Col>
                    <Col span={19}>
                        <Menu mode="horizontal" onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]}>
                            <Menu.Item key="hongrui">
                                <Icon type="appstore"/>关于宏瑞
                            </Menu.Item>
                            <Menu.Item key="newcenter">
                                <Icon type="appstore"/>新闻中心
                            </Menu.Item>
                            <Menu.Item key="dangjian">
                                <Icon type="appstore"/>党的建设
                            </Menu.Item>
                            <Menu.Item key="yewu">
                                <Icon type="appstore"/>业务领域
                            </Menu.Item>
                            <Menu.Item key="science">
                                <Icon type="appstore"/>科技创新
                            </Menu.Item>
                            <Menu.Item key="culture">
                                <Icon type="appstore"/>文化品牌
                            </Menu.Item>
                            <Menu.Item key="hr">
                                <Icon type="appstore"/>人力资源
                            </Menu.Item>
                            <Menu.Item key="zhuanti">
                                <Icon type="appstore"/>专题专栏
                            </Menu.Item>
                            {userShow}
                        </Menu>
                        <Modal title="办公系统" wrapClassName="vertical-center-modal" visible={this.state.modalVisible}
                        onCancel = {()=>this.setModalVisible(false)}
                        onOk={()=>this.setModalVisible(false)} okText="关闭">
                        <Tabs type="card">
                            <TabPane tab="注册" key="2"> 
                                <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
                                    <FormItem label="账户">
                                        <Input placeholder="请输入您的账号" {...getFieldProps('r_userName')}/>
                                    </FormItem>
                                    <FormItem label="密码">
                                        <Input type="password" placeholder="请输入您的密码" {...getFieldProps('r_password')}/>
                                    </FormItem>
                                    <FormItem label="确认密码">
                                        <Input type="password" placeholder="请再次输入您的密码" {...getFieldProps('r_uconfirmPassword')}/>
                                    </FormItem>
                                    <Button type="primary" htmlType="submit">注册</Button>
                                </Form>

                            </TabPane>
                        </Tabs>
                        </Modal>
                    </Col>
                    <Col span={1}></Col>
                </Row>
            </header>

        );
    };
}
export default Header = Form.create({})(Header);