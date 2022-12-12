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
    <>
      <OpenRecruitBox>
        <ul>
          <li className="boxTitle1">공채속보</li>
          <li className="boxTitle2">기업분석</li>
          <li className="boxTitle3">직무분석</li>
          <li className="boxTitle4">전문채용관</li>
          <li className="boxTitle5">합격스펙</li>
          <li className="boxTitle6">합격자소서</li>
          <li className="boxTitle7">인적성/면접</li>
          <li className="boxTitle8">잡코리아 TV</li>
        </ul>
        <ul className="boxJrSrUl">
          <li className="boxJuniorTitle">신입</li>
          <li className="boxSeniorTitle">경력</li>
        </ul>
      </OpenRecruitBox>
      <RecruitNewsBox>
        <div className="RecruitDiv1">
          <div className="Recruitbox1">
            <img src={recruitLogo1} alt="" />
          </div>
          <div className="Recruitbox2">
            <img src={recruitLogo2} alt="" />
          </div>
          <div className="Recruitbox3">
            <img src={recruitLogo3} alt="" />
          </div>
          <div className="Recruitbox4">
            <img src={recruitLogo4} alt="" />
          </div>
        </div>
        <div className="RecruitDiv2">
          <div className="Recruitbox5">
            <img src={recruitLogo5} alt="" />
          </div>
          <div className="Recruitbox6">
            <img src={recruitLogo6} alt="" />
          </div>
          <div className="Recruitbox7">
            <img src={recruitLogo7} alt="" />
          </div>
          <div className="Recruitbox8">
            <img src={recruitLogo8} alt="" />
          </div>
        </div>
      </RecruitNewsBox>
    </>
  );
};

export default OpenRecruitComponent;

const OpenRecruitBox = styled.div`
  font-size: 0.85em;
  font-weight: 700;
  width: 600px;
  border: 1px solid #dadada;
  border-bottom: none;
  margin: 0 0 0 -38px;
  padding: 0 140px 7px 10px;
  background-color: white;

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
  width: 750px;
  border: 1px solid #dadada;
  margin: 0 0 0 -38px;
  padding: 0 140px 7px 10px;
  background-color: white;

  & .RecruitDiv1 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & .Recruitbox1 {
    border-right: 1px solid #dadada;
    border-bottom: 1px solid #dadada;
    padding: 5%;
  }
  & .Recruitbox2 {
    border-right: 1px solid #dadada;
    border-bottom: 1px solid #dadada;
    padding: 5%;
  }
  & .Recruitbox3 {
    border-right: 1px solid #dadada;
    border-bottom: 1px solid #dadada;
    padding: 5%;
  }
  & .Recruitbox4 {
    border-bottom: 1px solid #dadada;
    padding: 5%;
  }
  & .RecruitDiv2 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & .Recruitbox5 {
    border-right: 1px solid #dadada;
    padding: 5%;
  }
  & .Recruitbox6 {
    border-right: 1px solid #dadada;
    padding: 5%;
  }
  & .Recruitbox7 {
    border-right: 1px solid #dadada;
    padding: 5%;
  }
  & .Recruitbox8 {
    padding: 5%;
  }
`;
