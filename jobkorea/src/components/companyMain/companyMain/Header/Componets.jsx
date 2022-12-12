import { useState } from "react";
import styled from "styled-components";
import VerticalMode from "./Carousel/Carousel";
import DropDown from "./Dropdown/Components";

const HeaderComponent = ({
  loginOnClick,
  dropdownOnClick,
  dropdownIsClick,
  menuList,
  moveTo,
}) => {
  const [headerMenuIsOver, setHeaderMenuIsOver] = useState(-1);

  return (
    <>
      <HeaderBox>
        <div>
          <div>JOBKOREA</div>
          <div>
            <div>회원가입</div>
            <div>고객센터</div>
            <div onClick={onClick}>로그인</div>
          </div>
          <div>
            <div
              onClick={() => {
                setIsDropdown(!isDropdown);
              }}
            >
              <img src="/img/3bar.svg" />
            </div>
            <div
              onMouseEnter={() => setIsOver(true)}
              onMouseLeave={() => setIsOver(false)}
            >
              홈
            </div>
            <div
              onMouseEnter={() => setIsOver(true)}
              onMouseLeave={() => setIsOver(false)}
            >
              공고등록
            </div>
            <div
              onMouseEnter={() => setIsOver(true)}
              onMouseLeave={() => setIsOver(false)}
            >
              공고지원자 관리
            </div>
            <div
              onMouseEnter={() => setIsOver(true)}
              onMouseLeave={() => setIsOver(false)}
            >
              인재검색
            </div>
            <div
              onMouseEnter={() => setIsOver(true)}
              onMouseLeave={() => setIsOver(false)}
            >
              헤드헌팅 의뢰
            </div>
            {menuList.map((item, index) => {
              return (
                <div
                  key={`item-${index}`}
                  onMouseEnter={() => {
                    setHeaderMenuIsOver(index);
                  }}
                  onMouseLeave={() => setHeaderMenuIsOver(-1)}
                  onClick={() => {
                    if (item.routes) moveTo(`companymain/${item.routes}`);
                    else moveTo(`companymain`);
                  }}
                >
                  {item.title}
                  <div
                    className={headerMenuIsOver == index ? "hover" : ""}
                  ></div>
                </div>
              );
            })}
          </div>
          <div>
            <div>기업라운지</div>
            <div>서비스안내</div>
          </div>
        </div>
      </HeaderBox>
      {dropdownIsClick ? <DropDown></DropDown> : <></>}
      <LowHeaderBox>
        <VerticalMode />
      </LowHeaderBox>
    </>
  );
};

const HeaderBox = styled.div`
  height: 136px;
  background-color: #323743;

  & > div {
    color: white;
    margin: auto;
    width: 64%;
    display: flex;
    justify-content: space-between;
    padding: 12px;
  }

  & > div > div {
    display: flex;
    align-items: center;
  }

  & > div > div:first-child {
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
  }

  & > div > div:nth-child(2) > div {
    margin: 0 10px;
    font-size: 13px;
    cursor: pointer;
  }

  & > div:nth-child(2) > div:nth-child(1) {
    font-size: 17px;
    font-weight: 600;
  }
  & > div:nth-child(2) > div:nth-child(1) > div {
    padding: 0 20px;
    margin-top: 20px;
    cursor: pointer;
  }

  & > div:nth-child(2) > div:nth-child(1) > div:first-child {
    padding: 0 20px 0 0;
    margin-bottom: 2px;
  }

  & > div:nth-child(2) > div:nth-child(1) > div:first-child > img {
    width: 18px;
    filter: invert(100%) sepia(3%) saturate(12%) hue-rotate(103deg)
      brightness(105%) contrast(105%);
    margin-top: 9px;
  }

  & > div:nth-child(2) > div:nth-child(2) {
    margin-top: 20px;
  }

  & > div:nth-child(2) > div:nth-child(2) > div {
    font-size: 15px;
  }

  .hover {
    background-color: #3399ff;
    height: 5px;
    position: relative;
    top: 16px;
  }

  img {
    cursor: pointer;
  }
`;

const LowHeaderBox = styled.div`
  height: 52px;
  overflow: hidden;
`;

export default HeaderComponent;
