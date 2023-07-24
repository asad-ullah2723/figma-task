import React, { Component } from "react";
import ReviewData from "./reviewdata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillStar } from "react-icons/ai";
import './testimonial.css';
export default function TestimonialSlider() {
    const settings = {
        className: "left",
      centerMode: true,
      infinite: true,
      arrows:false,
      centerPadding: "20%",
      slidesToShow: 1,
      speed: 500,
      dots:true,
      autoplay:true,
      };
    return (
        <Slider {...settings}>
        {
          ReviewData.map((item, index) => {
            const { img, name, Designation, Text } = item
            return (
              <div key={index}>
                <div className="tslider-mein">
                <div className="tslider"  >
                    
                  <div ><div className="timage" ><img src={img} width="123px" height="123px" style={{borderRadius:"24px"}} /></div>
                  <div style={{textAlign:"center"}}><div className="tename">{name}</div></div>
                    <div className="tdesignation">{Designation}</div>
                    <div className="star" style={{color:"yellow", textAlign:"center"}}><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div>
                    </div>
                  <div className="tetext" >{Text}</div>
                </div>
                </div>
              </div>
            )
          })
        }
  
      </Slider>
    );
  }