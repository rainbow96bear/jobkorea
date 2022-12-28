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
              {day == 0 ? (
                <div className="hurry">
                  공고 마감 임박 {hour} : {min} : {sec}
                </div>
              ) : day <= 0 || hour <= 0 || min <= 0 || sec <= 0 ? (
                <div className="magam">모집 마감된 공고입니다.</div>
              ) : (
                <div>
                  공고 마감 시한 : {day}일 {hour} : {min} : {sec}
                </div>
              )}
            </Textfour>
          </Boxscontentone>

          <Boxscontenttwo>
            <Textone>
              <div style={{ marginBottom: 10 }}>지원자격</div>
              <div>
                <Texttwo>
                  <QTitleBox className="gray">경력</QTitleBox>{" "}
                  <Textcolor>{myRecruit?.isExp}</Textcolor>
                </Texttwo>
                <Texttwo>
                  <QTitleBox className="gray">학력</QTitleBox>
                  <Textcolor>{myRecruit?.edu}</Textcolor>
                </Texttwo>
                <Texttwo>
                  <QTitleBox className="gray">우대</QTitleBox>
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
                <TitleBox>고용형태</TitleBox>
                <Textcolor>{myRecruit?.shape}</Textcolor>
              </Texttwo>
              <Texttwo>
                <TitleBox>급여</TitleBox>
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
                <TitleBox>지역</TitleBox>
                <div>{myRecruit?.area}</div>
              </Texttwo>

              <Texttwo>
                <TitleBox>직급</TitleBox>
                <div>{myRecruit?.workRank}</div>
              </Texttwo>
              <Texttwo>
                <TitleBox>담당업무</TitleBox>
                <div>{myRecruit?.myTask}</div>
              </Texttwo>

              {myRecruit?.workDepartment == "" ? (
                <></>
              ) : (
                <Texttwo>
                  <TitleBox>근무부서</TitleBox>

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
                src={`/uploads/${myRecruit?.Companyuser_Info?.companylogo}`}
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
                <Textsix>{myRecruit?.Companyuser_Info?.companyIdname}</Textsix>
              </Texttwo>
              <Texttwo>
                <Textfive>담당자 번호</Textfive>
                <Textsix>
                  {myRecruit?.Companyuser_Info?.companyIdnumber}
                </Textsix>
              </Texttwo>
              <Texttwo>
                <Textfive>기업형태</Textfive>
                <Textsix>{myRecruit?.Companyuser_Info?.selectedOption}</Textsix>
              </Texttwo>
              <Texttwo>
                <Textfive>E-mail</Textfive>
                <Textsix>{myRecruit?.Companyuser_Info?.companyIdemail}</Textsix>
              </Texttwo>
            </Textbox>
          </div>
        </Informationboxscontenttwo>
      </Informationboxs>
      {day <= 0 || hour <= 0 || min <= 0 || sec <= 0 ? (
        <DelBtn>마감</DelBtn>
      ) : (
        <Footercontainer>
          <FixBtn>
            <div
              onClick={() => moveTo(`/companymain/fixpost/${myRecruit?.id}`)}
            >
              <strong>공고 수정</strong>
            </div>
          </FixBtn>
          <BackBtn>
            <div onClick={() => moveTo("/companymain/managepost")}>
              <strong>뒤로 가기</strong>
            </div>
          </BackBtn>
        </Footercontainer>
      )}

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
            </UserFlex>
            <UserFlex>
              <UserTitle>지원자 전화번호</UserTitle>
              <UserContent>{item.individualTel}</UserContent>
            </UserFlex>
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
              <UserFlex>
                <UserTitle>합격처리 완료</UserTitle>
                <UserContent></UserContent>
              </UserFlex>
            ) : (
              <UserFlex>
                <UserTitle>불합격처리 완료</UserTitle>
                <UserContent></UserContent>
              </UserFlex>
            )}
          </UserInfo>
        ))}
      </ApplyUserBox>
    </div>
  );
}

const UserBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 20px;

  div {
    width: 80px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #3399ff;
    border: 1px solid #d3d3d3;
    border-radius: 10px;
    margin-right: 10px;
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
  @media (max-width: 450px) {
    padding: 20px;
  }
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
  justify-content: space-around;
  margin: auto;
  white-space: nowrap;

  @media (max-width: 450px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const ApplyUserBox = styled.div`
  width: 100%;
  max-width: 1260px;
  margin: 50px auto;
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

const Informationboxs = styled.div`
  display: flex;
  margin: auto;
  margin-top: 10px;
  max-width: 1260px;
  width: 100%;
  height: fit-content;
  background-color: white;
  border-top: solid 2px black;
  border-left: solid 0.1px lightgray;
  border-bottom: solid 0.1px lightgray;
  border-right: solid 0.1px lightgray;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const Boxscontentone = styled.div`
  width: 100%;
  padding: 10px 0;
  background-color: white;
  color: gray;
  border-bottom: solid 1px lightgray;
  border-right: solid 1px lightgray;
`;

const Boxscontenttwo = styled.div`
  width: 100%;
  height: 420px;
  background-color: white;
  border-bottom: solid 1px lightgray;
  border-right: solid 1px lightgray;
  display: flex;

  @media (max-width: 1100px) {
    flex-direction: column;
    height: fit-content;
  }
`;

const Textone = styled.div`
  flex: 1;
  padding: 40px;
`;

const Texttwo = styled.div`
  display: flex;
  margin-bottom: 10px;

  ul {
    padding-left: 0;
    margin: 0 0 0 20px;
  }
`;

const TitleBox = styled.div`
  width: 100px;
  color: gray;
  margin-right: 10px;
`;

const QTitleBox = styled.div`
  width: 70px;
  color: gray;
  margin-right: 10px;
`;

const Textcolor = styled.span`
  color: blue;
`;

const Textfour = styled.div`
  margin-left: 40px;
  h2 {
    margin: 7.5px 0;
  }

  .hurry {
    color: orange;
  }
  .magam {
    color: red;
  }
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
  padding-left: 10px;
  color: gray;
  font-size: 12px;
  display: flex;
  align-items: center;
  width: 75px;
`;

const Textsix = styled.div`
  padding-left: 5%;
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
  width: 110px;
  height: 45px;
  background-color: #888888;
  margin-right: 10px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DelBtn = styled.div`
  color: white;
  text-align: center;
  cursor: pointer;
  width: 110px;

  height: 45px;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
`;

const FixBtn = styled.div`
  color: white;
  text-align: center;
  cursor: pointer;
  width: 110px;

  height: 45px;
  background-color: #3399ff;
  margin-right: 10px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
