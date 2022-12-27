import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    <NoticeCarouselBox>
      <div className="carousel">
        <Slider {...settings}>
          <div>[공지] 모바일 이력서 서비스 리뉴얼</div>
          <div>[이벤트]12월 전체회원 이벤트, ...</div>
          <div>2022 TVC 런칭 이벤트 `코리아는...</div>
          <div>잡코리아 `이력써드립니다` 이벤트 오픈</div>
          <div>기업회원 이용약관 개정 안내</div>
        </Slider>
      </div>
    </NoticeCarouselBox>
  );
};

export default SmallCarouselComponent;

const NoticeCarouselBox = styled.div`
  width: 100%;
  height: 25px;
  text-align: center;
  font-size: 0.6rem;
  border: 1px solid #dadada;
  background-color: #f8f9fb;
  cursor: pointer;
  & .carousel {
    padding: 1px 2px;
  }
`;
