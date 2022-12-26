import { useEffect } from "react";
import styled from "styled-components";

export default function RecruitInfoComponent({
  myRecruit,
  moveTo,
  applyUserInfo,
  failOnclick,
  passOnclick,
  btnRender,
  sec,
  day,
  hour,
  min,
}) {
  useEffect(() => {
    console.log(btnRender);
  }, [btnRender]);

  return (
    <div>
      <Informationboxs>
        <Informationboxscontent>
          <Boxscontentone>
            <Textfour>
              {myRecruit?.Companyuser_Info?.companyName}
              <h2 style={{ color: "black" }}>{myRecruit?.recruitName}</h2>
              <div>
                공고 마감 시한 : {day}일 {hour} : {min} : {sec}
              </div>
            </Textfour>
          </Boxscontentone>
          <Boxscontenttwo>
            <Textone>
              <div style={{ marginBottom: 10 }}>지원자격</div>
              <div>
                <Texttwo>
                  <TitleBox className="gray">경력</TitleBox>{" "}
                  <Textcolor>{myRecruit?.isExp}</Textcolor>
                </Texttwo>
                <Texttwo>
                  <TitleBox className="gray">학력</TitleBox>
                  <Textcolor>{myRecruit?.edu}</Textcolor>
                </Texttwo>
                <Texttwo>
                  <TitleBox className="gray">우대</TitleBox>
                  {myRecruit?.condition == "" ? (
                    <div>우대 사항 없음</div>
                  ) : (
                    <ul>
                      {myRecruit?.condition?.split(",").map((item, index) => (
                        <li key={`li-${index}`}>{item}</li>
                      ))}
                    </ul>
                  )}
                </Texttwo>
              </div>
            </Textone>

            <Textone>
              <div style={{ marginBottom: 10 }}>근무조건</div>
              <Texttwo>
                <Textthree>고용형태</Textthree>
                <Textcolor>{myRecruit?.shape}</Textcolor>
              </Texttwo>
              <Texttwo>
                <Textthree>급여</Textthree>
                <PayBox>
                  {myRecruit?.isPay == "회사내규에 따름" ||
                  myRecruit?.isPay == "회사내규에 따름, 면접 후 결정" ||
                  myRecruit?.isPay == "면접 후 결정, 회사내규에 따름" ? (
                    <>{myRecruit?.isPay}</>
                  ) : (
                    <>
                      {myRecruit?.payKinds == "주급" ? (
                        <span>주급 </span>
                      ) : (
                        <></>
                      )}
                      {myRecruit?.payKinds == "월급" ? (
                        <span>월급 </span>
                      ) : (
                        <></>
                      )}
                      {myRecruit?.payKinds == "연봉" ? (
                        <span>연봉 </span>
                      ) : (
                        <></>
                      )}
                      {myRecruit?.minPay}~{myRecruit?.maxPay}만원
                      {myRecruit?.isPay ? (
                        <span>- {myRecruit?.isPay}</span>
                      ) : (
                        <></>
                      )}
                    </>
                  )}
                </PayBox>
              </Texttwo>
              <Texttwo>
                <Textthree>지역</Textthree>
                <div>
                  {myRecruit?.area} <button>지도</button>
                </div>
              </Texttwo>
              <Texttwo>
                <Textthree>시간</Textthree>
                <div>주5일(월~금) | 09:00~18:00 탄력근무제</div>
              </Texttwo>
              <Texttwo>
                <Textthree>직급</Textthree>
                <div>{myRecruit?.workRank}</div>
              </Texttwo>
              <Texttwo>
                <Textthree>담당업무</Textthree>
                <div>{myRecruit?.myTask}</div>
              </Texttwo>

              {myRecruit?.workDepartment == "" ? (
                <></>
              ) : (
                <Texttwo>
                  <Textthree>근무부서</Textthree>

                  <div>{myRecruit?.workDepartment}</div>
                </Texttwo>
              )}
            </Textone>
          </Boxscontenttwo>
        </Informationboxscontent>
        <Informationboxscontenttwo>
          <Imgbox>
            {myRecruit?.Companyuser_Info?.companylogo && (
              <img
                src={`http://localhost:8080/uploads/${myRecruit?.Companyuser_Info?.companylogo}`}
              />
            )}
          </Imgbox>
          <div>
            <div style={{ marginBottom: 10, marginLeft: 10 }}>기업정보</div>
            <Textbox>
              <Texttwo>
                <Textfive>대표 이름</Textfive>
                <Textsix>{myRecruit?.Companyuser_Info?.companyHeader}</Textsix>
              </Texttwo>
              <Texttwo>
                <Textfive>담당자 명</Textfive>
                <Textsix style={{ marginLeft: 20 }}>
                  {myRecruit?.Companyuser_Info?.companyIdname}
                </Textsix>
              </Texttwo>
              <Texttwo>
                <Textfive>담당자 번호</Textfive>
                <Textsix style={{ marginLeft: 8 }}>
                  {myRecruit?.Companyuser_Info?.companyIdnumber}
                </Textsix>
              </Texttwo>
              <Texttwo>
                <Textfive>기업형태</Textfive>
                <Textsix style={{ marginLeft: 8 }}>
                  {myRecruit?.Companyuser_Info?.selectedOption}
                </Textsix>
              </Texttwo>
              <Texttwo>
                <Textfive style={{ width: 70 }}>E-mail</Textfive>
                <Textsix>{myRecruit?.Companyuser_Info?.companyIdemail}</Textsix>
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
        <FixBtn>
          <div onClick={() => moveTo(`/companymain/fixpost/${myRecruit?.id}`)}>
            <strong>공고 수정</strong>
          </div>
        </FixBtn>
        <BackBtn>
          <div onClick={() => moveTo("/companymain/managepost")}>
            <strong>뒤로 가기</strong>
          </div>
        </BackBtn>
      </Footercontainer>
      <ApplyUserBox>
        {applyUserInfo.map((item, index) => (
          <UserInfo key={`div-${index}`}>
            <UserFlex>
              <UserTitle>지원자 명</UserTitle>
              <UserContent>{item.individualName}</UserContent>
            </UserFlex>
            <UserFlex>
              <UserTitle>지원자 E-mail</UserTitle>
              <UserContent>{item.individualEmail}</UserContent>
              {/* <div>{item.personalRecruit.check}</div> */}
              {!item.personalRecruit.check ? (
                <UserBtn>
                  <div
                    onClick={() => {
                      passOnclick(item.individualId);
                    }}
                  >
                    합격
                  </div>
                  <div
                    onClick={() => {
                      failOnclick(item.individualId);
                    }}
                  >
                    불합격
                  </div>
                </UserBtn>
              ) : item.personalRecruit.check == "pass" ? (
                <div>합격처리 완료</div>
              ) : (
                <div>불합격처리 완료</div>
              )}
            </UserFlex>
            <UserFlex>
              <UserTitle>지원자 전화번호</UserTitle>
              <UserContent>{item.individualTel}</UserContent>
            </UserFlex>
          </UserInfo>
        ))}
      </ApplyUserBox>
    </div>
  );
}

const UserBtn = styled.div`
  display: flex;
  align-items: center;

  div {
    width: 100px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #3399ff;
    border: 1px solid #d3d3d3;
    border-radius: 10px;
    margin-right: 20px;
    cursor: pointer;
  }

  div:last-child {
    background-color: red;
  }
`;

const UserContent = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;

const UserTitle = styled.div`
  font-size: 20px;
  font-weight: 800;
  width: 25%;
  display: flex;
  align-items: center;
  padding: 20px;
`;
const UserFlex = styled.div`
  display: flex;
`;

const ApplyUserBox = styled.div`
  width: 60%;
  margin: auto;
`;

const UserInfo = styled.div`
  border: 1px solid #d3d3d3;
`;

const PayBox = styled.div`
  span {
    font-size: 11px;
    color: #888888;
  }
`;

const InformationBox = styled.div`
  margin: auto;
  width: 50%;
`;

const Informationboxs = styled.div`
  display: flex;
  margin: auto;
  margin-top: 10px;
  width: 70%;
  height: 550px;
  background-color: white;
  border-top: solid 2px black;
  border-left: solid 0.1px lightgray;
  border-bottom: solid 0.1px lightgray;
  border-right: solid 0.1px lightgray;
`;

const Boxscontentone = styled.div`
  padding: 1% 0;
  height: 20%;
  width: 100%;
  background-color: white;
  color: gray;
  border-bottom: solid 1px lightgray;
  border-right: solid 1px lightgray;
`;

const Boxscontenttwo = styled.div`
  width: 100%;
  height: 76.2%;
  background-color: white;
  border-bottom: solid 1px lightgray;
  border-right: solid 1px lightgray;
  display: flex;
`;

const Textone = styled.div`
  padding: 2.5%;
  flex: 1;
`;

const Texttwo = styled.div`
  display: flex;
  margin-bottom: 10px;

  div:first-child {
    padding-right: 10px;
  }
  ul {
    padding-left: 0;
    margin: 0 0 0 20px;
  }
`;

const TitleBox = styled.div`
  min-width: 40px;
  color: gray;
  margin-right: 10px;
`;

const Textcolor = styled.span`
  color: blue;
`;

const Textthree = styled.div`
  width: 20%;
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
  width: 300px;
`;

const Imgbox = styled.div`
  width: 200px;
  margin: 20px auto;
  img {
    width: 200px;
  }
`;

const Textbox = styled.div``;

const Textfive = styled.div`
  padding-left: 5%;
  color: gray;
  font-size: 12px;
  display: flex;
  align-items: center;
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

const BackBtn = styled.div`
  color: white;
  text-align: center;
  cursor: pointer;
  width: 6%;
  height: 45px;
  background-color: #888888;
  margin-right: 10px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FixBtn = styled.div`
  color: white;
  text-align: center;
  cursor: pointer;
  width: 6%;
  height: 45px;
  background-color: #3399ff;
  margin-right: 10px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
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
