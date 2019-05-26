import React from 'react';
import Header from '../public_components/header';
import Footer from '../public_components/footer';
import { Pagination, Col } from 'antd';
import { List, Typography } from 'antd';
import {Row} from 'antd';
import styles from '../../../css/news_center.css';
import NewsList from './newsList';
import NewsDetail from './newsDetail';
import {Router,Route,hashHistory, Redirect} from 'react-router';

export default class NewsCenter extends React.Component {

    setHeaderImage(){
        let container = {
            width: '100%',
            height: '200px', 
            marginTop: '20px',
        };

        let img = {
            width: '100%',
            height: '100%', 
        };

        return (
            <div style={container}>
                <img style={img} src='./src/images/common.jpeg'/>
            </div>
        );
    }
    
    render(){
        return(
            <div class="whole_container">
                {this.setHeaderImage()}
                <Router history={hashHistory}>
                    <Route exact path="/news_center" component={NewsList}></Route>
                    {/* {
                        路径 /news_center/:newsId  匹配后面有参数的路径，并且在后续组件中可以获得该参数
                    } */}
                    <Route path="/news_center/news_detail" component={NewsDetail}></Route>
                </Router>
            </div>

        );
    };


}