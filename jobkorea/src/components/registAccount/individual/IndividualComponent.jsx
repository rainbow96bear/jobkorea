import styled from "styled-components";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import jobKoreaTitle from "../individual/images/title1.png";

const COLOR = "#3399ff";

const IndividualComponent = ({ registClick }) => {
  const [individualName, setIndividualName] = useState("");
  const [individualId, setIndividualId] = useState("");
  const [individualPw, setIndividualPw] = useState("");
  const [individualEmail, setIndividualEmail] = useState("");
  const [individualTel, setIndividualTel] = useState("");
  const [individualInfoValid, setIndividualInfoValid] = useState([]);
  const navigate = useNavigate();
  const handlieClickRadio1 = (e) => {
    console.log(e.target.value);
    setIndividualInfoValid(e.target.value);
  };
  const handlieClickRadio2 = (e) => {
    console.log(e.target.value);
    setIndividualInfoValid(e.target.value);
  };
  const handlieClickRadio3 = (e) => {
    console.log(e.target.value);
    setIndividualInfoValid(e.target.value);
  };

  return (
    <IndividualRegistBox>
      <div>
        <img src={jobKoreaTitle} alt="" />
      </div>
      <div className="whoRegist">
        <div className="memberRegist">개인회원</div>
        <div
          className="companyRegist"
          onClick={() => {
            navigate("/registAccount/company");
          }}
        >
          기업회원
        </div>
      </div>
      <div className="memberRegistdiv1">
        <div className="registMessage">
          회원가입하고 다양한 혜택을 누리세요!
        </div>
      </div>
      <input
        type="text"
        className="input"
        value={individualName}
        placeholder="이름(실명) *"
        onInput={(e) => {
          setIndividualName(e.target.value);
        }}
      />
      <input
        type="text"
        className="input"
        value={individualId}
        placeholder="아이디 *"
        onInput={(e) => {
          setIndividualId(e.target.value);
        }}
      />
      <input
        type="password"
        className="input"
        value={individualPw}
        placeholder="비밀번호(8자 이상의 16자리 이하의 영문, 숫자, 특수기호) *"
        onInput={(e) => {
          setIndividualPw(e.target.value);
        }}
      />
      <input
        type="email"
        className="input"
        value={individualEmail}
        placeholder="이메일 *"
        onInput={(e) => {
          setIndividualEmail(e.target.value);
        }}
      />
      <input
        type="tel"
        className="input"
        value={individualTel}
        placeholder="휴대폰번호 *"
        onInput={(e) => {
          setIndividualTel(e.target.value);
        }}
      />
      <div className="radio">
        개인정보 유효기간 선택 *
        <input
          type="radio"
          name="infoValid"
          value="1year"
          onchange={handlieClickRadio1}
        />
        1년
        <input
          type="radio"
          name="infoValid"
          value="3years"
          onchange={handlieClickRadio2}
        />
        3년
        <input
          type="radio"
          name="infoValid"
          value="withdraw"
          onchange={handlieClickRadio3}
          checked="checked"
        />
        회원탈퇴시
      </div>
      <button
        className="memberRegistBtn"
        onClick={() => {
          const nameRegExp = /^[가-힣|a-z|A-Z]/;
          const idRegExp = /^[a-zA-Z0-9]{6,13}$/;
          const pwRegExp =
            /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,17}$/;
          const emailRegExp =
            /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
          const telRegExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
          // const infoValidRegExp =
          const name = nameRegExp.test(individualName);
          const id = idRegExp.test(individualId);
          const pw = pwRegExp.test(individualPw);
          const email = emailRegExp.test(individualEmail);
          const tel = telRegExp.test(individualTel);
          // const infoValid = infoValidRegExp.test(individualInfoValid);
          if (name && id && pw && email && tel) {
            registClick(
              individualName,
              individualId,
              individualPw,
              individualEmail,
              individualTel,
              individualInfoValid
            );
            alert("회원가원을 축하합니다~");
            navigate("/");
          } else if (!name) {
            alert("이름을 한글 또는 영문으로 입력하세요.");
          } else if (!id) {
            alert(
              "아이디를 6자리 이상 ~ 12자리 미만의 영문, 숫자만 입력하세요."
            );
          } else if (!pw) {
            alert(
              "비밀번호를 8자리 이상 ~ 16자리 이하의 영문 대/소문자, 숫자, 특수기호(!@#$%^*+=-)만 입력하세요."
            );
          } else if (!email) {
            alert("알맞은 이메일 형식을 입력하세요.");
          } else if (!tel) {
            alert("휴대폰번호를 숫자와 하이픈을 이용하여 입력하세요.");
          }
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
    cursor: pointer;
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
