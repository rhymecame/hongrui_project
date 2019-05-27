import React, { Component } from "react";
import Slider from "react-slick";
import {Link} from 'react-router';
import { projectDetail } from "./projectDetailData";
import { Carousel } from "antd";

export default class ImgSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 0,
      cssEase: "linear"
    };

    const container={
      marginTop: '30px',
      width: '100%',
      color: '#333',
      height: '450px'
    };

    const projectShowSpan={
      fontSize:'20px',
      marginBottom: '20px',
    };
    const projectSpan={
      fontSize:'17px',
      textAlign: 'center',
      width: '100%',
      color:'black',
    };


    const block={
        backgroundSize: '90% 90%',
        display: 'flex',
    }


    const img={
      width: '97%',
      height: '300px',
      margin: 'auto',
      backgroundSize: '100% 100%',

    }

    const carousel={
        backgroundColor: '#F4F4F4',
    }

    console.log("projectDetail[1]");
    console.log(projectDetail);
    let projectName = projectDetail.map(item=>{return item.projectName});
    return (
      <div className="container" style={container}>
        <span style={{fontSize:21,color:'black'}}>经典工程</span>
        <div style={{height:'20px'}}></div>
        <Carousel {...settings} style={carousel}>
          <div style={block}>
            <Link to={{pathname: '/projectshow', query: projectDetail[1]}}>
              <img src={projectDetail[1].imgSrc} style={img}/>
            </Link>
            <div style={projectSpan}>{projectName[1]}</div>
          </div>
          <div style={block}>
          <Link to={{pathname: '/projectshow', query: projectDetail[2]}}>
              <img src={projectDetail[2].imgSrc} style={img}/>
            </Link>
            <div style={projectSpan}>{projectName[2]}</div>
          </div>
          <div >
          <Link to={{pathname: '/projectshow', query: projectDetail[3]}}>
              <img src={projectDetail[3].imgSrc} style={img}/>
            </Link>           
            <div style={projectSpan}>{projectName[3]}</div>
          </div>
          <div style={block}>
          <Link to={{pathname: '/projectshow', query: projectDetail[4]}}>
              <img src={projectDetail[4].imgSrc} style={img}/>
            </Link>           
            <div style={projectSpan}>{projectName[4]}</div>
          </div>
        </Carousel>
      </div>
    );
  }
}