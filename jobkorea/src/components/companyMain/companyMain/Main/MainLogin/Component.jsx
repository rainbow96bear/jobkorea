import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { action } from "../../../../../modules/userInfo";
import axios from "axios";
import { useEffect } from "react";

const MainLoginBoardComponent = ({ loginOnClick, moveTo, setLoginIsClick }) => {
  const dispatch = useDispatch();

  const companyUser = useSelector((state) => state.companyUser.value);

  const companyconfirm = async () => {
    const data = await axios.post(
      "http://localhost:8080/api/companyuser/loginconfirm",
      { companyUser }
    );
    dispatch(action.loginConfirm({ confirmid: data.data }));
  };

  useEffect(() => {
    companyconfirm();
  }, [companyUser]);

  return (
    <MainLoginBoardBox>
      <div className="temp"></div>
      <div className="MainBoard">
        <div>
          <div className="text-box">
            지금,
            <div>
              <span className="our">우리기업의 채용</span>을
            </div>
            시작해 보세요
          </div>
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
                      "http://localhost:8080/api/companyuser/logout",
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
        <div>
          <img src="/img/start.png" alt="" />
        </div>
      </div>
      <div className="temp"></div>
      <div className="flex">
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

const MainLoginBoardBox = styled.div`
  width: 1260px;
  margin: auto;

  .MainBoard {
    overflow: hidden;
    display: flex;
    border-radius: 10px;
    background-color: #ffffff;
  }

  .MainBoard img {
    width: 100%;
    height: 100%;
  }

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
    padding: 0 50px 40px 50px;
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
    width: 940px;
    height: 80px;
    background-color: white;
    border-radius: 10px;
  }

  .companyLearn {
    margin-left: 20px;
    width: 300px;
    height: 80px;
    background-image: url("/img/companyLearn.png");
    color: white;
    cursor: pointer;
  }

  .companyLearn div {
    margin-left: 30px;
  }

  .companyLearn div:first-child {
    font-size: 14px;
    margin-top: 15px;
  }

  .companyLearn div:last-child {
    font-size: 18px;
    margin-top: 5px;
  }
`;

const WelcomeBox = styled.div`
  flex-direction: column;
`;

export default MainLoginBoardComponent;
