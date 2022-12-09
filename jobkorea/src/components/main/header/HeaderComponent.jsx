import styled from "styled-components";
import { VscMenu, VscBell, VscChromeClose } from "react-icons/vsc";

import searchImg from "./imgfold/searchImg.svg";

const COLOR = "#3399ff";
export default function HeaderComponent({ moveTo, dropDown, setDropDown }) {
  return (
    <HeaderBox>
      <SearchFrame>
        <SearchBox>
          <HomeBtn
            onClick={() => {
              moveTo("");
            }}>
            JOBKOREA
          </HomeBtn>
          <InputBox>
            <input></input>
            <div>
              <img src={searchImg}></img>
            </div>
          </InputBox>
          <FuncBtn>직무•지역 찾기</FuncBtn>
          <DetailSearchBtn
            onClick={() => {
              moveTo("search");
            }}>
            상세검색
          </DetailSearchBtn>
        </SearchBox>
      </SearchFrame>
      <FuncFrame>
        <FuncBar>
          <LeftFunc>
            <MenuBtn>
              {dropDown ? (
                <VscMenu
                  size="30"
                  color={COLOR}
                  onClick={() => {
                    setDropDown(false);
                  }}
                />
              ) : (
                <VscChromeClose
                  size="30"
                  color={COLOR}
                  onClick={() => {
                    setDropDown(true);
                  }}
                />
              )}
            </MenuBtn>
            <HoverBox>
              <div
                className="colorText"
                onClick={() => {
                  moveTo("search");
                }}>
                채용정보
              </div>
              <div className="colorText">공채</div>
              <div className="colorText">헤드헌팅</div>
              <div className="colorText">인재정보</div>
              <div>퓨처랩</div>
              <div>취업톡톡</div>
              <div>연봉</div>
              <div>공기업 모의고사</div>
              <div>역량테스트</div>
            </HoverBox>
          </LeftFunc>
          <RightFunc>
            <VscBell className="border" />
            <div
              className="border borderRight"
              onClick={() => {
                moveTo("companymain");
              }}>
              기업 회원 홈
            </div>
          </RightFunc>
        </FuncBar>
      </FuncFrame>
    </HeaderBox>
  );
}

const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-width: 1697px;
  border-bottom: solid 2px ${COLOR};
`;

const SearchFrame = styled.div`
  min-width: fit-content;
  width: 60%;
  padding: 35px 0;
`;

const SearchBox = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  color: ${COLOR};
  font-weight: 800;
  font-size: 26px;
`;
const HomeBtn = styled.div`
  cursor: pointer;
`;
const InputBox = styled.div`
  display: flex;
  input {
    margin-left: 15px;
    padding: 10px;
    outline: none;
    border: solid 2px ${COLOR};
  }
  div {
    background-color: ${COLOR};
    display: flex;
    align-items: center;
    padding: 10px;
  }
  img {
    width: 20px;
    filter: invert(100%) sepia(0%) saturate(7483%) hue-rotate(197deg)
      brightness(104%) contrast(105%);
    cursor: pointer;
  }
`;

const FuncBtn = styled.div`
  min-width: 94px;
  display: flex;
  align-items: center;
  font-weight: none;
  font-size: 14px;
  padding: 0 15px;
  border: solid 1px ${COLOR};
  height: 38px;
  margin-left: 5px;
  & .detailSearch {
    color: black;
    border: solid 1px lightgray;
  }
`;
const DetailSearchBtn = styled.div`
  min-width: 56px;
  display: flex;
  align-items: center;
  font-weight: none;
  font-size: 14px;
  padding: 0 15px;
  color: black;
  border: solid 1px lightgray;
  height: 38px;
  margin-left: 5px;
  cursor: pointer;
`;
const FuncFrame = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  border-top: solid 1px lightgray;
`;

const FuncBar = styled.div`
  display: flex;
  width: 60%;
  min-width: 1050px;
  justify-content: space-between;
`;

const MenuBtn = styled.div`
  display: flex;
  align-items: center;
  border-left: solid 1px lightgray;
  border-right: solid 1px lightgray;
  padding: 0 10px;
  cursor: pointer;
`;

const HoverBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  div {
    width: fit-content;
    font-weight: 900;
    padding: 15px;
  }
  div:hover {
    color: white;
    background-color: ${COLOR};
  }
  & .colorText {
    color: ${COLOR};
  }
`;

const LeftFunc = styled.div`
  display: flex;
`;
const RightFunc = styled.div`
  display: flex;
  & .border {
    padding: 0 10px;
    display: flex;
    align-items: center;
    border-left: solid 1px lightgray;
    height: 100%;
    cursor: pointer;
  }
  & .borderRight {
    border-right: solid 1px lightgray;
  }
`;
