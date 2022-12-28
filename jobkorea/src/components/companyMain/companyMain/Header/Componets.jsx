import { useState } from "react";
import styled from "styled-components";
import VerticalMode from "./Carousel/Carousel";
import DropDown from "./Dropdown/Components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { action } from "../../../../modules/userInfo";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DropdownContainer from "./Dropdown/Container";
import { useMediaQuery } from "react-responsive";

const HeaderComponent = ({
  loginOnClick,
  dropdownOnClick,
  dropdownIsClick,
  menuList,
  moveTo,
}) => {
  const [headerMenuIsOver, setHeaderMenuIsOver] = useState(-1);
  const dispatch = useDispatch();
  const companyUser = useSelector((state) => state.companyUser.value);
  const navigate = useNavigate();
  const midScreen = useMediaQuery({ minWidth: 1200 });
  const smallScreen = useMediaQuery({ minWidth: 900 });
  const miniScreen = useMediaQuery({ minWidth: 530 });

  return (
    <>
      <HeaderBox>
        <HeaderFrame>
          <div className={miniScreen ? "" : "titleColumn"}>
            <div
              onClick={() => {
                moveTo("");
              }}
              className="title"
            >
              JOBKOREA
            </div>

            <div className="topMenu">
              {companyUser === 0 ? (
                <div
                  onClick={() => {
                    moveTo("registAccount/company");
                  }}
                >
                  회원가입
                </div>
              ) : (
                <div
                  onClick={() => {
                    moveTo("companymain/mypage");
                  }}
                >
                  마이페이지
                </div>
              )}

              <div>고객센터</div>
              <div>
                {companyUser === 0 ? (
                  <div onClick={loginOnClick}>로그인</div>
                ) : (
                  <div
                    onClick={async () => {
                      dispatch(action.logoutCompany());
                      // setLoginIsClick(false);
                      const data = await axios.post(
                        "/api/companyuser/logout",
                        {}
                      );
                      console.log(data);
                      navigate("/companymain");
                    }}
                  >
                    로그아웃
                  </div>
                )}
              </div>
            </div>
          </div>
          <div>
            <div>
              {miniScreen && (
                <div>
                  <img src="/img/3bar.svg" onClick={dropdownOnClick} />
                </div>
              )}
              {(smallScreen ? menuList : menuList.slice(0, 3)).map(
                (item, index) => {
                  return (
                    <div
                      key={`item-${index}`}
                      onMouseEnter={() => {
                        setHeaderMenuIsOver(index);
                      }}
                      onMouseLeave={() => setHeaderMenuIsOver(-1)}
                      onClick={async () => {
                        if (item.data === "yes") {
                          const data = await axios.post("/api/recruit/isdata");
                          console.log(data.data.isdata);
                          if (data.data.isdata === "false") {
                            return alert(
                              "등록한 공고가 없습니다. 먼저 공고를 등록해주세요."
                            );
                          }
                        }

                        if (item.login === "yes" && !document.cookie) {
                          alert("로그인 해주세요");
                          moveTo("companymain");
                        } else if (item.routes)
                          moveTo(`companymain/${item.routes}`);
                        else moveTo("companymain");
                      }}
                      className={miniScreen ? "" : "smallerFont"}
                    >
                      {item.title}
                      <div
                        className={
                          headerMenuIsOver === `${index}` ? "hover" : ""
                        }
                      ></div>
                    </div>
                  );
                }
              )}
            </div>
            {midScreen && (
              <div>
                <div>기업라운지</div>
                <div>서비스안내</div>
              </div>
            )}
          </div>
        </HeaderFrame>
      </HeaderBox>
      {dropdownIsClick ? <DropdownContainer></DropdownContainer> : <></>}
      <LowHeaderBox>
        <VerticalMode />
      </LowHeaderBox>
    </>
  );
};
const HeaderBox = styled.div`
  width: 100%;
  height: 25%;
  background-color: #323743;
  display: flex;
  justify-content: center;
`;
const HeaderFrame = styled.div`
  width: 100%;
  max-width: 1240px;
  & > div {
    color: white;
    margin: auto;
    width: 100% - 12px;
    display: flex;
    justify-content: space-between;
    padding: 12px;
  }

  & > div:first-child > div:first-child {
    cursor: pointer;
  }

  & > div > div {
    display: flex;
    align-items: center;
  }

  & .title {
    font-size: 24px;
    font-weight: 700;
  }

  /* & > div > div:first-child {
    font-size: 24px;
    font-weight: 700;
  } */

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
    padding: 0 10px;
    margin-top: 20px;
    cursor: pointer;
  }

  & > div:nth-child(2) > div:nth-child(1) > div:first-child {
    padding: 0 10px 0 0;
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

  & .smallerFont {
    font-size: smaller;
  }

  & .smallerLogo {
    font-size: smaller;
  }

  & .titleColumn {
    display: flex;
    flex-direction: column;
  }
`;

const LowHeaderBox = styled.div`
  width: 100%;
  height: 52px;
  overflow: hidden;
  border-bottom: 1px solid gray;
`;

export default HeaderComponent;
