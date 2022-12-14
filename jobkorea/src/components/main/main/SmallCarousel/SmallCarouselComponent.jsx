import React from "react";
import { useNavigate } from "react-router-dom";
// import { useMediaQuery } from "react-responsive";
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
  const navigate = useNavigate();
  const goError = () => {
    navigate("/errorpage");
  };
  // const midScreen = useMediaQuery({ minWidth: 900 });

  return (
    <SmallCarouselBox>
      <div className="carousel">
        <Slider {...settings}>
          <img src={banner1} alt="" onClick={goError} />

          <img src={banner2} alt="" onClick={goError} />

          <img src={banner3} alt="" onClick={goError} />

          <img src={banner4} alt="" onClick={goError} />

          <img src={banner5} alt="" onClick={goError} />
        </Slider>
      </div>
    </SmallCarouselBox>
  );
};

export default SmallCarouselComponent;

const SmallCarouselBox = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  background-color: #e8ecef;

  img {
    height: 120px;
  }
`;
