import React from 'react';
import { Row, Col } from 'antd';
import { Tabs, Carousel } from 'antd';
import styles from '../../../css/webSite.css';
import NewsBlock from './news_block';
import BussinessShower from './bussiness_shower';
import ImgScoller from './img_slider';
import NewsBlock2 from './news_block2';
const TabPane = Tabs.TabPane;
require('../../../css/custom_tab.css')

export default class NewContainer extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            autoplay: true
        };

        const img = {
            width: "100%",
            height: "100%",
        }
        return (
            <div>
                <Row>
                    <Col span={24} class="topcontainer">
                        <div>
                            <Carousel  {...settings}>
                                <div><img style={img} src="./src/images/1.png" /></div>
                                <div><img style={img} src="./src/images/2.png" /></div>
                                <div><img style={img} src="./src/images/3.jpg" /></div>
                                <div><img style={img} src="./src/images/4.jpg" /></div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
                <Row class="rowstyl">
                    <Col span={2} />
                    <Col span={12} class="midcontainer">
                        <div class="leftContainer">
                            <div class="carousel2">
                                <Carousel  {...settings}>
                                    <div><img class="imghandle" src="./src/images/xuexi1.jpg" /></div>
                                    <div><img class="imghandle" src="./src/images/xuexi2.jpg" /></div>
                                    <div><img class="imghandle" src="./src/images/xuexi3.jpg" /></div>
                                </Carousel>
                            </div>
                        </div>
                    </Col>

                    <Col span={8}>
                        <div style={{paddingTop: '2.1%'}}>
                            <Tabs class="tabs_news" >
                                <TabPane tab='公司动态' key="1" >
                                    {/* <NewsBlock count={22} type="hongrui" width="100%" bordered="false"></NewsBlock> */}
                                    <NewsBlock class="news_block"></NewsBlock>

                                </TabPane>
                                <TabPane tab="行业资讯" key="2">
                                    {/* <NewsBlock count={22} type="hongrui" width="100%" bordered="false"></NewsBlock> */}
                                    <NewsBlock2 class="news_block"></NewsBlock2>

                                </TabPane>

                            </Tabs>
                        </div>
                    </Col>
                    <Col span={2} />
                </Row>
                <Row class="rowstyl">
                    <Col span={2} />
                    <Col span={20} class="midcontainer">
                        <BussinessShower></BussinessShower>
                    </Col>
                    <Col span={2} />
                </Row>
                <Row class="rowstyl">
                    <Col span={2} />
                    <Col span={20} class="midcontainer">
                        <ImgScoller />
                    </Col>
                    <Col span={2} />
                </Row>
            </div>
        );

    };
}