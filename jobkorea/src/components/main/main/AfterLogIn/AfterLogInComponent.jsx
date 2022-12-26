import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const AfterLogInComponent = ({ onClick, setTest, individualId }) => {
  console.log(individualId);
  const navigate = useNavigate();
  const goApply = () => {
    navigate("/apply");
  };
  const goError = () => {
    navigate("/errorpage");
  };

  return (
    <>
      <AfterLogInBox>
        <div className="afterLogInDiv1">
          <div className="goInfo" onClick={onClick}>
            {individualId}님
          </div>
          <button
            className="logOutBtn"
            onClick={() => {
              onClick();
              setTest(false);
            }}
          >
            로그아웃
          </button>
        </div>
        <div className="afterLogInDiv2">
          <div className="goResume">이력서 관리 &gt;</div>
          <div className="modifiedDate">최종 수정일 (2022.07.18)</div>
        </div>
        <div className="afterLogInDiv3">
          <button onClick={goApply}>
            지원
            <br />
            현황
          </button>
          <button onClick={goError}>
            열람
            <br />
            기업
          </button>
          <button onClick={goError}>
            공고
            <br />
            스크랩
          </button>
          <button onClick={goError}>
            스마트
            <br />
            매치
          </button>
        </div>
      </AfterLogInBox>
    </>
  );
};

export default AfterLogInComponent;

const AfterLogInBox = styled.div`
  width: 100%;
  height: 120px;

  text-align: center;
  background-color: #fafafa;
  border: 1px solid #dadada;
  & .afterLogInDiv1 {
    display: flex;
    justify-content: space-between;
    padding: 3%;
  }
  & .goInfo {
    font-weight: 700;
    cursor: pointer;
  }
  & .afterLogInDiv2 {
    display: flex;
    justify-content: space-between;
    margin: 1% 0;
    padding: 1%;
  }
  & .goResume {
    cursor: pointer;
    width: 100px;
    font-size: 12px;
    color: #2e9afe;
  }
  & .modifiedDate {
    font-size: 6px;
    color: gray;
  }
  & .afterLogInDiv3 {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    button {
      border: 1px solid #dadada;
      background-color: #f2f2f2;
      color: #424242;
      font-size: 7px;
      cursor: pointer;
      padding: 8px 3px;
      display: flex;
      flex-wrap: wrap;
      flex: 1;
      justify-content: center;
    }
  }
  & .logOutBtn {
    background-color: #fafafa;
    border: 1px solid #dadada;
    font-size: 0.7rem;
    color: #424242;
    cursor: pointer;
  }
`;
