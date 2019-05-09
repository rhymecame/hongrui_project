import React from 'react';
import {Card} from 'antd';
import {Router,Route,Link,browserHistory} from 'react-router';
import styles from '../../../css/webSite.css';
import { newsData } from '../news_center/newsData';

export default class NewsBlock extends React.Component{
    constructor(){
        super();
        this.state = {
            news:''
        };
    }

    // componentWillMount(){
    //     var myFetchOptions = {
    //         method:'GET'
    //     };
    //     fetch("http://",myFetchOptions).then(response=>response.json()).then(json=>this.setState({news:json}));
    // };
    componentWillMount(){
        // this.setState({news:[{title:"习近平主席在今天发表重要讲话，改变了中国。邓小平是中国的总设计师。",uniqueky:"hehe"},{title:"习近平主席发表重要讲话，改变了中国。",uniqueky:"hehe"},{title:"习近平主席发表重要讲话，改变了中国。",uniqueky:"hehe"},{title:"习近平主席发表重要讲话，改变了中国。",uniqueky:"hehe"},{title:"习近平主席发表重要讲话，改变了中国。",uniqueky:"hehe"},{title:"习近平主席发表重要讲话，改变了中国。",uniqueky:"hehe"},{title:"习近平主席发表重要讲话，改变了中国。",uniqueky:"hehe"},{title:"习近平主席发表重要讲话，改变了中国。",uniqueky:"hehe"},{title:"习近平主席发表重要讲话，改变了中国。",uniqueky:"hehe"},{title:"习近平主席发表重要讲话，改变了中国。",uniqueky:"hehe"},{title:"习近平主席发表重要讲话，改变了中国。",uniqueky:"hehe"}]});
        this.setState({news: newsData});
    }

    render(){
        const {news} = this.state;
        console.log(news);
        const newsList = news.length ?
        news.map((newsItem,index)=>(
            <li class="newsTitle" key={index}>
                {/* <Link to={`details/${newsItem.uniqueky}`} target="_blank">
                    {newsItem.title}
                </Link> */}
                <Link to={{pathname: '/news_center/news_detail', query: {id: newsItem.id}}}>
                {newsItem.title}
                </Link>
            </li>
        ))
        :
        '没有加载到任何新闻';
        return (
            <div class="newsList">
                {/* <Card class="news_card">
                    <ul class="ulstyl">
                    {newsList}
                    </ul>
                    
                </Card> */}
                 <ul class="ulstyl">
                    {newsList}
                </ul>
            </div>

        );
    };
}