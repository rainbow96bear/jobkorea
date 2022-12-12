import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "./images/banner1.png";
import banner2 from "./images/banner2.png";
import banner3 from "./images/banner3.png";
import banner4 from "./images/banner4.png";
import banner5 from "./images/banner5.png";

const SmallCarouselComponent = () => {
  const settings = {
    infinite: true,
    speed: 5,
    slideToshow: 1,
    slideToScroll: 1,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 5000,
    loop: true,
    arrows: false,
  };

  return (
    <SmallCarouselBox>
      <div className="carousel">
        <Slider {...settings}>
          <img src={banner1} alt="" />

          <img src={banner2} alt="" />

          <img src={banner3} alt="" />

          <img src={banner4} alt="" />

          <img src={banner5} alt="" />
        </Slider>
      </div>
    </SmallCarouselBox>
  );
};

export default SmallCarouselComponent;

const SmallCarouselBox = styled.div`
  width: 20%;
  background-color: #e8ecef;
  margin: 0 8px 0 8px;
  img {
    height: 120px;
  }
`;
