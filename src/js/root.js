import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory} from 'react-router';
import 'antd/dist/antd.css';
import Index from './components/homepage/index';
import Industry from './components/industry/industry';
import ContactUs from './components/contactus/contactus';
import HumanResource from './components/human_resource/HumanResource';
import Culture from './components/culture/Culture';
import ProjectShow from './components/projectshow/ProjectShow';
import HRLeftList from './components/about_hongrui/hr_leftlist';
import NewsCenter from './components/news_center/news_center';
import ResidentialDetail from './components/industry/residential_detail';
import RouterSwitcher from './components/public_components/router_switcher';
import Footer from './components/public_components/footer';
import Headers from './components/public_components/header';


export default class Root extends React.Component{
    render(){
        return(
            <div>
            <Router history={hashHistory}>
                <Route path="/(**)" component={RouterSwitcher}></Route>
            </Router>
            </div>
        );
    };
}

ReactDOM.render(<Root/>,document.getElementById('maiContainer'));
