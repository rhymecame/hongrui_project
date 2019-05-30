import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory} from 'react-router';
import 'antd/dist/antd.css';
import Index from "../homepage";
import Industry from "../industry/industry";
import Culture from "../culture/Culture";
import HumanResource from "../human_resource/HumanResource";
import ContactUs from "../contactus/contactus";
import ProjectShow from "../projectshow/ProjectShow";
import HRLeftList from "../about_hongrui/hr_leftlist";
import NewsCenter from "../news_center/news_center";
import ResidentialDetail from "../industry/residential_detail";
import Footer from './footer';
import Header from './header';
import ProductDetail from '../industry/product_detail';
import MaterialSupport from '../marerial_support/marerial_support';

export default class RouterSwitcher extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state={
    //         location: '',
    //     }
    // }

    render(){
        
        //每当当前路径和保存的路径不一样时才刷新，避免无限刷新
        //向header中传入当前的路径，以供选择menu被选取的状态
        // console.log(this.state.location+'1');
        console.log(this.props.location.pathname+'2');
        // if(this.state.location!=this.props.location.pathname){
        //     this.setState({
        //         location: this.props.location.pathname

        //     },()=>{
        //         console.log(this.state.location+'3');

        //     })
            
        // }
        // console.log(this.state.location+'4');

        return (
        <div>
            {/* <Header location={this.state.location}></Header> */}
            <Header location={this.props.location.pathname}></Header>
            <Router history={hashHistory}>
            <Route path="/" component={Index}></Route>
            {/* 所有路径下面改成 (/**) */}
            <Route path="/industry" component={Industry}></Route>
            <Route path="/culture" component={Culture}></Route>
            <Route path="/hr" component={HumanResource}></Route>
            <Route path="/contact_us" component={ContactUs}></Route>
            <Route path="/projectshow" component={ProjectShow}></Route>
            <Route path="/about_hongrui" component={HRLeftList}></Route>
            {/* 下面的**用于匹配路径，具体使用可以查，使得该页面下也可以跳转到新闻详情下去 */}
            <Route path="/news_center" component={NewsCenter}></Route>
            <Route path="/residential_details" component={ResidentialDetail}></Route>
            <Route path="/product_details" component={ProductDetail}></Route>
            <Route path="/material_support" component={MaterialSupport}></Route>
            </Router>
            <Footer></Footer>
        </div>
        );
    }
}