import React from 'react';
import Header from '../public_components/header';
import Footer from '../public_components/footer';
import { Pagination, Col } from 'antd';
import { List, Typography } from 'antd';
import {Row} from 'antd';
import styles from '../../../css/news_center.css';
import NewsList from './newsList';
import {newsData} from './newsData'


export default class NewsDetail extends React.Component {

    constructor(props){
        super(props);
        this.state={
            id: 0,
            title: 'default',
            content: 'default content'
        }
        this.state.id =  this.props.location.query.id;
        this.initData();
    }

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
                <img style={img} src='./src/images/header.jpg'/>
            </div>
        );
    }

    initData(){
        let data = newsData;
        console.log(data);
        data.forEach(ele => {
            if(ele.id == this.state.id){
                this.state.title = ele.title;
                this.state.content = ele.content;
            }
        });
    }
    
    render(){
        let backgroundColor = '#F3F3F3'

        let container = {
            minHeight: '600px',
            width: '100%',
            backgroundColor: backgroundColor,
            marginBottom: '50px',
            padding: '30px',
        };

        let title={
            display: 'flex',
            textAlign: 'center',
            height: '100px',
            width: '100%',
        }

        let content={
            height: '100%',
            marginLeft: 'auto'
            
        }

        return(
            <div>
                {this.setHeaderImage()}
                {/* 这里的row是用来把两边空出来的 */}
                <Row class="rowstyl">
                    <Col span={3}/>
                    <Col span={18} class="midcontainer">
                        <div style={container}>
                            <div style={title}>
                                <h2 style={{margin:'auto'}}>{this.state.title}</h2>
                        </div>

                        <div style={content} dangerouslySetInnerHTML={{__html:this.state.content}}>
                        </div>
                        </div>
                    </Col>
                    <Col span={3}/>
                </Row>
            </div>
        );
    };


}