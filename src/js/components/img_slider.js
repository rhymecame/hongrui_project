import React, { Component } from "react";
import Slider from "react-slick";
import { Carousel } from "antd";

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
        <span style={projectShowSpan}>工程展示</span>
        <div style={{height:'20px'}}></div>
        <Carousel {...settings}>
          <div style={block}>
            <img src="http://placekitten.com/g/400/200" style={img}/>
            <span style={projectSpan}>工程1</span>
          </div>
          <div style={block}>
            <img src="http://placekitten.com/g/400/200" style={img} />
            <span style={projectSpan}>工程2</span>
          </div>
          <div style={block}>
            <img src="http://placekitten.com/g/400/200" style={img} />
            <span style={projectSpan}>工程3</span>
          </div>
          <div style={block}>
            <img src="http://placekitten.com/g/400/200"  style={img}/>
            <span style={projectSpan}>工程4</span>
          </div>
        </Carousel>
        <div style={{height:'20px'}}></div>
      </div>
    );
  }
}