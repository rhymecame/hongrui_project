import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory} from 'react-router';
import 'antd/dist/antd.css';
import Index from './components/index';

export default class Root extends React.Component{
    render(){
        return(
            <div>
                <Index></Index>
            </div>

        );
    };
}

ReactDOM.render(<Root/>,document.getElementById('maiContainer'));
