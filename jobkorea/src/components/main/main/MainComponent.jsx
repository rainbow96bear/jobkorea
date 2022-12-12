import BeforeLogInContainer from "./BeforeLogIn/BeforeLogInContainer";
import AfterLogInContainer from "./AfterLogIn/AfterLogInContainer";
import BigCarouselContainer from "../main/BigCarousel/BigCarouselContainer";
import SmallCarouselContainer from "./SmallCarousel/SmallCarouselContainer";
import MiniCarouselContainer from "./MiniCarousel/MiniCarouselContainer";
import NoticeCarouselContainer from "./NoticeCarousel/NoticeCarouselContainer";
import OpenRecruitContainer from "./OpenRecruit/OpenRecruitContainer";
import RankingContainer from "./Ranking/RankingContainer";
import QuickMenuContainer from "./QuickMenu/QuickMenuContainer";
import styled from "styled-components";

export default function MainComponent() {
  return (
    <MainBox>
      <div>
        <div className="firstRow">
          <BigCarouselContainer></BigCarouselContainer>
          <SmallCarouselContainer></SmallCarouselContainer>
          <BeforeLogInContainer></BeforeLogInContainer>
        </div>
        <div className="secondRow">
          <div className="secondRowCol1">
            <OpenRecruitContainer></OpenRecruitContainer>
          </div>
          <div className="secondRowCol2">
            <RankingContainer></RankingContainer>
          </div>
          <div className="secondRowCol3">
            <QuickMenuContainer></QuickMenuContainer>
            <NoticeCarouselContainer></NoticeCarouselContainer>
            <MiniCarouselContainer></MiniCarouselContainer>
          </div>
        </div>
        <hr />
        <hr />
        <hr />
        <h3>First VVIP 채용관</h3>
        <hr />
        <h3>채용 로고 컴포넌트 4x4</h3>
        <hr />
        <h3>VVIP 채용관</h3>
        <hr />
        <h3>채용 로고 컴포넌트 4x4</h3>
        <AfterLogInContainer></AfterLogInContainer>
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
    margin: 0 10% 0 16%;
  }
  & .secondRowCol2 {
    display: flex;
    flex-direction: column;
    background-color: #e8ecef;
    margin: 0 0% 0 2%;
  }
  & .secondRowCol3 {
    display: flex;
    flex-direction: column;
    background-color: #e8ecef;
    margin: 0 0% 0 2%;
  }
`;
