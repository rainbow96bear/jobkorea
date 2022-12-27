import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function FooterComponent({ screen875, screen730, screen400 }) {
  const navigate = useNavigate();
  const goError = () => {
    navigate("/errorpage");
  };

  return (
    <FooterBox>
      <FooterFrame>
        <FirstLine className={screen730 ? "" : "screen730"}>
          <div className="left">
            <span className="rightPadding" onClick={goError}>
              공지사항
            </span>
            <div onClick={goError}>[이벤트]12월 전체 회원 이벤트</div>
          </div>

          <div className="right">
            <div onClick={goError}> 잡코리아 TV</div>
            <div onClick={goError}>전문채용관</div>
            <div onClick={goError}>슈퍼기업관</div>
            {screen400 && (
              <>
                <div onClick={goError}>헤드헌팅 의뢰</div>
                <div onClick={goError}>기업러닝</div>
              </>
            )}
            <div onClick={goError}>더보기</div>
          </div>
        </FirstLine>

        <SecondLine className={screen875 ? "" : "screen875"}>
          <div onClick={goError}>회사소개</div>
          {screen730 && (
            <>
              <div onClick={goError}>운영사이트</div>
              <div onClick={goError}>이용약관</div>
              <span onClick={goError}>개인정보처리방침</span>
            </>
          )}
          <div onClick={goError}>Open API</div>
          <div onClick={goError}>광고문의</div>
          <div onClick={goError}>제휴문의</div>
          <div onClick={goError}>고객센터</div>
        </SecondLine>
        <ThirdLine>
          <div onClick={goError}>
            고객센터 : 1588-19350 (평일 09:00 ~ 19:00 토요일 09:00 ~ 15:00)
          </div>
          <div onClick={goError}>FAX : 02-565-9351</div>
          {screen875 && (
            <>
              <div onClick={goError}>Email : helpdesk@jobkorea.co.kr</div>
              <div onClick={goError}>톡톡상담</div>
            </>
          )}
        </ThirdLine>
        <ForthLine>
          <div>
            <span>JOBKOREA</span>
            <div>LLC. All rightreserved.</div>
          </div>
        </ForthLine>
      </FooterFrame>
    </FooterBox>
  );
}

const FooterBox = styled.div`
  width: 100%;
  border-top: solid 1px lightgray;
  display: flex;
  justify-content: center;
  padding: 30px 0;
`;
const FooterFrame = styled.div`
  min-width: 330px;
  width: 100%;
  max-width: 938px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  span {
    font-weight: 900;
  }
  & .screen875 {
    font-size: 12px;
  }
  & .screen730 {
    flex-direction: column;
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
    flex: 1;
  }
  & .smallLeft {
    display: flex;
  }
  & .right {
    display: flex;
    flex: 1;
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
  font-size: small;
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
