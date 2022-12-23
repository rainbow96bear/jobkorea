import React from "react";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const RankingComponent = ({ inputData }) => {
  return (
    <RankingBox>
      <div className="rankingDiv1">
        <span className="rankingTitle">최근 시작 공채</span>
        <span className="rankingIconBack">
          <IoIosArrowBack style={{ cursor: "pointer" }} />
        </span>
        <span className="rankingIconForward">
          <IoIosArrowForward style={{ cursor: "pointer" }} />
        </span>
      </div>
      {inputData.map((data, index) => (
        <div className="ranking1" key={`rankingBox-${index}`}>
          <div>{data.CompanyName}</div>
        </div>
      ))}
    </RankingBox>
  );
};

export default RankingComponent;

const RankingBox = styled.div`
  flex: 1;
  background-color: white;
  border: 1px solid #dadada;

  & div {
    padding: 5px 0;
  }
  & .rankingDiv1 {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    border-bottom: 1px solid #dadada;
  }
  & .rankingTitle {
    font-size: 13px;
    font-weight: 600;
    text-align: left;
  }
  & .rankingIconBack {
    color: #c1c0c0;
    border: 1px solid #dadada99;
    padding: 1px 2px;
  }
  & .rankingIconForward {
    color: #c1c0c0;
    border: 1px solid #dadada99;
    padding: 1px 2px;
  }
  & .ranking1 {
    padding-top: 0;
    text-align: center;
    font-size: 13px;
    cursor: pointer;
  }
`;
