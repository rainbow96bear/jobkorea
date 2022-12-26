import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
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
  const [juniorTitle, setJuniorTitle] = useState(true);
  // CSS를 주고 싶은 div 상태 변경하기
  const navigate = useNavigate();
  const goError = () => {
    navigate("/errorpage");
  };
  const smallScreen = useMediaQuery({ minWidth: 920 });
  const XsmallScreen = useMediaQuery({ minWidth: 580 });
  const XsmallScreen2 = useMediaQuery({ minWidth: 530 });

  return (
    <ItemBox>
      <OpenRecruitBox juniorTitle={juniorTitle}>
        {/* div 상태 변경을 위해 styled component를 준 박스 div에 props 넣기  */}
        <div>
          <div className="boxTitle1" onClick={goError}>
            공채속보
          </div>
          <div className="boxTitle2" onClick={goError}>
            기업분석
          </div>
          <div className="boxTitle3" onClick={goError}>
            직무분석
          </div>
          <div className="boxTitle4" onClick={goError}>
            전문채용관
          </div>

          {XsmallScreen2 && (
            <div className="boxTitle5" onClick={goError}>
              합격스펙
            </div>
          )}
          {smallScreen && (
            <>
              <div className="boxTitle6" onClick={goError}>
                합격자소서
              </div>
              <div className="boxTitle7" onClick={goError}>
                인적성/면접
              </div>
            </>
          )}
          <div className="boxJrSrUl" onClick={goError}>
            <div
              className="boxJuniorTitle"
              onClick={() => {
                setJuniorTitle(true);
                // 상태 변경 함수 사용
              }}
            >
              신입
            </div>
            <div
              className="boxSeniorTitle"
              onClick={() => {
                setJuniorTitle(false);
                // 상태 변경 함수 사용
              }}
            >
              경력
            </div>
          </div>
        </div>
      </OpenRecruitBox>
      <RecruitNewsBox>
        <div
          className="RecruitDiv1"
          style={XsmallScreen ? { fontSize: "12px" } : { fontSize: "9px" }}
        >
          <div onClick={goError}>
            <img src={recruitLogo1} alt="" />각 부분 신입/경력 채용
            <br />
            소노소노
          </div>
          <div onClick={goError}>
            <img src={recruitLogo2} alt="" />각 부분 신입/경력 채용 <br />
            소노소노
          </div>
          <div onClick={goError}>
            <img src={recruitLogo3} alt="" />각 부분 신입/경력 채용 <br />
            소노소노
          </div>
          <div onClick={goError}>
            <img src={recruitLogo4} alt="" />각 부분 신입/경력 채용 <br />
            소노소노
          </div>
        </div>
        <div className="RecruitDiv2">
          <div onClick={goError}>
            <img src={recruitLogo5} alt="" />각 부분 신입/경력 채용 <br />
            소노소노
          </div>
          <div onClick={goError}>
            <img src={recruitLogo6} alt="" />각 부분 신입/경력 채용 <br />
            소노소노
          </div>
          <div onClick={goError}>
            <img src={recruitLogo7} alt="" />각 부분 신입/경력 채용 <br />
            소노소노
          </div>
          <div onClick={goError}>
            <img src={recruitLogo8} alt="" />각 부분 신입/경력 채용 <br />
            소노소노
          </div>
        </div>

        <div className="RecruitDiv3">
          {smallScreen && (
            <div className="bigtech" onClick={goError}>
              #1000대기업 공채{" "}
            </div>
          )}
          <div className="intern" onClick={goError}>
            #인턴채용{" "}
          </div>
          <div className="openrecruit" onClick={goError}>
            #공채달력{" "}
          </div>
          <div className="livenews" onClick={goError}>
            #Live공채소식{" "}
          </div>
          {XsmallScreen2 && (
            <div className="expecteddays" onClick={goError}>
              #공채예상일정{" "}
            </div>
          )}
          {XsmallScreen && (
            <div className="top100" onClick={goError}>
              #TOP100
            </div>
          )}
        </div>
      </RecruitNewsBox>
    </ItemBox>
  );
};

export default OpenRecruitComponent;

const ItemBox = styled.div`
  flex: 3;
`;

const OpenRecruitBox = styled.div`
  font-size: 14px;
  font-weight: 700;
  border: 1px solid #dadada;
  border-bottom: none;
  background-color: white;
  padding-bottom: 4px;
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
  & .boxJrSrUl {
    display: flex;
    flex: 1;
    flex-direction: row;
    width: 80px;
    text-align: center;
  }
  & .boxJuniorTitle {
    margin-left: 1px;
    list-style: none;
    float: right;
    width: 40px;
    padding: 6px 9px;
    border: 1px solid #dadada;
    color: #a1a0a0;
    font-size: 11px;
    cursor: pointer;
    ${(props) =>
      props.juniorTitle
        ? `background-color:${COLOR}; color: white`
        : ""}/* 삼항연산자로 CSS 상태 변경 */
  }
  & .boxSeniorTitle {
    margin-right: -10px;
    list-style: none;
    float: right;
    width: 40px;
    padding: 6px 9px;
    border: 1px solid #dadada;
    color: #a1a0a0;
    font-size: 11px;
    cursor: pointer;
    ${(props) =>
      props.juniorTitle ? "" : `background-color:${COLOR}; color: white`}
  }
`;

const RecruitNewsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
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
      border-top: 1px solid #dadada;
      border-right: 1px solid #dadada9e;
      border-bottom: 1px solid #dadada9e;
      font-weight: 500;
      text-align: center;
      background-color: white;
      padding: 15px 0;
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
      border-right: 1px solid #dadada9e;
      text-align: center;
      background-color: white;
      padding: 15px 0;
      &:last-child {
        border-right: none;
      }
    }
  }
  & .RecruitDiv3 {
    display: flex;
  }
  & .bigtech {
    padding: 4px;
    margin: 15px 3px 15px -150px;
    font-size: 12px;
    font-weight: 500;
    padding: 6px;
    color: #514f4f;
    background-color: #dadada3f;
  }
  & .intern {
    padding: 4px;
    margin: 15px 3px;
    font-size: 12px;
    font-weight: 500;
    padding: 6px;
    color: #514f4f;
    background-color: #dadada3f;
  }
  & .openrecruit {
    padding: 4px;
    margin: 15px 3px;
    font-size: 12px;
    font-weight: 500;
    padding: 6px;
    color: #514f4f;
    background-color: #dadada3f;
  }
  & .livenews {
    padding: 4px;
    margin: 15px 3px;
    font-size: 12px;
    font-weight: 500;
    padding: 6px;
    color: #514f4f;
    background-color: #dadada3f;
  }
  & .expecteddays {
    padding: 4px;
    margin: 15px 3px;
    font-size: 12px;
    font-weight: 500;
    padding: 6px;
    color: #514f4f;
    background-color: #dadada3f;
  }
  & .top100 {
    padding: 4px;
    margin: 15px 3px;
    font-size: 12px;
    font-weight: 500;
    padding: 6px;
    color: #514f4f;
    background-color: #dadada3f;
  }
`;
