import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "./images/banner1.png";
import banner2 from "./images/banner2.png";
import banner3 from "./images/banner3.png";
import banner4 from "./images/banner4.jpeg";
import banner5 from "./images/banner5.png";
import banner6 from "./images/banner6.jpeg";
import banner7 from "./images/banner7.jpeg";
import banner8 from "./images/banner8.png";
import banner9 from "./images/banner9.png";
import banner10 from "./images/banner10.png";

const BigCarouselComponent = () => {
  const settings = {
    infinite: true,
    speed: 5,
    slideToshow: 2,
    slideToScroll: 1,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 3000,
    loop: true,
    arrows: false,
  };

  return (
    <>
      <BigCarouselBox>
        <div className="carousel">
          <Slider {...settings}>
            <div>
              <img src={banner1} />
            </div>
            <div>
              <img src={banner2} />
            </div>
            <div>
              <img src={banner3} />
            </div>
            <div>
              <img src={banner4} />
            </div>
            <div>
              <img src={banner5} />
            </div>
            <div>
              <img src={banner6} />
            </div>
            <div>
              <img src={banner7} />
            </div>
            <div>
              <img src={banner8} />
            </div>
            <div>
              <img src={banner9} />
            </div>{" "}
            <div>
              <img src={banner10} />
            </div>
          </Slider>
        </div>
      </BigCarouselBox>
    </>
  );
};

export default BigCarouselComponent;

const BigCarouselBox = styled.div`
  width: 752px;
  height: 110px;
  background-color: #e8ecef;
  margin: 5px;
`;
