import styled from "styled-components";
import { useState } from "react";

const MordalComponent = ({
  loginOnClick,
  moveTo,
  onClick,
  setIsClick,
  idConfirmClick,
  pwConfirmClick,
}) => {
  const [idConfirm, setIdconfirm] = useState("");
  const [pwConfirm, setPwconfirm] = useState("");
  const [nameConirm, setNameConfirm] = useState("");
  const [phoneComfirm, setPhoneConfirm] = useState("");
  const [confirm, setConfirm] = useState(true);

  return (
    <MordalBox>
      <div>
        <div>ID/PW 찾기</div>
        <Idsearch
          onClick={() => {
            setConfirm(true);
          }}
        >
          ID찾기
        </Idsearch>
        <Pwsearch
          onClick={() => {
            setConfirm(false);
          }}
        >
          비밀번호 찾기
        </Pwsearch>
        <div
          onClick={() => {
            setIsClick(false);
          }}
        >
          <img src="/img/x-button.svg"></img>
        </div>
      </div>
      {confirm ? (
        <div className="flex">
          <div>
            <div>
              <input
                onInput={(e) => {
                  setNameConfirm(e.target.value);
                }}
                type={"text"}
                placeholder={"이름"}
              />
            </div>
            <div>
              <input
                onInput={(e) => {
                  setPhoneConfirm(e.target.value);
                }}
                type={"text"}
                placeholder={"핸드폰번호"}
              />
            </div>
          </div>
          <button
            onClick={() => {
              if ((nameConirm && phoneComfirm) == "") {
                alert("이름과 핸드폰번호를 입력해주세요");
              } else {
                idConfirmClick(nameConirm, phoneComfirm);
              }
            }}
            className="login"
          >
            ID찾기
          </button>
        </div>
      ) : (
        <div className="flex">
          <div>
            <div>
              <input
                onInput={(e) => {
                  setIdconfirm(e.target.value);
                }}
                type={"text"}
                placeholder={"아이디"}
              />
            </div>
            <div>
              <input
                onInput={(e) => {
                  setPhoneConfirm(e.target.value);
                }}
                type={"text"}
                placeholder={"핸드폰번호"}
              />
            </div>
          </div>
          <button
            onClick={() => {
              if ((idConfirm && phoneComfirm) == "") {
                alert("아이디와 핸드폰번호를 입력해주세요");
              } else {
                // onClick(idConfirm, pwConfirm);
                pwConfirmClick(idConfirm, phoneComfirm);
              }
            }}
            className="login"
          >
            비밀번호 찾기
          </button>
        </div>
      )}
      {/* <div className="flex">
        <div>
          <div>
            <input
              onInput={(e) => {
                setIdconfirm(e.target.value);
              }}
              type={"text"}
              placeholder={"이름"}
            />
          </div>
          <div>
            <input
              onInput={(e) => {
                setPwconfirm(e.target.value);
              }}
              type={"text"}
              placeholder={"핸드폰번호"}
            />
          </div>
        </div>
        <button
          onClick={() => {
            if ((idConfirm && pwConfirm) == "") {
              alert("이름과 핸드폰번호를 입력해주세요");
            } else {
              onClick(idConfirm, pwConfirm);
            }
          }}
          className="login"
        >
          ID찾기
        </button>
      </div> */}
      <div
        className="regist"
        onClick={() => {
          moveTo("registAccount/company");
        }}
      >
        <div></div>
      </div>
    </MordalBox>
  );
};

export default MordalComponent;

// const Modallogin = styled.div`
//   width: 100%;
//   padding-top: 2%;
// `;

const Pwsearch = styled.div`
  border: 2px solid #3399ff;
`;

const Idsearch = styled.div`
  border: 2px solid #3399ff;
`;

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
  z-index: 3;

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
    /* border: 1px solid #3399ff; */
    margin-top: 30px;
    margin-left: 70px;
    text-align: center;
    cursor: pointer;
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
    padding: 40px 0 0 70px;
  }
`;
