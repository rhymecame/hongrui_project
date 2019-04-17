import React from 'react';
import {Row,Col, Modal} from 'antd';
import {Menu,Icon,Tabs,message,Form,Input,Button,Checkbox} from 'antd';
import styles from '../../../css/webSite.css';
import {Link} from 'react-router';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;

class Header extends React.Component{
    // constructor(){
    //     super();
    //     this.state ={
    //         current:'hongrui',
    //         // modalVisible:false,
    //         // action:'login',
    //         // hasLogined:false,
    //         // userNickName:'',
    //         // userid:0
    //     };
    // };
    // setModalVisible(value){
    //     this.setState({modalVisible:value});
    // };
    handleClick(e){
        // if(e.key === "register"){
        //     this.setState({current:'register'});
        //     this.setModalVisible(true);
        // }
        // else{
        //     {
        //         this.setState({current:e.key});
        //     }
        // }
        this.setState({current:e.key});
    };
    handleSubmit(e){
        //page starts submit
        
    };
    render(){
        let {getFieldProps} = this.props.form;
        // const userShow = this.state.hasLogined
        // ?<Menu.Item key="logout" class="register">
        //     <Button type="primary" htmlType="button">{this.state.userNickName}</Button>
        //     &nbsp;&nbsp;
        //     <Link target="_blank">
        //         <Button type="dashed" htmlType="button">办公系统</Button>
        //     </Link>
        //     &nbsp;&nbsp;
        //     <Button type="ghost" htmlType="button">登出</Button>
        // </Menu.Item>
        // :
        // <Menu.Item key="register" class="register">
        //     <Icon type="appstore"/>注册/登录
        // </Menu.Item>;

        return(
            <header>
                <Row>
                    <Col span={1}></Col>
                    <Col span={3}>
                        <a href="/" class="logo">
                            <img src="./src/images/logo.png" alt="logo" ></img>
                            <span>宏瑞基业</span>
                        </a>
                    </Col>
                    <Col span={2}></Col>
                    <Col span={11}>
                        <Menu class="menuPosition" mode="horizontal" onClick={this.handleClick.bind(this)} >
                            <Menu.Item key="hongrui">
                            <Link to="/">首页</Link>
                            </Menu.Item>
                            <Menu.Item key="newcenter">
                                关于宏瑞
                            </Menu.Item>
                            <Menu.Item key="dangjian">
                                
                                <Link to="/industry">旗下产业</Link>
                            </Menu.Item>
                            <Menu.Item key="yewu">
                                新闻中心
                            </Menu.Item>
                            <Menu.Item key="science">
                            <Link to="/culture">企业文化</Link>
                            </Menu.Item>
                            <Menu.Item key="culture">
                            <Link to="/hr">人力资源</Link>
                            </Menu.Item>
                            <Menu.Item key="hr">
                            <Link to="/contact_us">联系我们</Link>
                            </Menu.Item>
                            {/* {userShow} */}
                        </Menu>
                        {/* <Modal title="办公系统" wrapClassName="vertical-center-modal" visible={this.state.modalVisible}
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
                        </Modal> */}
                    </Col>
                    <Col span={7}></Col>
                </Row>
            </header>

        );
    };
}
export default Header = Form.create({})(Header);