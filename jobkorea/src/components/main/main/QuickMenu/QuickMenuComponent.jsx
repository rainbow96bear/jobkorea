import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import jobImage from "./images/image1.png";
import areaImage from "./images/image2.png";
import detailImage from "./images/image3.png";
import bigtechImage from "./images/image4.png";
import governImage from "./images/image5.png";
import abroadImage from "./images/image6.png";
import industryImage from "./images/image7.png";
import specialImage from "./images/image8.png";
import top100Image from "./images/image9.png";
import { useMediaQuery } from "react-responsive";

const QuickMenuComponent = () => {
  const navigate = useNavigate();
  const goError = () => {
    navigate("/errorpage");
  };
  const midScreen = useMediaQuery({ minWidth: 730 });

  return (
    <QuickMenuBox style={{ display: midScreen ? "block" : "none" }}>
      <div className="QuickMenuRow1" onClick={goError}>
        <div className="job" onClick={goError}>
          <img src={jobImage} alt="" />
          <span>직무별</span>
        </div>
        <div className="area" onClick={goError}>
          <img src={areaImage} alt="" />
          <span>지역별</span>
        </div>
        <div className="detailSearch" onClick={goError}>
          <img src={detailImage} alt="" />
          <span>상세검색</span>
        </div>
      </div>
      <div className="QuickMenuRow2" onClick={goError}>
        <div className="bigtech">
          <img src={bigtechImage} alt="" />
          <span>대기업</span>
        </div>
        <div className="govern" onClick={goError}>
          <img src={governImage} alt="" />
          <span>공기업</span>
        </div>
        <div className="abroad" onClick={goError}>
          <img src={abroadImage} alt="" />
          <span>외국계기업</span>
        </div>
      </div>
      <div className="QuickMenuRow3" onClick={goError}>
        <div className="industry">
          <img src={industryImage} alt="" />
          <span>산업별</span>
        </div>
        <div className="special" onClick={goError}>
          <img src={specialImage} alt="" />
          <span>전문채용관</span>
        </div>
        <div className="top100" onClick={goError}>
          <img src={top100Image} alt="" />
          <span>TOP100</span>
        </div>
      </div>
    </QuickMenuBox>
  );
};

export default QuickMenuComponent;

const QuickMenuBox = styled.div`
  flex: 1;
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
      width: 100%;
    }
  }
  & .job {
    padding: 5px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #dadada;
    border-right: 1px solid #dadada;
    cursor: pointer;
  }
  & .area {
    display: flex;
    padding: 5px;
    flex-direction: column;
    border-bottom: 1px solid #dadada;
    border-right: 1px solid #dadada;
    cursor: pointer;
  }
  & .detailSearch {
    padding: 5px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #dadada;
    cursor: pointer;
  }
  & .QuickMenuRow2 {
    display: flex;
    flex-direction: row;
    font-size: 12px;
    justify-content: center;
    & img {
      width: 100%;
    }
  }
  & .bigtech {
    padding: 5px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #dadada;
    border-right: 1px solid #dadada;
    cursor: pointer;
  }
  & .govern {
    padding: 5px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #dadada;
    border-right: 1px solid #dadada;
    cursor: pointer;
  }
  & .abroad {
    padding: 5px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #dadada;
    cursor: pointer;
  }
  & .QuickMenuRow3 {
    display: flex;
    flex-direction: row;
    font-size: 12px;
    justify-content: center;
    & img {
      width: 100%;
    }
  }
  & .industry {
    padding: 5px;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #dadada;
    cursor: pointer;
  }
  & .special {
    padding: 5px;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #dadada;
    cursor: pointer;
  }
  & .top100 {
    padding: 5px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
  }
`;
