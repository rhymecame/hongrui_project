import React from 'react';
import { Row, Col, Card, Divider, List, Menu, Carousel, Collapse } from 'antd';
import styles from '../../../css/webSite.css';
import { element } from 'prop-types';




export default class BussinessShower extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cur_selected: 0,
            menu_titles: [
                {
                    title: '房屋建筑工程',
                    index: 0,
                },
                {
                    title: '基础建设',
                    index: 1,
                },
                {
                    title: '环保建材',
                    index: 2,
                },

            ],
            total_height: 454,
            picLists: [
                {
                    list: [
                        "./src/images/5.jpg",
                        "./src/images/6.jpg",
                        "./src/images/7.jpg",
                    ],
                },
                {
                    list: [
                        "./src/images/1.jpg",
                        "./src/images/2.jpg",
                        "./src/images/3.jpg",
                    ]
                },
                {
                    list: [
                        "./src/images/4.jpg",
                    ]
                }
            ],
        };
    }

    onMouseEnter(item) {
        console.log(item);
        this.setState((preState) => (
            {
                cur_selected: item.index,
            }
        ));
    }

    getMenuList() {
        const titleFontSize = '20px';
        const selectedBackgroundColor = '#2995fc';
        const unselectedBackgroundColor = '#ffffff';
        const selectedFontColor = '#ffffff';
        const unselectedFontColor = '#000000';

        const menu_titles = this.state.menu_titles;
        const menu_count = menu_titles.length;
        const title_height = (this.state.total_height / menu_count).toFixed(0).concat('px');
        let commonStyle = {
            textAlign: 'center', //水平居中
            lineHeight: title_height, //竖直居中
            fontSize: titleFontSize,
            height: title_height,
        };
        let unSelectedStyle = {
            color: unselectedFontColor,
            backgroundColor: unselectedBackgroundColor
        }

        let selectedStyle = {
            color: selectedFontColor,
            backgroundColor: selectedBackgroundColor
        };
        Object.assign(selectedStyle, commonStyle);
        Object.assign(unSelectedStyle, commonStyle);

        

        menu_titles.map
        return (
            <div>
                <List
                    bordered='true'
                    dataSource={menu_titles}
                    renderItem={item => {
                        let index = item.index;
                        let selected = this.state.cur_selected;
                        return  (
                            <List.Item
                                style={selected == index ?selectedStyle:unSelectedStyle}
                                onMouseEnter={this.onMouseEnter.bind(this, item)}
                            >
                                {item.title}
                            </List.Item>
                        );
                    }
                    }
                >
                </List>
            </div>
        );
    }

    render() {
        const style = {
            height: this.state.total_height.toFixed(0).concat('px'),
        };

        //将图片大小规范
        const imgStyle = {
            width: '100%',
            height: style.height,
            backgroundSize: '100% 100%',
        }

        const carouselSettings = {
            dots:true,
            infinite:true,
            speed:500,
            slidesToShow:1,
            autoplay:true,
        };

        return (
            <div>
                {/* 和上面的内容隔开 */}
                < div style={{ height: '50px' }} />

                < Row >
                    <Col span={6} style={style}>
                        {this.getMenuList()}

                    </Col>
                    <Col span={18} style={style}>
                        <Carousel {...carouselSettings}
                        style={style}
                            >
                            {this.state.picLists[this.state.cur_selected].list.map(item => {
                                return <div><img style={imgStyle} src={item} /></div>;
                            })}
                        </Carousel>
                    </Col>
                </Row >
            </div >
        );
    }
}