import React from "react";
import styled from "styled-components";

const AfterLogInComponent = ({ onClick, setTest, individualId }) => {
  console.log(individualId);
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
          <button>지원현황</button>
          <button>열람기업</button>
          <button>스크랩</button>
          <button>스마트매치</button>
        </div>
      </AfterLogInBox>
    </>
  );
};

export default AfterLogInComponent;

const AfterLogInBox = styled.div`
  width: 100%;
  height: 100%;
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
    width: 100%;
    button {
      text-align: center;
      border: 1px solid #dadada;
      background-color: #f2f2f2;
      color: #424242;
      font-size: 0.7em;
      cursor: pointer;
      padding: 2em 0.71em;
      display: flex;
      flex-wrap: wrap;
    }
  }
  & .logOutBtn {
    background-color: #fafafa;
    border: 1px solid #dadada;
    font-size: 12px;
    color: #424242;
    cursor: pointer;
  }
`;
