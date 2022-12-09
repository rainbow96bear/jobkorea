import { useState } from "react";
import styled from "styled-components";

const BeforeLogInComponent = ({ logInClick }) => {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");

  return (
    <BeforeLogInBox>
      <div className="logInFrame">개인회원 로그인</div>
      <div className="logInDiv">
        <div className="logInInput">
          <input
            type="text"
            value={userId}
            onInput={(e) => {
              setUserId(e.target.value);
            }}
            className="logInID"
            placeholder="잡코리아ID"
          />
          <input
            type="password"
            value={userPw}
            onInput={(e) => {
              setUserPw(e.target.value);
            }}
            className="logInPW"
            placeholder="비밀번호"
          />
        </div>
        <button
          className="logInBtn"
          onClick={() => {
            logInClick(userId, userPw);
          }}
        >
          로그인
        </button>
      </div>
      <div className="beforLogInDiv">
        <div className="registBtn">회원가입</div>
        <div className="findInfoBtn">ID/PW 찾기</div>
      </div>
    </BeforeLogInBox>
  );
};

export default BeforeLogInComponent;

const BeforeLogInBox = styled.div`
  width: 14%;
  background-color: aliceblue;

  & .logInDiv {
    display: flex;
    justify-content: center;
    margin-top: 2%;
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
    background-color: skyblue;
    color: white;
    font-size: 1px;
    padding: 5px 16px;
  }
  & .beforLogInDiv {
    display: flex;
    justify-content: space-between;
  }
  & .registBtn {
    font-size: 12px;
    margin: 5px;
    color: gray;
  }
  & .findInfoBtn {
    font-size: 12px;
    margin: 5px;
    color: gray;
  }
`;
