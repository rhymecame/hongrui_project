import React, { Component } from "react";
import Slider from "react-slick";
import { Carousel } from "antd";
import {Link} from 'react-router';

export default class ImgSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      autoplay:true,
      slidesToShow: 3,
      speed: 500,
      slidesToScroll: 1,
      accessibility: true,
    };

    const container={
      marginTop: '30px',
      marginLeft: '90px',
      width: '85%',
      color: '#333',
    };

    const projectShowSpan={
      fontSize:'20px',
      marginBottom: '20px',
    };
    const projectSpan={
      fontSize:'15px',
      textAlign: 'center',
      marginLeft: '200px'
    };

    const block={

    };

    const img={
      width: '95%',
      height: '300px',
      backgroundSize: '100% 100%',
    }

    return (
      <div className="container" style={container}>
        <span style={projectShowSpan}>经典工程</span>
        <div style={{height:'20px'}}></div>
        <Carousel {...settings}>
          <div style={block}>
            <Link to={{pathname: '/projectshow', query: {imgSrc: './src/images/1.jpg'}}}>
              <img src="./src/images/1.jpg" style={img}/>
            </Link>

            <span style={projectSpan}>工程1</span>
          </div>
          <div style={block}>
            <img src="./src/images/2.png" style={img} />
            <span style={projectSpan}>工程2</span>
          </div>
          <div style={block}>
            <img src="./src/images/3.jpg" style={img} />
            <span style={projectSpan}>工程3</span>
          </div>
          <div style={block}>
            <img src="./src/images/4.jpg"  style={img}/>
            <span style={projectSpan}>工程4</span>
          </div>
        </Carousel>
        <div style={{height:'20px'}}></div>
      </div>
    );
  }
}