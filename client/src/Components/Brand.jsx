import React from "react";
import Slider from "react-slick";

//components
import { NextArrow,PrevArrow } from "../CarousalArrow";

const Brand = (props) => {
    const settings = {
        arrows:true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>,
      };
    return (
        <>
           <div className="w-24 h-24">
               <img
                  src={props.image}
                  alt="brand"
                  className="w-full h-full"
               />
           </div>
        </>
    );
};

export default Brand;