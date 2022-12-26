import BeforeLogInContainer from "./BeforeLogIn/BeforeLogInContainer";
import AfterLogInContainer from "./AfterLogIn/AfterLogInContainer";
import BigCarouselContainer from "../main/BigCarousel/BigCarouselContainer";
import SmallCarouselContainer from "./SmallCarousel/SmallCarouselContainer";
// import MiniCarouselContainer from "./MiniCarousel/MiniCarouselContainer";
// import NoticeCarouselContainer from "./NoticeCarousel/NoticeCarouselContainer";
import OpenRecruitContainer from "./OpenRecruit/OpenRecruitContainer";
import RankingContainer from "./Ranking/RankingContainer";
import QuickMenuContainer from "./QuickMenu/QuickMenuContainer";
import FirstVVIPContainer from "./FirstVVIP/FirstVVIPContainer";
import VVIPContainer from "./VVIP/VVIPContainer";
import styled from "styled-components";
import { useState } from "react";

export default function MainComponent({
  smallScreen,
  midScreen,
  test,
  setTest,
  individualId,
  setIndividualId,
}) {
  const [individualPw, setIndividualPw] = useState("");

  return (
    <MainBox>
      <MainFirstItem>
        <div className="firstRow">
          <BigCarouselContainer></BigCarouselContainer>
          <SmallCarouselContainer></SmallCarouselContainer>
          {test ? (
            <AfterLogInContainer
              setTest={setTest}
              individualId={individualId}
              smallScreen={smallScreen}
            />
          ) : (
            <BeforeLogInContainer
              setTest={setTest}
              individualId={individualId}
              individualPw={individualPw}
              setIndividualId={setIndividualId}
              setIndividualPw={setIndividualPw}
              smallScreen={smallScreen}
            />
          )}
        </div>
        <div className="secondRow">
          <OpenRecruitContainer midScreen={midScreen}></OpenRecruitContainer>

          <RankingContainer></RankingContainer>
          <QuickMenuContainer></QuickMenuContainer>
        </div>
      </MainFirstItem>
      <MainSecondItem>
        <h3>First VVIP 채용관</h3>
        <div>
          <FirstVVIPContainer></FirstVVIPContainer>
        </div>
      </MainSecondItem>
      <MainThirdItem>
        <h3>VVIP 채용관</h3>
        <div>
          <VVIPContainer></VVIPContainer>
        </div>
      </MainThirdItem>
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
    margin: 10px 0 0 0;
  }
  & .secondRow {
    display: flex;
    justify-content: space-between;
    margin: 6px 0 0 0;
  }
`;

const MainFirstItem = styled.div`
  min-width: 360px;
  max-width: 1268px;
  width: 100%;
  height: 40%;
`;

const MainSecondItem = styled.div`
  background-color: white;
  max-width: 1268px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 50px;
  & > h3 {
    width: 60%;
  }
  > div {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
`;

const MainThirdItem = styled.div`
  background-color: white;
  max-width: 1268px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 50px;
  & > h3 {
    width: 60%;
  }
  > div {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
`;
