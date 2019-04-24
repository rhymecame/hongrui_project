import React from 'react';
import {Row,Col} from 'antd';
import {Tabs,Carousel} from 'antd';
import styles from '../../../css/webSite.css';
import NewsBlock from './news_block';
import BussinessShower from './bussiness_shower';
import ImgScoller from './img_slider';
const TabPane = Tabs.TabPane;
export default class NewContainer extends React.Component{
    render(){
        const settings = {
            dots:true,
            infinite:true,
            speed:500,
            slidesToShow:1,
            autoplay:true
        };
        return(
            <div>
                <Row>
                    <Col span={24} class="topcontainer">  
                        <div>
                            <Carousel  {...settings}>
                                <div><img class="topimghandle" src="./src/images/1.jpg"/></div>
                                <div><img class="topimghandle" src="./src/images/2.png"/></div>
                                <div><img class="topimghandle" src="./src/images/3.jpg"/></div>
                                <div><img class="topimghandle" src="./src/images/4.jpg"/></div>
                            </Carousel>
                        </div>    
                    </Col>
                </Row>
                <Row class="rowstyl">
                    <Col span={2}/>
                    <Col span={12} class="midcontainer">
                        <div class="leftContainer">
                            <div class="carousel2">
                                <Carousel  {...settings}>
                                    <div><img class="imghandle" src="./src/images/5.jpg"/></div>
                                    <div><img class="imghandle" src="./src/images/6.jpg"/></div>
                                    <div><img class="imghandle" src="./src/images/7.jpg"/></div>
                                    <div><img class="imghandle" src="./src/images/8.jpg"/></div>
                                </Carousel>
                            </div>
                        </div>
                    </Col>
                    
                    <Col span={8}>
                        <Tabs class="tabs_news">
                            <TabPane  tab="公司要闻" key="1">
                                {/* <NewsBlock count={22} type="hongrui" width="100%" bordered="false"></NewsBlock> */}
                                <NewsBlock width="100%" bordered="true"></NewsBlock>

                            </TabPane>
                            <TabPane tab="行业资讯" key="2">
                                {/* <NewsBlock count={22} type="hongrui" width="100%" bordered="false"></NewsBlock> */}
                                <NewsBlock width="100%" bordered="false"></NewsBlock>

                            </TabPane>
                            
                        </Tabs>
                    </Col>
                    <Col span={2}/>
                </Row>
                <BussinessShower></BussinessShower>
                <ImgScoller/>
            </div>
        );

    };
}