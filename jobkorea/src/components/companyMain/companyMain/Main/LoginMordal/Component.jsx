import styled from "styled-components";
import { useState } from "react";

const MordalComponent = ({ loginOnClick, moveTo, onClick }) => {
  const [idConfirm, setIdconfirm] = useState("");
  const [pwConfirm, setPwconfirm] = useState("");

  return (
    <MordalBox>
      <div>
        <div>기업 로그인이 필요한 서비스입니다.</div>
        <div onClick={loginOnClick}>
          <img src="/img/x-button.svg"></img>
        </div>
      </div>
      <div className="flex">
        <div>
          <div className="inputBox">
            <input
              onInput={(e) => {
                setIdconfirm(e.target.value);
              }}
              type={"text"}
              placeholder={"아이디"}
            />
          </div>
          <div className="inputBox">
            <input
              onInput={(e) => {
                setPwconfirm(e.target.value);
              }}
              type={"password"}
              placeholder={"비밀번호"}
            />
          </div>
        </div>
        <button
          onClick={() => {
            if ((idConfirm && pwConfirm) == "") {
              alert("아이디와 비밀번호를 입력해주세요");
            } else {
              onClick(idConfirm, pwConfirm);
            }
          }}
          className="login"
        >
          로그인
        </button>
      </div>
      <div
        className="regist"
        onClick={() => {
          moveTo("registAccount/company");
        }}
      >
        <div>회원가입</div>
        <div>신규가입 3종 쿠폰 제공!</div>
      </div>
    </MordalBox>
  );
};

export default MordalComponent;

const MordalBox = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 400px;
  width: 550px;
  border: 3px solid #565d79;
  background-color: white;

  @media (max-width: 650px) {
    width: 80%;
  }

  img {
    width: 20px;
    cursor: pointer;
  }

  .regist > div:first-child {
    margin-top: 6px;
    color: #3399ff;
    font-weight: 600;
  }
  .regist > div:last-child {
    color: #666666;
    font-size: 12px;
  }

  .regist {
    width: 400px;
    height: 60px;
    border: 1px solid #3399ff;
    margin-top: 30px;
    margin-left: 70px;
    text-align: center;
    cursor: pointer;

    @media (max-width: 650px) {
      width: 60%;
      margin: auto;
    }
  }

  .login {
    width: 100px;
    height: 100px;
    background-color: #3399ff;
    color: white;
    border: none;
  }
  input {
    width: 280px;
    height: 28px;
    border: solid 1px #e1e1e2;
    padding: 10px;

    @media (max-width: 650px) {
      width: 100%;
      margin: auto;
    }
  }

  & > div:first-child {
    height: 65px;
    border-bottom: 1px solid #e0e3ea;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    padding: 20px;
  }

  & > div:first-child > div:last-child {
    margin-bottom: 20px;
  }

  .flex {
    display: flex;
    justify-content: center;
    padding-top: 50px;

    @media (max-width: 650px) {
      width: 80%;
      padding: 0;
      margin: 40px auto;
    }
  }

  .inputBox {
    width: 100%;
  }
`;
