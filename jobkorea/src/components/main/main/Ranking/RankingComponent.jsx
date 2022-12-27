import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const RankingComponent = ({ inputData }) => {
  const navigate = useNavigate();
  const goError = () => {
    navigate("/errorpage");
  };
  const moveTo = (where) => {
    navigate(`/${where}`);
  };

  return (
    <RankingBox>
      <div className="rankingDiv1">
        <span className="rankingTitle">최근 시작 공채</span>
        <span className="rankingIcon">
          <IoIosArrowBack style={{ cursor: "pointer" }} onClick={goError} />
          <IoIosArrowForward style={{ cursor: "pointer" }} onClick={goError} />
        </span>
      </div>
      {inputData.map((data, index) => (
        <div className="ranking1" key={`rankingBox-${index}`}>
          <div
            className="textSimple"
            onClick={() => {
              moveTo(`recruit/${data.id}`);
            }}>
            {data.recruitName}
          </div>
        </div>
      ))}
    </RankingBox>
  );
};

export default RankingComponent;

const RankingBox = styled.div`
  flex: 1;
  height: 99.5%;
  background-color: white;
  border: 1px solid #dadada;
  & .rankingDiv1 {
    display: flex;
    justify-content: space-evenly;
    padding: 1%;
    border-bottom: 1px solid #dadada;
  }
  & .rankingTitle {
    font-weight: 600;
    text-align: center;
    padding: 6.5px 0;
  }
  & .rankingIcon {
    color: #c1c0c0;
    border: 1px solid #dadada99;
    padding: 1px 2px;
  }
  & .ranking1 {
    padding-top: 15px;
    text-align: center;
    font-size: 13px;
    cursor: pointer;
  }
  & .textSimple {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;
