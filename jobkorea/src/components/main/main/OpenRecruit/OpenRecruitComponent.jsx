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

const OpenRecruitComponent = ({ inputData, moveTo }) => {
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
              }}>
              신입
            </div>
            <div
              className="boxSeniorTitle"
              onClick={() => {
                setJuniorTitle(false);
                // 상태 변경 함수 사용
              }}>
              경력
            </div>
          </div>
        </div>
      </OpenRecruitBox>
      <RecruitNewsBox>
        {inputData ? (
          inputData.map((data) =>
            data.map((data2, index) => (
              <GroupItemBox
                key={`groupItemBox-${index}`}
                onClick={() => {
                  moveTo(`recruit/${data2.id}`);
                }}>
                {data2.companylogo && (
                  <div>
                    <img
                      src={`http://localhost:8080/uploads/${data2.companylogo}`}
                      alt=""
                    />
                  </div>
                )}
                <div className="companyName">
                  <div className="textSimple">{data2.CompanyName}</div>
                </div>
                <div className="recruitTitle">
                  <div className="textSimple">{data2.recruitName}</div>
                </div>
              </GroupItemBox>
            ))
          )
        ) : (
          <>
            <div
              className="RecruitDiv1"
              style={XsmallScreen ? { fontSize: "12px" } : { fontSize: "9px" }}>
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
          </>
        )}
      </RecruitNewsBox>
    </ItemBox>
  );
};

export default OpenRecruitComponent;

const ItemBox = styled.div`
  flex: 3;
`;

const OpenRecruitBox = styled.div`
  font-size: 0.7rem;
  font-weight: 700;
  border: 1px solid #dadada;
  border-bottom: none;
  background-color: white;
  padding: 2px 10px;
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
    /* flex-wrap: wrap; */
    width: 80px;
    justify-content: center;
    align-items: center;
  }
  & .boxJuniorTitle {
    list-style: none;
    float: right;
    width: 100px;
    height: 12px;
    padding: 6px 3px;
    margin-top: 5px;
    text-align: center;
    border: 1px solid #dadada;
    color: #a1a0a0;
    font-size: 0.6rem;
    cursor: pointer;
    ${(props) =>
      props.juniorTitle
        ? `background-color:${COLOR}; color: white`
        : ""}/* 삼항연산자로 CSS 상태 변경 */
  }
  & .boxSeniorTitle {
    list-style: none;
    float: right;
    width: 100px;
    height: 12px;
    padding: 6px 3px;
    margin-top: 5px;
    text-align: center;
    border: 1px solid #dadada;
    color: #a1a0a0;
    font-size: 0.6rem;
    cursor: pointer;
    ${(props) =>
      props.juniorTitle ? "" : `background-color:${COLOR}; color: white`}
  }
`;

const RecruitNewsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  // justify-content: center;
  // align-items: center;
  font-size: 14px;
  font-weight: 700;
  width: 100%;
  border: 1px solid #dadada;
  background-color: white;
  height: 362px;
`;
const GroupItemBox = styled.div`
  width: 24%;
  margin: auto;
  border: 1px solid #dadada;
  & > div {
    display: flex;
    justify-content: center;
  }
  & .companyName {
    font-size: 17px;
    font-weight: 500;
  }
  & .textSimple {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  & .recruitTitle {
    font-size: 19px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  img {
    width: 90%;
    height: 100px;
  }
`;
