import React from 'react';
import Header from '../public_components/header';
import Footer from '../public_components/footer';
import { Pagination, Col } from 'antd';
import { List, Typography } from 'antd';
import {Row} from 'antd';
import styles from '../../../css/news_center.css';
import NewsList from './newsList';
import {newsData, newsData1} from './newsData'


export default class NewsDetail extends React.Component {

    constructor(props){
        super(props);
        this.state={
            id: 0,
            title: 'default',
            content: 'default content',
            type:0,
        }
        this.state.id =  this.props.location.query.id;
        this.state.type = this.props.location.query.type;
        this.initData();
    }
    
    initData(){
        let data;
        console.log(data);
        if(this.state.type == 1)
            data = newsData1;
        else
            data = newsData;
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
                {/* 这里的row是用来把两边空出来的 */}
                <Row class="rowstyl">
                    <Col span={3}/>
                    <Col span={18} class="midcontainer">
                        <div style={container}>
                            <div style={title}>
                                <h2 style={{margin:'auto',fontSize:21}}>{this.state.title}</h2>
                        </div>

                        <div  class="in_html" style={content} dangerouslySetInnerHTML={{__html:this.state.content}}>
                        </div>
                        </div>
                    </Col>
                    <Col span={3}/>
                </Row>
            </div>
        );
    };


}