import React from "react";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const RankingComponent = () => {
  return (
    <RankingBox>
      <div className="rankingDiv1">
        <div className="rankingTitle">채용 TOP 100</div>
        <div className="rankingIconBack">
          <IoIosArrowBack />
        </div>
        <div className="rankingIconForward">
          <IoIosArrowForward />
        </div>
      </div>
      <div>
        <span>1</span>
        <span>삼성</span>
      </div>
      <div>
        <span>2</span>
        <span>현대</span>
      </div>
      <div>
        <span>3</span>
        <span>SK</span>
      </div>
      <div>
        <span>4</span>
        <span>LG</span>
      </div>
      <div>
        <span>5</span>
        <span>한진</span>
      </div>
      <div>
        <span>6</span>
        <span>한화</span>
      </div>
      <div>
        <span>7</span>
        <span>CJ</span>
      </div>
      <div>
        <span>8</span>
        <span>예나</span>
      </div>
      <div>
        <span>9</span>
        <span>예나</span>
      </div>
      <div>
        <span>10</span>
        <span>예나</span>
      </div>
    </RankingBox>
  );
};

export default RankingComponent;

const RankingBox = styled.div`
  width: 228px;
  height: 388px;
  background-color: white;
  margin-left: -195px;
  border: 1px solid #dadada;

  & .rankingDiv1 {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 15px 0;
    border-bottom: 1px solid #dadada;
  }
  & .rankingTitle {
    font-size: 13px;
    font-weight: 700;
    text-align: left;
  }
  & .rankingIconBack {
    color: #c1c0c0;
    border: 1px solid #dadada99;
    margin-right: -49px;
    padding: 1px 2px;
  }
  & .rankingIconForward {
    color: #c1c0c0;
    border: 1px solid #dadada99;
    margin-right: -40px;
    padding: 1px 2px;
  }
`;
