import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default class VerticalMode extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      autoplay: true,
      arrows: false,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 505,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <CarouselBox>
        <CarouselFrame>
          <div className="temp"></div>
          <Slider {...settings}>
            <div>
              <span>공지</span> [이벤트] 12월 전체회원 이벤트, 이직준비
              가보잡코~!
            </div>
            <div>
              <span>공지</span> [사전공지] 모바일 이력서 개편
            </div>
            <div>
              <span>공지</span> [주의] 이메일지원으로 위장된 랜섬웨어 피해 예방
              안내
            </div>
            <div>
              <span>공지</span> 잡코리아 '이력써드립니다' 이벤트 오픈
            </div>
            <div>
              <span>공지</span> 기업회원 이용약관 개정 안내
            </div>
            <div>
              <span>공지</span> 잡코리아 패밀리 캐릭터 '드림즈 크루' 런칭
            </div>
          </Slider>
        </CarouselFrame>
      </CarouselBox>
    );
  }
}

const CarouselBox = styled.div`
  font-size: 14px;
  width: 100%;
`;

const CarouselFrame = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: auto;
  span {
    font-weight: 700;
  }

  .temp {
    height: 14px;
  }

  div {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    cursor: pointer;
  }
`;
