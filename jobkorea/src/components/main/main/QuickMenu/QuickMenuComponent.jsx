import React from "react";
import styled from "styled-components";
import jobImage from "./images/image1.png";
import areaImage from "./images/image2.png";
import detailImage from "./images/image3.png";
import bigtechImage from "./images/image4.png";
import governImage from "./images/image5.png";
import abroadImage from "./images/image6.png";
import industryImage from "./images/image7.png";
import specialImage from "./images/image8.png";
import top100Image from "./images/image9.png";

const QuickMenuComponent = () => {
  return (
    <QuickMenuBox>
      <div className="QuickMenuRow1">
        <div className="job">
          <img src={jobImage} alt="" />
          <span>직무별</span>
        </div>
        <div className="area">
          <img src={areaImage} alt="" />
          <span>지역별</span>
        </div>
        <div className="detailSearch">
          <img src={detailImage} alt="" />
          <span>상세검색</span>
        </div>
      </div>
      <div className="QuickMenuRow2">
        <div className="bigtech">
          <img src={bigtechImage} alt="" />
          <span>대기업</span>
        </div>
        <div className="govern">
          <img src={governImage} alt="" />
          <span>공기업</span>
        </div>
        <div className="abroad">
          <img src={abroadImage} alt="" />
          <span>외국계기업</span>
        </div>
      </div>
      <div className="QuickMenuRow3">
        <div className="industry">
          <img src={industryImage} alt="" />
          <span>산업별</span>
        </div>
        <div className="special">
          <img src={specialImage} alt="" />
          <span>전문채용관</span>
        </div>
        <div className="top100">
          <img src={top100Image} alt="" />
          <span>TOP100</span>
        </div>
      </div>
    </QuickMenuBox>
  );
};

export default QuickMenuComponent;

const QuickMenuBox = styled.div`
  width: 100%;
  height: 254px;
  background-color: white;
  border: 1px solid #dadada;
  text-align: center;

  & .QuickMenuRow1 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 12px;
    flex: 1;

    & img {
      width: 60px;
    }
  }
  & .job {
    padding: 5px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #dadada;
    border-right: 1px solid #dadada;
  }
  & .area {
    display: flex;
    padding: 5px;
    flex-direction: column;
    border-bottom: 1px solid #dadada;
    border-right: 1px solid #dadada;
  }
  & .detailSearch {
    padding: 5px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #dadada;
  }
  & .QuickMenuRow2 {
    display: flex;
    flex-direction: row;
    font-size: 12px;
    justify-content: center;
    & img {
      width: 60px;
    }
  }
  & .bigtech {
    padding: 5px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #dadada;
    border-right: 1px solid #dadada;
  }
  & .govern {
    padding: 5px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #dadada;
    border-right: 1px solid #dadada;
  }
  & .abroad {
    padding: 5px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #dadada;
  }
  & .QuickMenuRow3 {
    display: flex;
    flex-direction: row;
    font-size: 12px;
    justify-content: center;
    & img {
      width: 60px;
    }
  }
  & .industry {
    padding: 5px;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #dadada;
  }
  & .special {
    padding: 5px;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #dadada;
  }
  & .top100 {
    padding: 5px;
    display: flex;
    flex-direction: column;
  }
`;
