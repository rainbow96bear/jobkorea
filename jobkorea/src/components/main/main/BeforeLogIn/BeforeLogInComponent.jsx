import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
// import { useCookies } from "react-cookie";

const BeforeLogInComponent = ({
  logInClick,
  individualId,
  individualPw,
  setIndividualId,
  setIndividualPw,
  midScreen,
}) => {
  // const [individualId, setIndividualId] = useState("");
  // const [individualPw, setIndividualPw] = useState("");

  // const [cookies, setCookie] = useCookies(["jobkorea_cookie"]);
  const screen1110 = useMediaQuery({ minWidth: 1110 });
  const idRef = useRef();
  const pwRef = useRef();
  const navigate = useNavigate();
  const goToRegist = () => {
    navigate("/registAccount/individual");
  };
  const goError = () => {
    navigate("/errorpage");
  };

  return (
    <BeforeLogInBox>
      <div className="logInFrame">개인회원 로그인</div>
      <div className="beforLogInDiv">
        <div className="registBtn" onClick={goToRegist}>
          회원가입
        </div>
        <div className="findInfoBtn" onClick={goError}>
          ID/PW 찾기
        </div>
      </div>
      <div
        className={
          screen1110 ? "logInDiv" : midScreen ? "logInDivCol" : "logInDiv"
        }>
        <div className="logInInput">
          <input
            type="text"
            value={individualId}
            ref={idRef}
            onInput={(e) => {
              setIndividualId(e.target.value);
            }}
            className="logInID"
            placeholder="잡코리아ID"
          />
          <input
            type="password"
            value={individualPw}
            ref={pwRef}
            onInput={(e) => {
              setIndividualPw(e.target.value);
            }}
            className="logInPW"
            placeholder="비밀번호"
          />
        </div>
        <button
          className="logInBtn"
          onClick={() => {
            logInClick(individualId, individualPw);
            // setCookie("jobkorea_cookie", "jobcoding");
          }}>
          로그인
        </button>
      </div>
    </BeforeLogInBox>
  );
};

export default BeforeLogInComponent;

const BeforeLogInBox = styled.div`
  width: 100%;
  height: 95%;
  background-color: white;
  text-align: center;
  border: 1px solid #dadada;

  & .logInDiv {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  & .logInDivCol {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
  }
  & .logInInput {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  & .logInID {
    padding: 7px;
    border: 1px solid #dadada;
    font-size: 12px;
  }
  & .logInID::placeholder {
    font-size: 5px;
    color: gray;
  }
  & .logInPW {
    padding: 7px;
    border: 1px solid #dadada;
    font-size: 12px;
  }
  & .logInPW::placeholder {
    font-size: 5px;
    color: gray;
  }
  & .logInBtn {
    border: none;
    background-color: #3399ff;
    color: white;
    font-size: 1px;
    padding: 5px 16px;
    cursor: pointer;
  }
  & .beforLogInDiv {
    display: flex;
    justify-content: space-around;
  }
  & .registBtn {
    font-size: 11px;
    font-weight: 700;
    color: #494949;
    cursor: pointer;
  }
  & .findInfoBtn {
    font-size: 11px;
    color: #494949;
    cursor: pointer;
  }
`;
