import styled from "styled-components";
export default function FooterComponent({ smallScreen }) {
  return (
    <FooterBox>
      <FooterFrame>
        <FirstLine>
          <div className={smallScreen ? "left" : "smallLeft"}>
            <span className="rightPadding">공지사항</span>
            <div>[이벤트]12월 전체 회원 이벤트</div>
          </div>
          {smallScreen && (
            <div className="right">
              <div> 잡코리아 TV</div>
              <div>전문채용관</div>
              <div>슈퍼기업관</div>
              <div>헤드헌팅 의뢰</div>
              <div>기업러닝</div>
              <div>더보기</div>
            </div>
          )}
        </FirstLine>
        {smallScreen && (
          <>
            <SecondLine>
              <div>회사소개</div>
              <div>운영사이트</div>
              <div>이용약관</div>
              <span>개인정보처리방침</span>
              <div>Open API</div>
              <div>광고문의</div>
              <div>제휴문의</div>
              <div>고객센터</div>
            </SecondLine>
            <ThirdLine>
              <div>
                고객센터 : 1588-19350 (평일 09:00 ~ 19:00 토요일 09:00 ~ 15:00)
              </div>
              <div>FAX : 02-565-9351</div>
              <div>Email : helpdesk@jobkorea.co.kr</div>
              <div>톡톡상담</div>
            </ThirdLine>
            <ForthLine>
              <div>
                <span>JOBKOREA</span>
                <div>LLC. All rightreserved.</div>
              </div>
            </ForthLine>
          </>
        )}
      </FooterFrame>
    </FooterBox>
  );
}

const FooterBox = styled.div`
  border-top: solid 1px lightgray;
  display: flex;
  justify-content: center;
  padding: 30px 0;
`;
const FooterFrame = styled.div`
  min-width: 330px;
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  span {
    font-weight: 900;
  }
`;

const FirstLine = styled.div`
  display: flex;
  justify-content: space-between;
  border: solid 1px gray;
  background-color: #f9f9f9;
  padding: 15px;
  margin: 10px 0;
  font-size: 12px;
  & .left {
    display: flex;
    width: 40%;
  }
  & .smallLeft {
    display: flex;
  }
  & .right {
    display: flex;
    width: 40%;
    justify-content: space-between;
  }
  & .rightPadding {
    padding-right: 10px;
  }
`;
const SecondLine = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
  div {
    padding: 2px 15px;
  }
`;
const ThirdLine = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
  div {
    font-size: small;
    padding: 0 20px;
  }
`;
const ForthLine = styled.div`
  display: flex;
  justify-content: center;
  div {
    display: flex;
    font-size: small;
    margin-left: 10px;
  }
`;
