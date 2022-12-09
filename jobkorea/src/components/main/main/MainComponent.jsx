import BeforeLogInContainer from "./BeforeLogIn/BeforeLogInContainer";
// import AfterLogInContainer from "./AfterLogIn/AfterLogInContainer";
import BigCarouselContainer from "../main/BigCarousel/BigCarouselContainer";
import SmallCarouselContainer from "./SmallCarousel/SmallCarouselContainer";
import MiniCarouselContainer from "./MiniCarousel/MiniCarouselContainer";
import NoticeCarouselContainer from "./NoticeCarousel/NoticeCarouselContainer";
import styled from "styled-components";

export default function MainComponent() {
  return (
    <MainBox>
      <div>
        <h1>헤더</h1>
        <hr />
        <hr />
        <div className="firstRow">
          <BigCarouselContainer></BigCarouselContainer>
          <SmallCarouselContainer></SmallCarouselContainer>
          <BeforeLogInContainer></BeforeLogInContainer>
          {/* <AfterLogInContainer></AfterLogInContainer> */}{" "}
        </div>
        <div className="secondRow">
          <div className="secondRowCol1">
            <h3>공채 속보 신입/경력/</h3>
            <h3>신입 경력 컴포넌트</h3>
          </div>
          <div className="secondRowCol2">
            <h3>채용 TOP 100 순위</h3>
          </div>
          <div className="secondRowCol3">
            <h4>
              1000대 기업 | 공채 달력 | TOP100 <br />
              인턴채용 | 합격자소서 | 취업후기
              <br />
              합격스펙 | 직무인터뷰 | 채용설명회
            </h4>

            <NoticeCarouselContainer></NoticeCarouselContainer>
            <MiniCarouselContainer></MiniCarouselContainer>
          </div>
        </div>
        <hr />
        <hr />
        <hr />
        <h1>First VVIP 채용관</h1>
        <hr />
        <h1>채용 로고 컴포넌트 4x4</h1>
        <hr />
        <h1>VVIP 채용관</h1>
        <hr />
        <h1>채용 로고 컴포넌트 4x4</h1>
        <hr />
        <hr />
        <h1>푸터</h1>
      </div>
    </MainBox>
  );
}

const MainBox = styled.div`
  * {
    padding: 0;
  }

  & .firstRow {
    display: flex;
    justify-content: center;
    background-color: #e8ecef;
  }
  & .secondRow {
    display: flex;
    flex-direction: row;
    background-color: #e8ecef;
  }
  & .secondRowCol1 {
    display: flex;
    flex-direction: column;
    background-color: #e8ecef;
    margin: 0 10% 0 30%;
  }
  & .secondRowCol2 {
    display: flex;
    flex-direction: column;
    background-color: #e8ecef;
    margin: 0 6% 0 5.5%;
  }
  & .secondRowCol3 {
    display: flex;
    flex-direction: column;
    background-color: #e8ecef;
    margin: 0 2% 0 2%;
  }
`;
