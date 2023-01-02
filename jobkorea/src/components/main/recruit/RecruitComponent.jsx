import styled from "styled-components";

export default function RecruitComponent({
  recruitInfo,
  applybutton,
  midScreen,
  bottomScreen,
  sec,
  day,
  hour,
  min,
}) {
  return (
    <Divcontainer>
      <Informationboxs>
        <Informationboxscontent>
          <Boxscontentone>
            {recruitInfo[0]?.Companyuser_Info.companyName}
            <h2 style={{ color: "black" }}>{recruitInfo[0]?.recruitName}</h2>
            {day == 0 ? (
              <div className="hurry">
                공고 마감 임박 {hour} : {min} : {sec}
              </div>
            ) : day <= 0 && hour <= 0 && min <= 0 && sec <= 0 ? (
              <div className="magam">모집 마감된 공고입니다.</div>
            ) : (
              <div>
                공고 마감 시한 : {day}일 {hour} : {min} : {sec}
              </div>
            )}
          </Boxscontentone>
          {midScreen && (
            <Padding>
              <Imgbox>
                {recruitInfo[0]?.Companyuser_Info.companylogo && (
                  <img
                    src={`/uploads/${recruitInfo[0]?.Companyuser_Info.companylogo}`}
                    alt=""
                  />
                )}
              </Imgbox>

              <Textdiv>
                <div>기업정보</div>
                <Textbox1>
                  <div>
                    <CompText>
                      <Textfive>대표 이름</Textfive>
                      <Textsix>
                        {recruitInfo[0]?.Companyuser_Info.companyHeader}
                      </Textsix>
                    </CompText>
                    <CompText>
                      <Textfive>기업형태</Textfive>
                      <Textsix>
                        {recruitInfo[0]?.Companyuser_Info.selectedOption}
                      </Textsix>
                    </CompText>
                  </div>
                  <div>
                    <CompText>
                      <Textfive>담당자 명</Textfive>
                      <Textsix>
                        {recruitInfo[0]?.Companyuser_Info.companyIdname}
                      </Textsix>
                    </CompText>
                    <CompText>
                      <Textfive>담당자 번호</Textfive>
                      <Textsix>
                        {recruitInfo[0]?.Companyuser_Info.companyIdnumber}
                      </Textsix>
                    </CompText>
                    <CompText>
                      <Textfive>E-mail</Textfive>
                      <Textsix>
                        {recruitInfo[0]?.Companyuser_Info.companyIdemail}
                      </Textsix>
                    </CompText>
                  </div>
                </Textbox1>
              </Textdiv>
            </Padding>
          )}
          <Boxscontenttwo className={bottomScreen ? "afterflex" : "beforeflex"}>
            <Textone>
              <div>지원자격</div>
              <div>
                <Texttwo>
                  <Textthree>경력</Textthree>{" "}
                  <Textcolor>{recruitInfo[0]?.isExp}</Textcolor>
                </Texttwo>
                <Texttwo>
                  <Textthree>학력</Textthree>
                  <Textcolor>{recruitInfo[0]?.edu}</Textcolor>
                </Texttwo>
                <Texttwo>
                  <Textthree>우대</Textthree>
                  <Texttwobox>
                    {recruitInfo[0]?.condition == "" ? (
                      <div>우대 사항 없음</div>
                    ) : (
                      <div>
                        {recruitInfo[0]?.condition
                          .split(",")
                          .map((item, index) => (
                            <li key={`li-${index}`}>{item}</li>
                          ))}
                      </div>
                    )}
                  </Texttwobox>
                </Texttwo>
              </div>
            </Textone>

            <Textone>
              <div>근무조건</div>
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
              {recruitInfo[0]?.Companyuser_Info.companylogo && (
                <img
                  src={`/uploads/${recruitInfo[0]?.Companyuser_Info.companylogo}`}
                  alt=""
                />
              )}
            </Imgbox>

            <div>
              <div>기업정보</div>
              <Textbox2>
                <CompText>
                  <Textfive>대표 이름</Textfive>
                  <Textsix>
                    {recruitInfo[0]?.Companyuser_Info.companyHeader}
                  </Textsix>
                </CompText>
                <CompText>
                  <Textfive>담당자 명</Textfive>
                  <Textsix>
                    {recruitInfo[0]?.Companyuser_Info.companyIdname}
                  </Textsix>
                </CompText>
                <CompText>
                  <Textfive>담당자 번호</Textfive>
                  <Textsix>
                    {recruitInfo[0]?.Companyuser_Info.companyIdnumber}
                  </Textsix>
                </CompText>
                <CompText>
                  <Textfive>기업형태</Textfive>
                  <Textsix>
                    {recruitInfo[0]?.Companyuser_Info.selectedOption}
                  </Textsix>
                </CompText>
                <CompText>
                  <Textfive>E-mail</Textfive>
                  <Textsix>
                    {recruitInfo[0]?.Companyuser_Info.companyIdemail}
                  </Textsix>
                </CompText>
              </Textbox2>
            </div>
          </Informationboxscontenttwo>
        )}
      </Informationboxs>
      <Footercontainer>
        <Home>
          {day <= 0 && hour <= 0 && min <= 0 && sec <= 0 ? (
            <DelBtn>마감</DelBtn>
          ) : (
            <div className="apply" onClick={applybutton}>
              즉시 지원
            </div>
          )}
        </Home>
      </Footercontainer>
    </Divcontainer>
  );
}
const Textdiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const CompText = styled.div`
  // width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Texttwobox = styled.div``;

const PayBox = styled.div`
  width: fit-content;
  span {
    font-size: 11px;
    color: #888888;
  }
`;

const Divcontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 360px;
  width: 100%;
  padding-bottom: 20px;
`;

const Informationboxs = styled.div`
  display: flex;
  height: fit-content;
  width: 100%;
  max-width: 1268px;
  background-color: white;
  border-top: solid 2px black;
  border-left: solid 0.1px lightgray;
  border-bottom: solid 0.1px lightgray;
  border-right: solid 0.1px lightgray;
`;

const Boxscontentone = styled.div`
  color: gray;
  padding: 15px;
  border-bottom: solid 1px lightgray;

  .hurry {
    color: orange;
  }
  .magam {
    color: red;
  }
`;

const Boxscontenttwo = styled.div`
  width: 100%;
  padding: 15px;
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
  flex: 1;
`;

const Texttwo = styled.div`
  display: flex;
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

const Padding = styled.div`
  padding: 15px;
`;

const Informationboxscontent = styled.div`
  flex-grow: 1;
  border-right: solid 1px lightgray;
`;

const Informationboxscontenttwo = styled.div`
  width: 250px;
`;
const Imgbox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px 0;
  img {
    width: 200px;
  }
`;

const Textbox1 = styled.div`
  display: flex;
  & > div {
    width: 100%;
  }
  & > div > div {
    flex: 1;
    padding: 15px 0;
  }
`;
const Textbox2 = styled.div``;

const Textfive = styled.div`
  color: gray;
  font-size: 15px;
`;

const Textsix = styled.div`
  display: flex;
`;

const Footercontainer = styled.div`
  display: flex;
  padding-top: 20px;
  justify-content: center;
  align-items: center;
`;

const Home = styled.div`
  display: flex;
  align-items: center;
  color: white;
  padding: 0px 20px;
  height: 40px;
  div {
    font-weight: 900;
    font-size: large;
  }

  .apply {
    background-color: #3399ff;
  }
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
