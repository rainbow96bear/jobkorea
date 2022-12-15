import BeforeLogInContainer from "./BeforeLogIn/BeforeLogInContainer";
import AfterLogInContainer from "./AfterLogIn/AfterLogInContainer";
import BigCarouselContainer from "../main/BigCarousel/BigCarouselContainer";
import SmallCarouselContainer from "./SmallCarousel/SmallCarouselContainer";
import MiniCarouselContainer from "./MiniCarousel/MiniCarouselContainer";
import NoticeCarouselContainer from "./NoticeCarousel/NoticeCarouselContainer";
import OpenRecruitContainer from "./OpenRecruit/OpenRecruitContainer";
import RankingContainer from "./Ranking/RankingContainer";
import QuickMenuContainer from "./QuickMenu/QuickMenuContainer";
import FirstVVIPContainer from "./FirstVVIP/FirstVVIPContainer";
import styled from "styled-components";
import { useState } from "react";

export default function MainComponent() {
  const [individualId, setIndividualId] = useState("");
  const [individualPw, setIndividualPw] = useState("");
  const [individualName, setIndividualName] = useState("");

  const [test, setTest] = useState(false);
  return (
    <MainBox>
      <MainFirstItem>
        <div className="firstRow">
          <BigCarouselContainer></BigCarouselContainer>
          <SmallCarouselContainer></SmallCarouselContainer>
          {test ? (
            <AfterLogInContainer
              setTest={setTest}
              individualName={individualName}
              individualId={individualId}
              individualPw={individualPw}
              setIndividualName={setIndividualName}
              setIndividualId={setIndividualId}
              setIndividualPw={setIndividualPw}
            />
          ) : (
            <BeforeLogInContainer
              setTest={setTest}
              individualName={individualName}
              individualId={individualId}
              individualPw={individualPw}
              setIndividualName={setIndividualName}
              setIndividualId={setIndividualId}
              setIndividualPw={setIndividualPw}
            />
          )}
          {/* <BeforeLogInContainer></BeforeLogInContainer> */}
          {/* <AfterLogInContainer></AfterLogInContainer> */}
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
      </MainFirstItem>
      <MainSecondItem>
        <div>
          <h3>First VVIP 채용관</h3>
          <FirstVVIPContainer></FirstVVIPContainer>
        </div>
      </MainSecondItem>
    </MainBox>
  );
}

const MainBox = styled.div`
  background-color: #e8ecef;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & .firstRow {
    display: flex;
    justify-content: center;
    margin: 8px 0 0 0;
  }
  & .secondRow {
    display: flex;
    flex-direction: row;
    margin: 8px 0 0 0;
  }
  & .secondRowCol1 {
    display: flex;
    flex-direction: column;
    width: 64%;
  }
  & .secondRowCol2 {
    display: flex;
    flex-direction: column;
    width: 21.45%;
    margin-left: 8px;
  }
  & .secondRowCol3 {
    display: flex;
    flex-direction: column;
    width: 18.55%;
    margin-left: 8px;
  }
`;

const MainFirstItem = styled.div`
  width: 60%;
`;

const MainSecondItem = styled.div`
  background-color: white;
  width: 100%;
  display: flex;
  justify-content: center;
  div {
    width: 60%;
  }
`;
