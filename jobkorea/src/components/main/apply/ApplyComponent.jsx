import styled from "styled-components";

export default function ApplyComponent() {
  return (
    <Container>
      <Header>
        <Texttitle>입사지원 현황</Texttitle>
        <h2>
          <Texttitlespan>| 취업활동 증명서</Texttitlespan>
        </h2>
      </Header>
      <Subcontainerone>
        <Subcontaineronecontent>
          <h1>0</h1>
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
        <Subcontaineronecontent>
          <h1>0</h1>
          <span>지원취소</span>
        </Subcontaineronecontent>
      </Subcontainerone>
      <Subcontainertwo>
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
      </Subcontainertwo>
      <Subcontainerthree>
        <div>지원완료 및 지원예약 내역이 없습니다.</div>
        <p style={{ color: " grey" }}>
          회원님의 구직활동 정보를 분석하여 꼭 맞는 채용정보를 추천합니다
        </p>
        {/* <Button>스마트매치 바로가기</Button> */}
      </Subcontainerthree>
      <Subcontainerfour></Subcontainerfour>
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
              기업에 별도의 채용서류를 제출 했다면, 채용 여부 확정 후 서류 반환
              요청을 할 수 있습니다.
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
    </Container>
  );
}

const Container = styled.div`
  width: 50%;
  height: 93vh;
  background-color: white;
  border-style: solid;
  border-color: #f8f4f4;
  margin: auto;
`;

const Header = styled.div`
  display: flex;
  margin: auto;
  width: 80%;
  align-items: center;
  border-bottom: solid 1px lightgray;
`;

const Texttitle = styled.h1`
  width: 30%;
  font-weight: 10;
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
  width: 80%;
  height: 12vh;
  margin: auto;
  background-color: whitesmoke;
  margin-top: 50px;
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
  padding-top: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* width: 500px; */
  /* background-color: red; */
  border-bottom: 50px;
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
