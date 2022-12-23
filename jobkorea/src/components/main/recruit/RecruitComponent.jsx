import styled from "styled-components";

// import { useEffect, useState } from "react";

export default function RecruitComponent({
  recruitInfo,
  applybutton,
  midScreen,
  bottomScreen,
}) {
  return (
    <>
      <Divcontainer>
        <Informationboxs>
          <Informationboxscontent>
            <Boxscontentone>
              <Textfour>
                {recruitInfo[0]?.Companyuser_Info.companyName}

                <h2 style={{ color: "black" }}>
                  {recruitInfo[0]?.recruitName}
                </h2>
              </Textfour>
            </Boxscontentone>
            {midScreen && (
              <Informationboxscontenttwoafter>
                <Imgboxafter>
                  <img
                    style={{ width: 100 }}
                    src={`http://localhost:8080/uploads/${recruitInfo[0]?.Companyuser_Info.companylogo}`}
                    alt=""
                  />
                </Imgboxafter>

                <div>
                  <div style={{ marginBottom: 10, marginLeft: 10 }}>
                    기업정보
                  </div>
                  <Textbox>
                    <Texttwo>
                      <Textfive>대표 이름</Textfive>
                      <Textsix>
                        {recruitInfo[0]?.Companyuser_Info.companyHeader}
                      </Textsix>
                    </Texttwo>
                    <Texttwo>
                      <Textfive>담당자 명</Textfive>
                      <Textsix style={{ marginLeft: 20 }}>
                        {recruitInfo[0]?.Companyuser_Info.companyIdname}
                      </Textsix>
                    </Texttwo>
                    <Texttwo>
                      <Textfive>담당자 번호</Textfive>
                      <Textsix style={{ marginLeft: 8 }}>
                        {recruitInfo[0]?.Companyuser_Info.companyIdnumber}
                      </Textsix>
                    </Texttwo>
                    <Texttwo>
                      <Textfive>기업형태</Textfive>
                      <Textsix style={{ marginLeft: 8 }}>
                        {recruitInfo[0]?.Companyuser_Info.selectedOption}
                      </Textsix>
                    </Texttwo>
                    <Texttwo>
                      <Textfive style={{ width: 70 }}>E-mail</Textfive>
                      <Textsix>
                        {recruitInfo[0]?.Companyuser_Info.companyIdemail}
                      </Textsix>
                    </Texttwo>
                  </Textbox>
                </div>
              </Informationboxscontenttwoafter>
            )}
            <Boxscontenttwo
              className={bottomScreen ? "afterflex" : "beforeflex"}
            >
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
                    <Texttwobox>
                      {recruitInfo[0]?.condition == "" ? (
                        <div>우대 사항 없음</div>
                      ) : (
                        <ul style={{ padding: 0 }}>
                          {recruitInfo[0]?.condition
                            .split(",")
                            .map((item, index) => (
                              <li key={`li-${index}`}>{item}</li>
                            ))}
                        </ul>
                      )}
                    </Texttwobox>
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
                  <PayBox>
                    {recruitInfo[0]?.isPay == "회사내규에 따름" ||
                    recruitInfo[0]?.isPay == "회사내규에 따름, 면접 후 결정" ||
                    recruitInfo[0]?.isPay == "면접 후 결정, 회사내규에 따름" ? (
                      <>{recruitInfo[0]?.isPay}</>
                    ) : (
                      <>
                        {recruitInfo[0]?.payKinds == "주급" ? (
                          <span>주급 </span>
                        ) : (
                          <></>
                        )}
                        {recruitInfo[0]?.payKinds == "월급" ? (
                          <span>월급 </span>
                        ) : (
                          <></>
                        )}
                        {recruitInfo[0]?.payKinds == "연봉" ? (
                          <span>연봉 </span>
                        ) : (
                          <></>
                        )}
                        {recruitInfo[0]?.minPay}~{recruitInfo[0]?.maxPay}만원
                        {recruitInfo[0]?.isPay ? (
                          <span>- {recruitInfo[0]?.isPay}</span>
                        ) : (
                          <></>
                        )}
                      </>
                    )}
                  </PayBox>
                </Texttwo>
                <Texttwo>
                  <Textthree>지역</Textthree>
                  <div>{recruitInfo[0]?.area}</div>
                </Texttwo>
                <Texttwo>
                  <Textthree>직급</Textthree>
                  <div>{recruitInfo[0]?.workRank}</div>
                </Texttwo>
                <Texttwo>
                  <Textthree>담당업무</Textthree>
                  <div>{recruitInfo[0]?.myTask}</div>
                </Texttwo>

                {recruitInfo[0]?.workDepartment == "" ? (
                  <></>
                ) : (
                  <Texttwo>
                    <Textthree>근무부서</Textthree>

                    <div>{recruitInfo[0]?.workDepartment}</div>
                  </Texttwo>
                )}
              </Textone>
            </Boxscontenttwo>
          </Informationboxscontent>
          {!midScreen && (
            <Informationboxscontenttwo>
              <Imgbox>
                <img
                  style={{ width: 100 }}
                  src={`http://localhost:8080/uploads/${recruitInfo[0]?.Companyuser_Info.companylogo}`}
                  alt=""
                />
              </Imgbox>

              <div>
                <div style={{ marginBottom: 10, marginLeft: 10 }}>기업정보</div>
                <Textbox>
                  <Texttwo>
                    <Textfive>대표 이름</Textfive>
                    <Textsix>
                      {recruitInfo[0]?.Companyuser_Info.companyHeader}
                    </Textsix>
                  </Texttwo>
                  <Texttwo>
                    <Textfive>담당자 명</Textfive>
                    <Textsix style={{ marginLeft: 20 }}>
                      {recruitInfo[0]?.Companyuser_Info.companyIdname}
                    </Textsix>
                  </Texttwo>
                  <Texttwo>
                    <Textfive>담당자 번호</Textfive>
                    <Textsix style={{ marginLeft: 8 }}>
                      {recruitInfo[0]?.Companyuser_Info.companyIdnumber}
                    </Textsix>
                  </Texttwo>
                  <Texttwo>
                    <Textfive>기업형태</Textfive>
                    <Textsix style={{ marginLeft: 8 }}>
                      {recruitInfo[0]?.Companyuser_Info.selectedOption}
                    </Textsix>
                  </Texttwo>
                  <Texttwo>
                    <Textfive style={{ width: 70 }}>E-mail</Textfive>
                    <Textsix>
                      {recruitInfo[0]?.Companyuser_Info.companyIdemail}
                    </Textsix>
                  </Texttwo>
                </Textbox>
              </div>
            </Informationboxscontenttwo>
          )}
        </Informationboxs>
        <Footercontainer>
          <Home>
            <div onClick={applybutton}>
              <strong>즉시 지원</strong>
            </div>
          </Home>
        </Footercontainer>
      </Divcontainer>
    </>
  );
}
const Informationboxscontenttwoafter = styled.div`
  display: flex;
  justify-content: center;
`;

const Imgboxafter = styled.div``;

const Texttwobox = styled.div``;

const PayBox = styled.div`
  span {
    font-size: 11px;
    color: #888888;
  }
`;

const Divcontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  /* min-height: 100vh; */
`;

const Informationboxs = styled.div`
  display: flex;
  height: fit-content;
  width: 100%;
  max-width: 60%;
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
  /* display: flex; */
  /* margin-left: 10%; */
  &.afterflex {
    text-align: center;
    width: 50%;
    min-width: 300px;
    margin: auto;
    border: none;
  }

  &.beforeflex {
    display: flex;
  }
`;
const Textone = styled.div`
  padding: 2.5%;
  flex: 1;
`;

const Texttwo = styled.div`
  display: flex;

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
  width: 90%;
  margin-left: 3%;
`;

const Informationboxscontent = styled.div`
  flex-grow: 1;
  height: fit-content;
`;

const Informationboxscontenttwo = styled.div`
  width: 250px;
`;

const Imgbox = styled.div`
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
  /* padding-left: 5%; */
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
  padding: 5px 20px;
  width: 100%;
  height: 5vh;
  background-color: #3399ff;
  margin-right: 10px;

  div:first-child {
    padding-top: 10%;
    font-size: large;
  }
`;
