import React from "react";
import Slider from "react-slick"; 

//components
import DeliveryCategory from "./DeliveryCategory";
import { NextArrow,PrevArrow } from "../CarousalArrow";


const DeliveryCarousal = () => {
    const categories = [
    {
        image:"https://b.zmtcdn.com/data/o2_assets/7e83ad932f340bacd71bd7e891ede6541632716696.png",
        title:"Biryani",
    },
    {
        image:"https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png",
        title:"Dosa",
    },
    {
        image:"https://b.zmtcdn.com/data/o2_assets/adbe5236974520ecba7cb9f47e4c92011632716658.png",
        title:"Chicken",
    },
    {
        image:"https://b.zmtcdn.com/data/o2_assets/9428a39fba2a97f7470b8f3f26af86af1632716606.png",
        title:"Paneer",
    },
    {
        image:"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
        title:"Pizza",
    },
    {
        image:"https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png",
        title:"Fried Rice",
    },
    {
        image:"https://b.zmtcdn.com/data/o2_assets/1251357e34c4293f762072ecdd7816a31632716606.png",
        title:"Noodle",
    },
];
const settings = {
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>,
  };
    return (
        <>
          <h1 className="text-xl mb-4 font-semibold">Inspiration for your first order</h1>
          <div className="lg:hidden flex gap-3 lg:gap-0 flex-wrap justify-between">
           {categories.map((food) => (
               <DeliveryCategory {...food}/>
           ))}   
          </div>
          <div className="hidden lg:block">
              <Slider {...settings}>
               {categories.map((food) => (
               <DeliveryCategory {...food}/>
           ))}   
              </Slider>
          </div>
        </>
    );
};

export default DeliveryCarousal;