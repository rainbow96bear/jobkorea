import React from "react";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const RankingComponent = () => {
  return (
    <RankingBox>
      <div className="rankingDiv1">
        <span className="rankingTitle">최근 채용 공고</span>
        <span className="rankingIconBack">
          <IoIosArrowBack />
        </span>
        <span className="rankingIconForward">
          <IoIosArrowForward />
        </span>
      </div>
      <div></div>
    </RankingBox>
  );
};

export default RankingComponent;

const RankingBox = styled.div`
  width: 100%;
  height: 356px;
  background-color: white;
  border: 1px solid #dadada;

  & div {
    padding: 10px;
  }

  & .rankingDiv1 {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
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
    padding: 1px 2px;
  }
  & .rankingIconForward {
    color: #c1c0c0;
    border: 1px solid #dadada99;
    padding: 1px 2px;
  }
`;
