import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory} from 'react-router';
import 'antd/dist/antd.css';
import Index from './components/homepage/index';
import Industry from './components/industry/industry';
import ContactUs from './components/contactus/contactus';
import HumanResource from './components/human_resource/HumanResource';
import Culture from './components/culture/Culture';

export default class Root extends React.Component{
    render(){
        return(
            <div>
                <Router history={hashHistory}>
                    <Route exact path="/" component={Index}></Route>
                    <Route path="/industry" component={Industry}></Route>
                    <Route path="/culture" component={Culture}></Route>
                    <Route path="/hr" component={HumanResource}></Route>
                    <Route path="/contact_us" component={ContactUs}></Route>
                </Router>
            </div>
        );
    };
}

ReactDOM.render(<Root/>,document.getElementById('maiContainer'));
