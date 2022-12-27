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
import { useMediaQuery } from "react-responsive";
import LoginMordalContainer from "./individualModal/Container";

export default function MainComponent({
  test,
  setTest,
  individualId,
  setIndividualId,
}) {
  const [individualPw, setIndividualPw] = useState("");
  const midScreen = useMediaQuery({ minWidth: 820 });
  const [isClick, setIsClick] = useState(false);

  // const smallScreen = useMediaQuery({ minWidth: 660 });

  return (
    <MainBox>
      {isClick ? (
        <LoginMordalContainer setIsClick={setIsClick}></LoginMordalContainer>
      ) : (
        <></>
      )}
      {/* 찾기 클릭 했냐 ? <찾기모달>:<></> */}
      <MainFirstItem>
        <div className={midScreen ? "firstRow" : "firstRowcol"}>
          <Box1>
            <BigCarouselContainer></BigCarouselContainer>
          </Box1>
          <Column>
            <Box2>
              <SmallCarouselContainer></SmallCarouselContainer>
            </Box2>
            <Box3>
              {test ? (
                <AfterLogInContainer
                  setTest={setTest}
                  individualId={individualId}
                />
              ) : (
                <BeforeLogInContainer
                  setTest={setTest}
                  individualId={individualId}
                  individualPw={individualPw}
                  setIndividualId={setIndividualId}
                  setIndividualPw={setIndividualPw}
                  setIsClick={setIsClick}
                />
              )}
            </Box3>
          </Column>
        </div>

        <div className={midScreen ? "firstRow" : "firstRowcol"}>
          <Box1>
            <OpenRecruitContainer></OpenRecruitContainer>
          </Box1>
          <Column>
            <Box2>
              <RankingContainer></RankingContainer>
            </Box2>
            <Box3>
              <QuickMenuContainer></QuickMenuContainer>
            </Box3>
          </Column>
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
  & .firstRowcol {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 10px 0 0 0;
  }
`;

const Box1 = styled.div`
  background-color: tomato;
  flex: 3;
  width: 60%;
`;

const Column = styled.div`
  display: flex;
  width: 40%;
`;

const Box2 = styled.div`
  background-color: pink;
  flex: 1;
  width: 20%;
`;

const Box3 = styled.div`
  background-color: skyblue;
  flex: 1;
  width: 20%;
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
    width: 100%;
  }
  > div {
    width: 100%;
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
    width: 100%;
  }
  > div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
`;
