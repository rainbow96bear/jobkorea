import { useState } from "react";
import styled from "styled-components";

export default function ApplyComponent({ application }) {
  const [newapplication, setNewapplication] = useState([]);

  console.log(application);
  return (
    <Container>
      <Contaninerdiv>
        <Header>
          <Texttitle>입사지원 현황</Texttitle>

          <h2>{/* <Texttitlespan>| 취업활동 증명서</Texttitlespan> */}</h2>
        </Header>
        <Subcontainerone>
          <Subcontaineronecontent>
            <h1>{application.length}</h1>
            <span>지원완료</span>
          </Subcontaineronecontent>

          {/* <Subcontaineronecontent>
          <h1>0</h1>
          <span>열람</span>
        </Subcontaineronecontent>
        <Subcontaineronecontent>
          <h1>0</h1>
          <span>미열람</span>
        </Subcontaineronecontent> */}
          {/* <Subcontaineronecontent>
          <h1>0</h1>
          <span>지원취소</span>
        </Subcontaineronecontent> */}
        </Subcontainerone>

        {/* <Subcontainertwo>
        <Subcontainertwocontentitem>
          <Itemone>
            <span>조회기간</span>
            <button>1주일</button>
            <button>1개월</button>
            <button>2개월</button>
            <button>3개월</button>
          </Itemone>

          <Itemtwo>
            <span>진행여부 </span>
            <select>
              <option>전체</option>
              <option>진행중</option>
              <option>마감</option>
            </select>
            <span>알람여부</span>
            <select>
              <option>전체</option>
              <option>열람</option>
              <option>미열람</option>
            </select>
          </Itemtwo>
        </Subcontainertwocontentitem>
        <Subcontainertwocontentitems>
          <Itemone>
            <span style={{ width: 80 }}>날짜선택</span>
            <input type="date" />
            <input type="date" />
          </Itemone>

          <Itemtwo>
            <span>지원상태 </span>
            <select style={{ width: 60 }}>
              <option>전체</option>
              <option>지원완료</option>
              <option>지원취소</option>
            </select>
            <input
              style={{ width: 140 }}
              type="text"
              placeholder="기업명,채용제목"
            />
          </Itemtwo>
        </Subcontainertwocontentitems>
        <Search>검색</Search>
      </Subcontainertwo> */}
        <div>
          <Mainbar>
            <Itemdiv>회사로고</Itemdiv>
            <Itemdiv>회사이름</Itemdiv>
            <Itemdiv>공고명</Itemdiv>
            <Itemdiv>업무</Itemdiv>
            <Itemdiv>직급</Itemdiv>
            <Itemdiv>지역</Itemdiv>
            <Itemdiv>상태</Itemdiv>
          </Mainbar>

          <Subcontainerthree>
            {application.length ? (
              <>
                {application.map((item, index) => (
                  <Itembox key={`${index}`}>
                    <Itemdiv>
                      <Companylogo
                        src={`http://localhost:8080/uploads/${
                          application[`${index}`]?.Companyuser_Info.companylogo
                        }`}
                        alt=""
                      />
                    </Itemdiv>
                    <Itemdiv>
                      <Companyname>
                        {application[`${index}`]?.Companyuser_Info.companyName}
                      </Companyname>
                    </Itemdiv>
                    <Itemdiv>
                      <RecruitName>{item.recruitName}</RecruitName>
                    </Itemdiv>

                    {/* {application.length ? (
          <div>
            {application.map((item, index) => (
              <div key={`${index}`}>
                <Itembox>
                  <div>
                    <RecruitName>{item.recruitName}</RecruitName>
                  </div>
                  <Thicksolid></Thicksolid>
                  <div style={{ width: 180 }}>
                    <h2>업무: {item.myTask}</h2>
                    <h2>직급: {item.workRank}</h2>
                    <h2>지역: {item.area}</h2>
                  </div>
                  <Canclebutton>취소하기</Canclebutton>
                </Itembox>
                <ResultBox>
                  {item.personalRecruit.check == "pass" ? (
                    <div>축하합니다! 서류전형에 합격하셨습니다.</div>
                  ) : item.personalRecruit.check == "fail" ? (
                    <div>아쉽지만 서류전형에 합격하지 못하셨습니다.</div>
                  ) : (
                    <div>제출하신 서류를 검토중입니다. 기다려주세요</div>
                  )}
                </ResultBox>
              </div>
            ))}
          </div>
        ) : (
          <div>지원완료 및 지원예약 내역이 없습니다.</div>
        )} */}

                    <Itemdiv>{item.myTask}</Itemdiv>
                    <Itemdiv>{item.workRank}</Itemdiv>
                    <Itemdiv>{item.area}</Itemdiv>
                    <Itemdiv>{item.personalRecruit.check}예성</Itemdiv>

                    {/* <Canclebutton>취소하기</Canclebutton> */}
                  </Itembox>
                ))}
              </>
            ) : (
              <div>지원완료 및 지원예약 내역이 없습니다.</div>
            )}

            {/* {application.length ? (
        
          {application.map((item,index)=>(
             <Itembox>
            <div>
              <RecruitName>{item.recruitName}</RecruitName>
            </div>
            <Thicksolid></Thicksolid>
           
          </Itembox>
         
          ))}
        ) : (
          <div>지원완료 및 지원예약 내역이 없습니다.</div>
        )} */}

            <p style={{ color: " grey" }}>
              회원님의 구직활동 정보를 분석하여 꼭 맞는 채용정보를 추천합니다
            </p>
            {/* <Button>스마트매치 바로가기</Button> */}
          </Subcontainerthree>
        </div>
        {/* <Subcontainerfour></Subcontainerfour> */}
        <Subcontainertwo>
          <Listone>
            <ul>
              <li style={{ color: "grey" }}>
                입사지원을 한 후 해당이력서를 수정해도{" "}
                <span>이전에 지원한 이력서의 내용은 바뀌지 않으므로</span>
                회사마다 이력서 내용을 다르게 지원할 수 있습니다.
              </li>
            </ul>
            <ul>
              <li style={{ color: "grey" }}>
                입사지원 내역을 삭제한 경우 지원내역, 지원취소, 열람여부 확인이
                불가능합니다.
              </li>
            </ul>
            <ul>
              <li style={{ color: "grey" }}>
                지원취소 시 지원한 회사에서 이력서를 열람할 수 없으며, 취업활동
                증명서 조회도 불가능합니다.
                <span style={{ textDecoration: "underline" }}>
                  지원취소 안내보기
                </span>
              </li>
            </ul>
            <ul>
              <li style={{ color: "grey" }}>
                기업에 별도의 채용서류를 제출 했다면, 채용 여부 확정 후 서류
                반환 요청을 할 수 있습니다.
                <span style={{ textDecoration: "underline" }}>
                  채용절차법 확인하기
                </span>
              </li>
            </ul>
            <ul>
              <li style={{ color: "grey" }}>
                지원이력서에 포함된 첨부파일은 채용공고 접수마감일로부터 90일간
                확인 가능합니다.
              </li>
            </ul>
          </Listone>
        </Subcontainertwo>
      </Contaninerdiv>
    </Container>
  );
}
const Contaninerdiv = styled.div`
  width: 100%;
  max-width: 938px;
`;

const Itemdiv = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const Mainbar = styled.div`
  border-top: solid;
  border-color: lightgray;
  background-color: #f6f6fc;
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
  width: 100%;
  /* margin-left: 10%; */
  height: 5vh;
  /* & > div:nth-child(1) {
    width: 23%;
  }

  & > div:nth-child(2) {
    width: 20%;
  }
  & > div:nth-child(3) {
    width: 21%;
  }
  & > div:nth-child(4) {
    width: 15%;
  }
  & > div:nth-child(5) {
    width: 10%;
  }
  & > div:nth-child(6) {
    width: 10%;
  } */
`;

const Companyname = styled.div`
  /* font-size: 30px; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Companylogo = styled.img`
  width: 50px;
`;

const ResultBox = styled.div`
  padding: 60px 0;
`;

const Canclebutton = styled.div`
  width: 14%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5%;
  margin-left: 15%;
  color: red;
  font-size: 20px;
  border-style: solid;
`;

const Thicksolid = styled.div`
  border-left: thin solid gray;
  height: 20vh;
  /* margin-left: 20%; */
`;

const RecruitName = styled.div`
  /* padding-top: 18%; */
  /* width: 15vw; */
  display: flex;
  align-items: center;
  justify-content: center;
  /* align-items: center; */

  /* display: flex;
  justify-content: center;
  align-items: center; */

  color: black;
  /* display: inline-block; */
`;

const Itembox = styled.div`
  /* min-width: 750px; */
  display: flex;
  width: 100%;
  /* border: solid; */
  /* border-color: lightgray; */
  justify-content: center;
  align-items: center;
  /* height: 20vh; */
  /* color: gray; */
  /* margin-top: 5%; */
  /* & > div:nth-child(1) {
    width: 16%;
  }

  & > div:nth-child(2) {
    width: 10%;
  }
  & > div:nth-child(3) {
    width: 20%;
  }
  & > div:nth-child(4) {
    width: 10%;
  }
  & > div:nth-child(5) {
    width: 10%;
  }
  & > div:nth-child(6) {
    width: 5%;
  } */
`;

const Container = styled.div`
  width: 100%;
  /* height: 100vh; */
  background-color: white;
  padding-bottom: 20px;
  border-style: solid;
  border-color: #f8f4f4;
  /* margin: auto; */
  display: flex;
  justify-content: center;
`;

const Header = styled.div`
  display: flex;
  margin: auto;
  /* margin-left: 10%; */
  width: 100%;
  align-items: center;
  justify-content: center;
  border-bottom: solid 1px lightgray;
`;

const Texttitle = styled.h1`
  width: 100%;
  font-weight: 10;
  display: flex;
  justify-content: center;
`;

const Texttitlespan = styled.span`
  color: lightgray;
`;

const Subcontainerone = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 80%;
  margin: auto;
  margin-bottom: 3%;
`;

const Subcontaineronecontent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: gray;
`;

const Subcontainertwo = styled.div`
  /* padding-top: 5%; */

  display: flex;
  width: 100%;
  /* height: 12vh; */
  /* margin: auto; */
  background-color: whitesmoke;
  margin-top: 40px;
`;

const Subcontainertwocontentitem = styled.div`
  width: 35%;
  height: 22vh;
  /* background-color: lightblue; */
  min-width: 310px;
`;

const Subcontainertwocontentitems = styled.div`
  min-width: 310px;
  width: 35%;
  height: 22vh;
  /* background-color: lightcoral; */
`;

// const Subcontainertwocontentitemtwo = styled.div`
//   width: 40%;
//   height: 22vh;
//   background-color: lightgreen;
// `;

const Itemone = styled.div`
  padding: 5%;
  display: flex;
  justify-content: space-around;
`;

const Itemtwo = styled.div`
  padding: 5%;

  display: flex;
  justify-content: space-around;
`;

const Search = styled.div`
  margin-top: 2%;
  width: 120px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: #3399ff;
`;

const Subcontainerthree = styled.div`
  /* padding-top: 10%; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* width: 500px; */
  /* background-color: red; */
  /* border-bottom: 50px; */
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 30px;
  border-color: lightgray;
  border-style: solid;
  margin-bottom: 80px;
`;

const Subcontainerfour = styled.div`
  width: 80%;
  border-top: solid;
  border-color: #edeaea;
  margin: auto;
`;

const Listone = styled.div`
  width: 100%;
  font-size: 10px;

  & span {
    color: black;
  }
`;
