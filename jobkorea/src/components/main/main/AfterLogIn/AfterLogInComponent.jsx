import React from "react";
import styled from "styled-components";

const AfterLogInComponent = ({ onClick, setTest, individualName }) => {
  return (
    <>
      <AfterLogInBox>
        <div className="afterLogInDiv1">
          <div className="goInfo">{individualName}님</div>
          <button
            className="logOutBtn"
            onClick={() => {
              onClick();
              setTest(false);
            }}
          >
            로그아웃
            {/* 로그인한 사람의 이름이 안 뜨는 거 해결 */}
          </button>
        </div>
        <div className="afterLogInDiv2">
          <div className="goResume">이력서 관리 &gt;</div>
          <div className="modifiedDate">최종 수정일 (2022.07.18)</div>
        </div>
        <div className="afterLogInDiv3">
          <div>지원현황</div>
          <div>열람기업</div>
          <div>스크랩</div>
          <div>스마트매치</div>
        </div>
      </AfterLogInBox>
    </>
  );
};

export default AfterLogInComponent;

const AfterLogInBox = styled.div`
  width: 20%;
  height: 115px;
  text-align: center;
  padding-top: 0.3%;
  background-color: #fafafa;
  border: 1px solid #dadada;

  & .afterLogInDiv1 {
    display: flex;
    justify-content: space-between;
    padding: 2px;
  }
  & .goInfo {
    font-weight: 700;
  }
  & .afterLogInDiv2 {
    display: flex;
    justify-content: space-between;
    margin: 5px 0;
    padding: 0 10px;
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
    flex: 1;
    justify-content: space-between;
    width: 100%;
    div {
      text-align: center;
      border-top: 1px solid #dadada;
      border-right: 1px solid #dadada;
      background-color: #f2f2f2;
      color: #424242;
      font-size: 12px;
      cursor: pointer;
      padding: 11px 8.5px;
      &:last-child {
        border-right: none;
      }
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
