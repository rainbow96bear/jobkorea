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

  return (
    <>
      <HeaderBox>
        <div>
          <div
            onClick={() => {
              moveTo("");
            }}
          >
            JOBKOREA
          </div>
          <div>
            <div
              onClick={() => {
                moveTo("registAccount/company");
              }}
            >
              회원가입
            </div>
            <div>고객센터</div>
            <div>
              {companyUser == 0 ? (
                <div onClick={loginOnClick}>로그인</div>
              ) : (
                <div
                  onClick={async () => {
                    dispatch(action.logoutCompany());
                    // setLoginIsClick(false);
                    const data = await axios.post(
                      "http://localhost:8080/api/companyuser/logout",
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
            <div>
              <img src="/img/3bar.svg" onClick={dropdownOnClick} />
            </div>
            {menuList.map((item, index) => {
              return (
                <div
                  key={`item-${index}`}
                  onMouseEnter={() => {
                    setHeaderMenuIsOver(index);
                  }}
                  onMouseLeave={() => setHeaderMenuIsOver(-1)}
                  onClick={async () => {
                    if (item.data == "yes") {
                      const data = await axios.post(
                        "http://localhost:8080/api/recruit/isdata"
                      );
                      console.log(data.data.isdata);
                      if (data.data.isdata == "false") {
                        return alert(
                          "등록한 공고가 없습니다. 먼저 공고를 등록해주세요."
                        );
                      }
                    }

                    if (item.login == "yes" && !document.cookie) {
                      alert("로그인 해주세요");
                      moveTo("companymain");
                    } else if (item.routes)
                      moveTo(`companymain/${item.routes}`);
                    else moveTo("companymain");
                  }}
                >
                  {item.title}
                  <div
                    className={headerMenuIsOver == `${index}` ? "hover" : ""}
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
      {dropdownIsClick ? <DropdownContainer></DropdownContainer> : <></>}
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

  & > div:first-child > div:first-child {
    cursor: pointer;
  }

  & > div > div {
    display: flex;
    align-items: center;
  }

  & > div > div:first-child {
    font-size: 24px;
    font-weight: 700;
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
  border-bottom: 1px solid gray;
`;

export default HeaderComponent;
