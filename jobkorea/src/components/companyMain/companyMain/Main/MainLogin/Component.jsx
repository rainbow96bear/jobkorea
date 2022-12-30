import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { action } from "../../../../../modules/userInfo";
import axios from "axios";
import { useEffect, useState } from "react";

const MainLoginBoardComponent = ({
  loginOnClick,
  moveTo,
  setLoginIsClick,
  XLScreen,
  LScreen,
  MScreen,
}) => {
  const dispatch = useDispatch();

  const companyUser = useSelector((state) => state.companyUser.value);

  const [autoLogout, setAutologout] = useState("");

  useEffect(() => {
    if (companyUser != 0) {
      setTimeout(async () => {
        dispatch(action.logoutCompany());
        const data = await axios.post("/api/companyuser/logout", {});
      }, 18000000);
    }
  }, [companyUser]);

  const companyconfirm = async () => {
    const data = await axios.post("/api/companyuser/loginconfirm", {
      companyUser,
    });

    dispatch(action.loginConfirm({ confirmid: data.data }));

    setAutologout(data.data);
  };

  useEffect(() => {
    companyconfirm();
  }, []);

  return (
    <MainLoginBoardBox MScreen={"640px"}>
      <div className="temp"></div>
      <div className="MainBoard">
        <div>
          {LScreen ? (
            <div className="text-box">
              지금,
              <div>
                <span className="our">우리기업의 채용</span>을
              </div>
              시작해 보세요
            </div>
          ) : (
            <div></div>
          )}

          <div>
            {companyUser == 0 ? (
              <div className="flex button-box">
                <div onClick={loginOnClick}>로그인</div>
                <div
                  onClick={() => {
                    moveTo("registAccount/company");
                  }}
                >
                  회원가입
                </div>
              </div>
            ) : (
              <div className="flex button-box">
                <div
                  onClick={async () => {
                    dispatch(action.logoutCompany());
                    setLoginIsClick(false);
                    const data = await axios.post(
                      "/api/companyuser/logout",
                      {}
                    );
                    console.log(data);
                  }}
                >
                  로그아웃
                </div>
                <WelcomeBox>
                  <div>{companyUser} 님</div> 환영합니다
                </WelcomeBox>
              </div>
            )}
          </div>
        </div>

        {XLScreen ? (
          <ImgBox>
            <img src="/img/start.png" alt="" />
          </ImgBox>
        ) : (
          <div></div>
        )}
      </div>
      <div className="temp"></div>
      <div className="flex whiteline">
        <div className="whiteDiv"></div>
        <div className="companyLearn">
          <div>기업전용 필수 법정교육, 직무학습</div>
          <div>잡코리아 기업러닝 &gt;</div>
        </div>
      </div>
      <div className="temp"></div>
    </MainLoginBoardBox>
  );
};

const ImgBox = styled.div`
  width: 50%;

  img {
    width: 100%;
    height: 360px;
  }
`;

const MainLoginBoardBox = styled.div`
  width: 67%;
  margin: auto;

  .MainBoard {
    overflow: hidden;
    display: flex;
    justify-content: center;
    border-radius: 10px;
    background-color: #ffffff;
  }

  /* img {
    width: 100%;
    height: 100%;
  } */

  .text-box {
    font-size: 44px;
    padding: 50px;
  }

  .temp {
    height: 60px;
    background-color: #f2f4f7;
  }

  .our {
    font-weight: 600;
  }

  .flex {
    display: flex;
  }

  .button-box {
    font-size: 20px;
    font-weight: 700;
    padding: 30px 50px;
  }

  .whiteline {
    display: flex;
    justify-content: space-between;
  }
  .button-box > div:first-child {
    color: white;
    background-color: #3399ff;

    &:hover {
      background-color: #1e79d3;
    }
  }

  .button-box > div:last-child:hover {
    color: #3399ff;
    border: 1px solid #3399ff;
  }

  .button-box > div {
    border: 1px solid black;
    border-radius: 8px;
    width: 180px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    border: 0.7px solid #cccccc;
    cursor: pointer;
  }

  .whiteDiv {
    width: 75%;
    background-color: white;
    border-radius: 10px;
  }

  .companyLearn {
    width: 21%;
    background-image: url("/img/companyLearn.png");
    background-size: 100% 100%;
    color: white;
    padding: 10px 20px;
    white-space: nowrap;
  }

  .companyLearn div:first-child {
    font-size: 13px;
    margin-top: 15px;
  }

  .companyLearn div:last-child {
    font-size: 17px;
    margin-top: 5px;
  }

  @media (max-width: 1300px) {
    .companyLearn div:first-child {
      display: none;
    }

    .companyLearn div:last-child {
      font-size: 12px;
      margin-top: 5px;
      padding: 15px 0;
    }
  }

  @media (max-width: 720px) {
    .whiteDiv {
      display: none;
    }

    .companyLearn {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
    }

    .companyLearn div:first-child {
      display: block;
      margin: 0;
    }
  }

  @media (max-width: 640px) {
    .button-box {
      flex-direction: column;
      row-gap: 20px;
    }

    .companyLearn {
      padding: 30px;
      justify-content: center;
    }

    .companyLearn div:last-child {
      display: none;
    }
  }
`;

const WelcomeBox = styled.div`
  flex-direction: column;
`;

export default MainLoginBoardComponent;
