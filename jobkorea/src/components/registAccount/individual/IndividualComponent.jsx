import styled from "styled-components";
// import { FaStarOfLife } from "react-icons/fa";
import { useState } from "react";
import jobKoreaTitle from "../individual/images/title1.png";

const COLOR = "#3399ff";

const IndividualComponent = ({ registClick }) => {
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userTel, setUserTel] = useState("");
  const [userInfoValid, setUserInfoValid] = useState([]);
  const handlieClickRadio = (e) => {
    console.log(e.target.value);
    setUserInfoValid(e.target.value);
  };

  return (
    <IndividualRegistBox>
      <div>
        <img src={jobKoreaTitle} alt="" />
      </div>
      <div className="whoRegist">
        <div className="memberRegist">개인회원</div>
        <div className="companyRegist">기업회원</div>
      </div>
      <div className="memberRegistdiv1">
        <div className="registMessage">
          회원가입하고 다양한 혜택을 누리세요!
          {/* <div className="noticeMessage">
            <FaStarOfLife />
            필수 입력 정보입니다.
          </div> */}
        </div>
      </div>
      <input
        type="text"
        className="input"
        value={userName}
        placeholder="이름(실명)"
        onInput={(e) => {
          setUserName(e.target.value);
        }}
      />
      <input
        type="text"
        className="input"
        value={userId}
        placeholder="아이디"
        onInput={(e) => {
          setUserId(e.target.value);
        }}
      />
      <input
        type="password"
        className="input"
        value={userPw}
        placeholder="비밀번호(8자 이상의 영문, 숫자, 특수기호)"
        onInput={(e) => {
          setUserPw(e.target.value);
        }}
      />
      <input
        type="email"
        className="input"
        value={userEmail}
        placeholder="이메일"
        onInput={(e) => {
          setUserEmail(e.target.value);
        }}
      />
      <input
        type="tel"
        className="input"
        value={userTel}
        placeholder="휴대폰번호"
        onInput={(e) => {
          setUserTel(e.target.value);
        }}
      />
      <div className="radio">
        개인정보 유효기간 선택
        {/* <FaStarOfLife /> */}
        <input
          type="radio"
          name="infoValid"
          value="1year"
          onchange={handlieClickRadio}
        />
        1년
        <input
          type="radio"
          name="infoValid"
          value="3years"
          onchange={handlieClickRadio}
        />
        3년
        <input
          type="radio"
          name="infoValid"
          value="withdraw"
          onchange={handlieClickRadio}
        />
        회원탈퇴시
      </div>
      <button
        className="memberRegistBtn"
        onClick={() => {
          registClick(
            userName,
            userId,
            userPw,
            userEmail,
            userTel,
            userInfoValid
          );
        }}
      >
        가입하기
      </button>
    </IndividualRegistBox>
  );
};

export default IndividualComponent;

const IndividualRegistBox = styled.div`
  width: 33%;
  height: 100%;
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5% auto 0;
  & .whoRegist {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 10%;
    background-color: white;
    color: ${COLOR};
    font-size: 25px;
    font-weight: 700;
  }
  & .memberRegistDiv1 {
    display: flex;
    width: 100%;
  }
  & .registMessage {
    font-size: 1.1em;
    display: flex;
    text-align: center;
    width: 100%;
    margin: 5%;
  }
  & .memberRegist {
    display: flex;
    justify-content: center;
    width: 70%;
    height: 10%;
    background-color: ${COLOR};
    color: white;
    font-size: 25px;
    font-weight: 700;
    padding: 2%;
    border-bottom: 1px solid ${COLOR};
  }
  & .companyRegist {
    display: flex;
    justify-content: center;
    width: 30%;
    height: 10%;
    background-color: white;
    color: ${COLOR};
    font-size: 25px;
    font-weight: 700;
    padding: 2%;
    border-bottom: 1px solid ${COLOR};
  }
  & .memberRegistBtn {
    border: none;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 10%;
    background-color: ${COLOR};
    color: white;
    font-size: 25px;
    font-weight: 700;
    padding: 2%;
  }
  & .input {
    padding: 3%;
    margin: 5px;
    width: 70%;
    border: 1px solid #dadada;
  }
  & .radio {
    margin: 5%;
  }
`;
