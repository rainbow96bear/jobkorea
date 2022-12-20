import styled from "styled-components";
import cjimg from "./img/cj.png";
import { useEffect, useState } from "react";

export default function RecruitComponent({
  recruitInfo,
  applybutton,
  applycanclebutton,
}) {
  // console.log(recruitInfo.result.id);
  // const recruitresult = recruitInfo.result;
  // console.log(recruitresult.id);
  // console.log(recruitInfo);
  // console.log(recruitInfo[0].recruitArea && );
  console.log(recruitInfo);
  // console.log(recruitInfo[0]);
  return (
    <div>
      <InformationBox>
        <div style={{ fontSize: 20 }}></div>
      </InformationBox>
      <Informationboxs>
        <Informationboxscontent>
          <Boxscontentone>
            <Textfour>
              {recruitInfo[0]?.Companyuser_Info.companyName}
              <button>♡ 관심기업</button>
              <h2 style={{ color: "black" }}>{recruitInfo[0]?.recruitName}</h2>
            </Textfour>
          </Boxscontentone>
          <Boxscontenttwo>
            <Textone>
              <div style={{ marginBottom: 10 }}>지원자격</div>
              <div>
                <Texttwo>
                  <Texttwo>경력</Texttwo>{" "}
                  <Textcolor>{recruitInfo[0]?.isExp}</Textcolor>
                </Texttwo>
                <Texttwo>
                  <Texttwo>학력</Texttwo>
                  <Textcolor>{recruitInfo[0]?.edu}</Textcolor>
                </Texttwo>
                <Texttwo>
                  <Texttwo>우대</Texttwo>
                  <div
                    style={{
                      fontSize: 10,
                      paddingTop: 5,
                      paddingRight: 5,
                    }}
                  ></div>
                  <div> {recruitInfo[0]?.condition}</div>
                </Texttwo>
              </div>
            </Textone>

            <Textone>
              <div style={{ marginBottom: 10 }}>근무조건</div>
              <Texttwo>
                <Textthree>고용형태</Textthree>
                <Textcolor>{recruitInfo[0]?.workRank}</Textcolor>
              </Texttwo>
              <Texttwo>
                <Textthree>급여</Textthree>
                <div>{recruitInfo[0]?.isPay}</div>
              </Texttwo>
              <Texttwo>
                <Textthree>지역</Textthree>
                <div>
                  {recruitInfo[0]?.area} <button>지도</button>
                </div>
              </Texttwo>
              <Texttwo>
                <Textthree>시간</Textthree>
                <div style={{ marginLeft: 20 }}>
                  주5일(월~금) | 09:00~18:00 탄력근무제
                </div>
              </Texttwo>
            </Textone>
          </Boxscontenttwo>
        </Informationboxscontent>
        <Informationboxscontenttwo>
          <Imgbox>
            <img src={cjimg} alt="" />
          </Imgbox>
          <div>
            <div style={{ marginBottom: 10, marginLeft: 10 }}>기업정보</div>
            <Textbox>
              <Texttwo>
                <Textfive>산업(업종)</Textfive>
                <Textsix>솔루션.SL.CRM.ERP</Textsix>
              </Texttwo>
              <Texttwo>
                <Textfive>사원수</Textfive>
                <Textsix style={{ marginLeft: 20 }}>1,500명</Textsix>
              </Texttwo>
              <Texttwo>
                <Textfive>설립년도</Textfive>
                <Textsix style={{ marginLeft: 8 }}>1995년(28년차)</Textsix>
              </Texttwo>
              <Texttwo>
                <Textfive>기업형태</Textfive>
                <Textsix style={{ marginLeft: 8 }}>
                  {recruitInfo[0]?.Companyuser_Info.selectedOption}
                </Textsix>
              </Texttwo>
              <Texttwo>
                <Textfive style={{ width: 90 }}>홈페이지</Textfive>
                <Textsix>https://www.cjoliven etworks.co.kr</Textsix>
              </Texttwo>
            </Textbox>
          </div>
          <Buttonbox>
            <button>기업정보</button>
            <button>진행중인 채용보기</button>
          </Buttonbox>
        </Informationboxscontenttwo>
      </Informationboxs>
      <Footercontainer>
        <Home>
          <div onClick={applybutton}>
            <strong>즉시 지원</strong>
          </div>
        </Home>
        <Home>
          <div onClick={applycanclebutton}>
            <strong>지원 취소</strong>
          </div>
        </Home>
      </Footercontainer>
    </div>
  );
}

const InformationBox = styled.div`
  margin: auto;
  width: 50%;
  /* height: 100%; */
  /* background-color: green; */
`;

const Informationboxs = styled.div`
  display: flex;
  margin: auto;
  margin-top: 10px;
  width: 50%;
  height: 350px;
  background-color: white;
  border-top: solid 2px black;
  border-left: solid 0.1px lightgray;
  border-bottom: solid 0.1px lightgray;
  border-right: solid 0.1px lightgray;
`;

const Boxscontentone = styled.div`
  padding-top: 3%;
  height: 29%;
  width: 100%;
  background-color: white;
  color: gray;
  border-bottom: solid 0.1px lightgray;
  border-right: solid 0.1px lightgray;
`;

const Boxscontenttwo = styled.div`
  width: 100%;
  height: 65%;
  background-color: white;
  border-bottom: solid 0.1px lightgray;
  border-right: solid 0.1px lightgray;
  display: flex;
`;

const Textone = styled.div`
  padding: 2.5%;
  flex: 1;
`;

const Texttwo = styled.div`
  display: flex;
  /* padding-top: 2%; */

  div:first-child {
    padding-right: 10px;
  }
`;

const Textcolor = styled.span`
  color: blue;
`;

const Textthree = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  color: gray;
`;

const Textfour = styled.div`
  width: 100%;
  margin-left: 3%;
`;

const Informationboxscontent = styled.div`
  flex-grow: 1;
`;

const Informationboxscontenttwo = styled.div`
  width: 250px;
`;

const Imgbox = styled.div`
  /* padding: 10px; */
  padding-left: 20%;
  padding-top: 8%;
  padding-bottom: 28%;
`;

const Textbox = styled.div``;

const Textfive = styled.div`
  padding-left: 5%;
  color: gray;
  font-size: 12px;
`;

const Textsix = styled.div`
  padding-left: 5%;
`;

const Buttonbox = styled.div`
  display: flex;
  width: 100%;
  padding-top: 3%;
  justify-content: space-around;
`;

const Footercontainer = styled.div`
  display: flex;
  padding-top: 1%;
  justify-content: center;
  align-items: center;
`;

const Home = styled.div`
  color: white;
  text-align: center;
  /* text-align: end; */

  width: 6%;
  height: 5vh;
  background-color: #3399ff;
  margin-right: 10px;

  div:first-child {
    padding-top: 10%;
    font-size: large;
  }
`;

const Scrap = styled.div`
  width: 6%;
  height: 5vh;
  border: solid 1px lightgray;

  div:first-child {
    padding-top: 10%;
    padding-left: 10%;
    font-size: large;
  }
`;
