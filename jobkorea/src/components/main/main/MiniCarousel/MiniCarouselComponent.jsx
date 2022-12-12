import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "./images/banner1.png";
import banner2 from "./images/banner2.png";
import banner3 from "./images/banner3.png";
import banner4 from "./images/banner4.jpeg";
import banner5 from "./images/banner5.jpeg";
import banner6 from "./images/banner6.png";
import banner7 from "./images/banner7.png";
import banner8 from "./images/banner8.jpeg";
import banner9 from "./images/banner9.jpeg";
import banner10 from "./images/banner10.jpeg";

const MiniCarouselComponent = () => {
  const settings = {
    infinite: true,
    speed: 5,
    slideToshow: 2,
    slideToScroll: 1,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 5000,
    loop: true,
    arrows: false,
  };

  return (
    <MiniCarouselBox>
      <div className="carousel">
        <Slider {...settings}>
          <div>
            <img src={banner1} alt="" />
          </div>
          <div>
            <img src={banner2} alt="" />
          </div>
          <div>
            <img src={banner3} alt="" />
          </div>
          <div>
            <img src={banner4} alt="" />
          </div>
          <div>
            <img src={banner5} alt="" />
          </div>
          <div>
            <img src={banner6} alt="" />
          </div>
          <div>
            <img src={banner7} alt="" />
          </div>
          <div>
            <img src={banner8} alt="" />
          </div>
          <div>
            <img src={banner9} alt="" />
          </div>{" "}
          <div>
            <img src={banner10} alt="" />
          </div>
        </Slider>
      </div>
    </MiniCarouselBox>
  );
};

export default MiniCarouselComponent;

const MiniCarouselBox = styled.div`
  width: 262px;
  height: 78px;
  margin-top: 8px;
  padding-right: 8px;
  margin-left: -26px;
`;
