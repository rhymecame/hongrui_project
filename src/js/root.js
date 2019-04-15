import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory} from 'react-router';
import 'antd/dist/antd.css';
import Index from './components/index';
import Industry from './components/industry';

export default class Root extends React.Component{
    render(){
        return(
            <div>
                <Router history={hashHistory}>
                    <Route exact path="/" component={Index}></Route>
                    <Route path="/industry" component={Industry}></Route>
                </Router>
            </div>
        );
    };
}

ReactDOM.render(<Root/>,document.getElementById('maiContainer'));
