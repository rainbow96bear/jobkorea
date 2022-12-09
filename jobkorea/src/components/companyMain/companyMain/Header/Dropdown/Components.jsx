import styled from "styled-components";

function DropDown() {
  return (
    <DropdownBox>
      <div className="flex">
        <div>
          <div>공고,지원자 관리</div>
          <ul>
            <li>전체 채용공고</li>
            <li>지원자관리</li>
            <li>차단내역</li>
            <li>
              <div className="addButton">
                <img src="img/icon_add.png"></img>
                공고등록
              </div>
            </li>
          </ul>
        </div>
        <div>
          <div>인재검색</div>
          <ul>
            <li>인재검색</li>
            <li>인재관리</li>
            <ul className="telent">
              <li>스크랩 인재</li>
              <li>오늘 본 인재</li>
              <li>연락처 확인 인재</li>
              <li>우리기업관심인재</li>
              <li>포지션 제안 인재</li>
            </ul>
            <li>SMS 발송 내역</li>
          </ul>
        </div>
        <div>
          <div>헤드헌팅 의뢰</div>
          <ul>
            <li>헤드헌팅 의뢰</li>
            <li>헤드헌팅 의뢰하기</li>
          </ul>
        </div>
        <div>
          <div>유료서비스 내역</div>
          <ul>
            <li>유료서비스 이용내역</li>
            <li>전자세금계산서</li>
            <li>쿠폰</li>
            <li>e-머니/충전금</li>
          </ul>
        </div>
        <div>
          <div>기업정보</div>
          <ul>
            <li>기업정보관리</li>
            <li>슈퍼기업관신청</li>
            <li>회원정보관리</li>
            <li>로그인 관리</li>
            <li>광고성 정보 설정</li>
            <li>2단계 인증 내역</li>
          </ul>
        </div>
        <div>
          <div>기업라운지</div>
          <ul>
            <li>HR/연봉자료</li>
            <li>HR포럼/세미나</li>
            <li>기업 문서서식</li>
            <li>잡코리아 기업러닝</li>
            <li>서비스제안/문의</li>
            <li>FAQ</li>
            <li>공지사항</li>
            <li>이벤트</li>
          </ul>
        </div>
        <div>
          <div>기업서비스 안내</div>
          <ul>
            <li>유료채용광고서비스</li>
            <li>인재검색 서칭서비스</li>
            <li>잡코리아 기업러닝</li>
            <li>스마트A 직정전문검사</li>
            <li>JAT 기업용 인적성 검사</li>
            <li>채용대행 솔루션</li>
            <li>배너광고</li>
          </ul>
        </div>
      </div>
    </DropdownBox>
  );
}

export default DropDown;

const DropdownBox = styled.div`
  height: 350px;
  width: 100%;
  background-color: white;
  position: absolute;
  z-index: 1;
  box-shadow: 0 1px 3px black;

  .telent {
    list-style: disc;
  }
  li::marker {
    font-size: 1px;
  }

  .flex {
    display: flex;
    width: 68%;
    margin: auto;
  }

  .flex > div {
    width: 14%;
  }

  .flex > div > div:first-child {
    font-size: 15px;
    font-weight: 600;
    border-bottom: 1px solid #f0f0f0;
    padding: 20px 0;
  }

  ul {
    list-style: none;
    padding-left: 0px;
    font-size: 13px;
  }

  li {
    padding: 5px 0;
  }

  .addButton {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #3399ff;
    color: white;
    margin-top: 120px;
    border-radius: 10px;
    width: 160px;
    height: 45px;
  }
`;
