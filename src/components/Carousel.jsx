import React from "react";
import {CarouselData} from "./CarouselData";
import Linkspfeil from '../assets/Linkspfeil.svg'
import Rechtspfeil from '../assets/Rechtspfeil.svg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function Carousel() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="w-[20px] flex absolute inset-y-0 right-0 md:w-[50px]"
        onClick={onClick}
      >
        <img src={Rechtspfeil} alt="links" />
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className='w-[20px] flex absolute inset-y-0 left-0 md:w-[50px]'
        onClick={onClick}
      >
        <img src={Linkspfeil} alt="links" />
      </div>
    );
  }
  return ( 
    <div className="w-full mt-[100px]">
      <Slider {...settings}>
          {CarouselData.map((card, index) => { return (
              <div className="px-[1em] py-[3em] h-[500px] shadow-xl" key={index} >
                <img src={card.image} alt="rechts" />
                <p className="mt-[2em]">{card.content}</p>
                <p className="mt-[2em]">{card.author}</p>
                <p className="text-[#676767]">{card.position}</p>
              </div>
            )})}
      </Slider>
  </div>
  );
}
export default Carousel;