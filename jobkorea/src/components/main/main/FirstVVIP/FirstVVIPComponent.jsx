import React from "react";
import styled from "styled-components";

import vviplogo1 from "../FirstVVIP/images/vvip1.gif";

const FirstVVIPComponent = () => {
  return (
    <FirstVVIPBox>
      <div>
        <div className="vviplogo1">
          <img src={vviplogo1} alt="" />
          <div className="vvipItem1">(주)케이티엠오에스북부</div>
          <div className="vvipItem2">2022년 kt MOS북부 신입/경력 채용</div>
        </div>
        <div className="vviplogo2">
          <img src={vviplogo1} alt="" />
          <div className="vvipItem3">(주)케이티엠오에스북부</div>
          <div className="vvipItem4">2022년 kt MOS북부 신입/경력 채용</div>
        </div>
        <div className="vviplogo3">
          <img src={vviplogo1} alt="" />
          <div className="vvipItem5">(주)케이티엠오에스북부</div>
          <div className="vvipItem6">2022년 kt MOS북부 신입/경력 채용</div>
        </div>
      </div>
    </FirstVVIPBox>
  );
};

export default FirstVVIPComponent;

const FirstVVIPBox = styled.div`
  & div {
    flex: 1;
  }
  & .vviplogo1 {
    border: 1px solid #dadada;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    padding: 20px 50px;
    & .vvipItem1 {
      font-size: 13px;
      width: 100%;
    }
    & .vvipItem2 {
      font-weight: 700;
      width: 100%;
      padding-bottom: 50px;
    }
  }

  & .vviplogo2 {
    border: 1px solid #dadada;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    padding: 20px 50px;
    & .vvipItem3 {
      font-size: 13px;
      width: 100%;
    }
    & .vvipItem3 {
      font-weight: 700;
      width: 100%;
      padding-bottom: 50px;
    }
  }

  & .vviplogo3 {
    border: 1px solid #dadada;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    padding: 20px 50px;
    & .vvipItem4 {
      font-size: 13px;
      width: 100%;
    }
    & .vvipItem5 {
      font-weight: 700;
      width: 100%;
      padding-bottom: 50px;
    }
  }
`;
