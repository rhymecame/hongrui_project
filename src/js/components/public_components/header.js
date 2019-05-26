import React from 'react';
import ReactDOM from 'react-dom';
import {Row,Col, Modal} from 'antd';
import {Menu,Icon,Tabs,message,Form,Input,Button,Checkbox} from 'antd';
import styles from '../../../css/webSite.css';
import {Link} from 'react-router';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;

const pathPrefixs = [
    '',
    '',
    'about_hongrui',
    'industry',
    'material_support',
    'news_center',
    'culture',
    'hr',
    'contact_us',
];



export default class Header extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         curKey:'1',
    //     };    
    //     // this.state ={
    //     //     curKey: props.location,  //默认放个0，代表哪个项都没选中
    //     // };
    //     // this.getCurKey(this.props);
    // };

    // componentWillReceiveProps(nextProps){
    //     this.getCurKey(nextProps);
    // }

    getCurKey(props){
        //获得路径中第一个/与第二个/之间的内容，即一级目录
        console.log(props.location);
        let prefix = props.location.split('/')[1];

        let curKey = '0';
        pathPrefixs.forEach((ele, index) => {
            if(prefix == ele){
                curKey = ''+index;
            }
        });
        // console.log('curKey='+curKey + ' stateKey='+this.state.curKey);
        // //只有保存的和当前的不一样时才更新state
        return curKey;
        // this.setState(
        //     {
        //         curKey: curKey
        //     }
        // );
    }

    setModalVisible(value){
        this.setState({modalVisible:value});
    };

    handleSubmit(e){
        //page starts submit
        
    };
    render(){
        // let {getFieldProps} = this.props.form;
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
                    <Col span={4}>
                        <Link to="/" class="logo">
                            <img src="./src/images/hr_logo.jpg" alt="logo" ></img>

                            <span style={{fontSize: '30px', marginLeft: '15px'}}>宏瑞基业</span>
                        </Link>
                    </Col>
                    
                    <Col span={16}>
                        <Menu 
                        id="menuPosition"
                        class="menuPosition" 
                        mode="horizontal" 
                        selectedKeys = {[this.getCurKey(this.props)]}
                        // onClick={this.handleClick.bind(this)} 
                        >
                        {/* Menu.Item的key属性是关联Menu的selectedKeys的，一定要保持一致 */}
                            <Menu.Item key="1">
                            <Link class="link_fontsize" to="/">首页</Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                            <Link class="link_fontsize" to="/about_hongrui">关于宏瑞</Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                
                                <Link class="link_fontsize" to="/industry">集团业务</Link>
                            </Menu.Item>
                            <Menu.Item key="4">
                            <Link class="link_fontsize" to="/material_support">材料供应</Link>
                            </Menu.Item>
                            <Menu.Item key="5">
                            <Link class="link_fontsize" to="/news_center">新闻中心</Link>
                            </Menu.Item>
                            <Menu.Item key="6">
                            <Link class="link_fontsize" to="/culture">企业文化</Link>
                            </Menu.Item>
                            <Menu.Item key="7">
                            <Link class="link_fontsize" to="/hr">人力资源</Link>
                            </Menu.Item>
                            <Menu.Item key="8">
                            <Link class="link_fontsize" to="/contact_us">联系我们</Link>
                            </Menu.Item>
                            {/* {userShow} */}
                        </Menu>
                    </Col>
                    <Col span={3}></Col>
                </Row>
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
                    
                    
                
            </header>

        );
    };
}
// export default Header = Form.create({})(Header);