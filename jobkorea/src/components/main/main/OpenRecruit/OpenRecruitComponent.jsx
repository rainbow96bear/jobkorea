import React from "react";
import styled from "styled-components";

import recruitLogo1 from "./images/logo1.gif";
import recruitLogo2 from "./images/logo2.gif";
import recruitLogo3 from "./images/logo3.gif";
import recruitLogo4 from "./images/logo4.gif";
import recruitLogo5 from "./images/logo5.gif";
import recruitLogo6 from "./images/logo6.gif";
import recruitLogo7 from "./images/logo7.gif";
import recruitLogo8 from "./images/logo8.gif";

const COLOR = "#3399ff";

const OpenRecruitComponent = () => {
  return (
    <ItemBox>
      <OpenRecruitBox>
        <div>
          <div className="boxTitle1">공채속보</div>
          <div className="boxTitle2">기업분석</div>
          <div className="boxTitle3">직무분석</div>
          <div className="boxTitle4">전문채용관</div>
          <div className="boxTitle5">합격스펙</div>
          <div className="boxTitle6">합격자소서</div>
          <div className="boxTitle7">인적성/면접</div>
          <div className="boxTitle8">잡코리아 TV</div>
        </div>
        <div className="boxJrSrUl">
          <div className="boxJuniorTitle">신입</div>
          <div className="boxSeniorTitle">경력</div>
        </div>
      </OpenRecruitBox>
      <RecruitNewsBox>
        <div className="RecruitDiv1">
          <div>
            <img src={recruitLogo1} alt="" />각 부분 신입/경력 채용
            <br />
            소노소노
          </div>
          <div>
            <img src={recruitLogo2} alt="" />각 부분 신입/경력 채용 <br />
            소노소노
          </div>
          <div>
            <img src={recruitLogo3} alt="" />각 부분 신입/경력 채용 <br />
            소노소노
          </div>
          <div>
            <img src={recruitLogo4} alt="" />각 부분 신입/경력 채용 <br />
            소노소노
          </div>
        </div>
        <div className="RecruitDiv2">
          <div>
            <img src={recruitLogo5} alt="" />각 부분 신입/경력 채용 <br />
            소노소노
          </div>
          <div>
            <img src={recruitLogo6} alt="" />각 부분 신입/경력 채용 <br />
            소노소노
          </div>
          <div>
            <img src={recruitLogo7} alt="" />각 부분 신입/경력 채용 <br />
            소노소노
          </div>
          <div>
            <img src={recruitLogo8} alt="" />각 부분 신입/경력 채용 <br />
            소노소노
          </div>
        </div>
        <div className="RecruitDiv3">
          <div className="1000bigtech">#1000대기업 공채 </div>
          <div className="intern">#인턴채용 </div>
          <div className="openrecruit">#공채달력 </div>
          <div className="livenews">#Live공채소식 </div>
          <div className="expecteddays">#공채예상일정 </div>
          <div className="top100">#TOP100</div>
        </div>
      </RecruitNewsBox>
    </ItemBox>
  );
};

export default OpenRecruitComponent;

const ItemBox = styled.div``;

const OpenRecruitBox = styled.div`
  font-size: 0.85em;
  font-weight: 700;
  width: 100%;
  border: 1px solid #dadada;
  border-bottom: none;
  background-color: white;
  padding: 8px 0;
  & .boxTitle1 {
    color: ${COLOR};
    list-style: none;
    float: left;
    padding: 1%;
    cursor: pointer;
  }
  & .boxTitle2 {
    color: #494949;
    list-style: none;
    float: left;
    padding: 1%;
    cursor: pointer;
  }
  & .boxTitle3 {
    color: #494949;
    list-style: none;
    float: left;
    padding: 1%;
    cursor: pointer;
  }
  & .boxTitle4 {
    color: #494949;
    list-style: none;
    float: left;
    padding: 1%;
    cursor: pointer;
  }
  & .boxTitle5 {
    color: #494949;
    list-style: none;
    float: left;
    padding: 1%;
    cursor: pointer;
  }
  & .boxTitle6 {
    color: #494949;
    list-style: none;
    float: left;
    padding: 1%;
    cursor: pointer;
  }
  & .boxTitle7 {
    color: #494949;
    list-style: none;
    float: left;
    padding: 1%;
    cursor: pointer;
  }
  & .boxTitle8 {
    color: #494949;
    list-style: none;
    float: left;
    padding: 1%;
    cursor: pointer;
  }
  & .boxJrSrUl {
    display: flex;
    flex-direction: row;
    width: 80px;
    text-align: center;
  }
  & .boxJuniorTitle {
    list-style: none;
    float: right;
    width: 40px;
    padding: 6px 9px;
    border: 1px solid #dadada;
    color: #a1a0a0;
    font-size: 11px;
    cursor: pointer;
  }
  & .boxSeniorTitle {
    list-style: none;
    float: right;
    width: 40px;
    padding: 6px 9px;
    border: 1px solid #dadada;
    color: #a1a0a0;
    font-size: 11px;
    cursor: pointer;
  }
`;

const RecruitNewsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.85em;
  font-weight: 700;
  width: 100%;
  border: 1px solid #dadada;
  background-color: white;

  & .RecruitDiv1 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    & div {
      display: flex;
      flex-direction: column;
      flex: 1;
      border-right: 1px solid #dadada;
      border-bottom: 1px solid #dadada;
      font-size: 12px;
      font-weight: 500;
      text-align: center;
      background-color: white;
      padding: 25px 0;
      &:last-child {
        border-right: none;
      }
    }
  }
  & .RecruitDiv2 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    & div {
      display: flex;
      flex-direction: column;
      flex: 1;
      font-size: 12px;
      font-weight: 500;
      border-right: 1px solid #dadada;
      text-align: center;
      background-color: white;
      padding: 25px 0;
      &:last-child {
        border-right: none;
      }
    }
  }
  & .RecruitDiv3 {
    font-size: 12px;
    font-weight: 500;
    padding: 6px;
    color: #514f4f;
    background-color: #dadada3f;
    display: flex;
    float: left;
    & div {
      padding: 6px;
    }
  }
`;
