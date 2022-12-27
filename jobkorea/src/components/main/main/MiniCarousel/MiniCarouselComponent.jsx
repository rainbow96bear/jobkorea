import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "./images/banner1.png";
import banner2 from "./images/banner2.png";
import banner3 from "./images/banner3.png";
import banner4 from "./images/banner4.jpeg";
import banner5 from "./images/banner5.png";
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
  const navigate = useNavigate();
  const goError = () => {
    navigate("/errorpage");
  };

  return (
    <MiniCarouselBox>
      <div className="carousel">
        <Slider {...settings}>
          <img src={banner1} alt="" onClick={goError} />

          <img src={banner2} alt="" onClick={goError} />

          <img src={banner3} alt="" onClick={goError} />

          <img src={banner4} alt="" onClick={goError} />

          <img src={banner5} alt="" onClick={goError} />

          <img src={banner6} alt="" onClick={goError} />

          <img src={banner7} alt="" onClick={goError} />

          <img src={banner8} alt="" onClick={goError} />

          <img src={banner9} alt="" onClick={goError} />

          <img src={banner10} alt="" onClick={goError} />
        </Slider>
      </div>
    </MiniCarouselBox>
  );
};

export default MiniCarouselComponent;

const MiniCarouselBox = styled.div`
  margin-top: 2px;
  cursor: pointer;
`;
