import styled from "styled-components";
import { useState } from "react";

const MordalComponent = ({
  loginOnClick,
  moveTo,
  onClick,
  setIsClick,
  idConfirmClick,
  pwConfirmClick,
  change,
  setChangepw,
  lastconfirmphone,
  lastconfirmid,
  setChange,
  midScreen,
}) => {
  const [idConfirm, setIdconfirm] = useState("");
  const [pwConfirm, setPwconfirm] = useState("");
  const [nameConirm, setNameConfirm] = useState("");
  const [phoneComfirm, setPhoneConfirm] = useState("");
  // const [changepw, setChangepw] = useState("");
  const [confirm, setConfirm] = useState(true);
  const [isPw, setIsPw] = useState(false);
  const [message, setMessage] = useState("");
  const [checkconfirm, setCheckconfirm] = useState("password");

  return (
    <Stylediv>
      <MordalBox className="modalstyle">
        <div>
          <div>ID/PW 찾기</div>
          <Idsearch
            onClick={() => {
              setConfirm(true);
              setChange(false);
              setPhoneConfirm("");
            }}
          >
            ID찾기
          </Idsearch>
          <Pwsearch
            onClick={() => {
              setConfirm(false);
              setNameConfirm("");
              setPhoneConfirm("");
              setIdconfirm("");
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
            <Modaldiv>
              <div className={midScreen ? "modalscreen" : ""}>
                <input
                  onInput={(e) => {
                    setNameConfirm(e.target.value);
                  }}
                  value={nameConirm}
                  type={"text"}
                  placeholder={"이름을 입력해주세요"}
                />

                <input
                  onInput={(e) => {
                    setPhoneConfirm(e.target.value);
                  }}
                  value={phoneComfirm}
                  type={"text"}
                  placeholder={"-포함 핸드폰번호를 입력해주세요"}
                />
              </div>
            </Modaldiv>
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
        ) : change ? (
          <div className="flex">
            <div>
              <Modaldiv>
                <input
                  // className="changepw"
                  onInput={(e) => {
                    setPwconfirm(e.target.value);
                    const pwRegExp =
                      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
                    if (!pwRegExp.test(e.target.value)) {
                      setIsPw(false);
                      setMessage(
                        "숫자+영문자+특수문자 조합으로 8자리이상 25자리 미만으로 입력해주세요"
                      );
                    } else {
                      setMessage("안전한 비밀번호 입니다");
                      setIsPw(true);
                    }
                  }}
                  value={pwConfirm}
                  type={checkconfirm}
                  placeholder={"변경할 비밀번호를 입력해주세요"}
                />
              </Modaldiv>
              <Messagediv>{message}</Messagediv>
              {message == "" ? (
                <></>
              ) : (
                <Pwcheck
                  onClick={() => {
                    setCheckconfirm("text");
                    if (checkconfirm == "text") {
                      setCheckconfirm("password");
                    }
                  }}
                >
                  {" "}
                  비밀번호 표시
                </Pwcheck>
              )}
              {/* <div>
              <input
                onInput={(e) => {
                  setPhoneConfirm(e.target.value);
                }}
                type={"text"}
                placeholder={"-포함 핸드폰번호를 입력해주세요"}
              />
            </div> */}
            </div>

            <Buttonchange
              onClick={() => {
                if (pwConfirm == "") {
                  alert("변경할 비밀번호를 입력해주세요");
                } else {
                  // onClick(idConfirm, pwConfirm);
                  if (isPw == true) {
                    alert("비밀번호가 변경되었습니다");
                    setChangepw(pwConfirm, lastconfirmid, lastconfirmphone);
                    setIsClick(false);
                  } else if (isPw == false) {
                    alert("비밀번호를 제대로 입력해주세요");
                  }
                }
              }}
              className="pwchange"
            >
              비밀번호 변경
            </Buttonchange>
          </div>
        ) : (
          <div className="flex">
            <Modaldiv>
              <div className={midScreen ? "modalscreen" : ""}>
                <div>
                  <input
                    onInput={(e) => {
                      setIdconfirm(e.target.value);
                    }}
                    value={idConfirm}
                    type={"text"}
                    placeholder={"아이디를 입력해주세요"}
                  />
                </div>
                <div>
                  <input
                    onInput={(e) => {
                      setPhoneConfirm(e.target.value);
                    }}
                    value={phoneComfirm}
                    type={"text"}
                    placeholder={"-포함 핸드폰번호를 입력해주세요"}
                  />
                </div>
              </div>
            </Modaldiv>
            <button
              onClick={() => {
                if ((idConfirm && phoneComfirm) == "") {
                  alert("아이디와 핸드폰번호를 입력해주세요");
                } else {
                  // onClick(idConfirm, pwConfirm);
                  pwConfirmClick(idConfirm, phoneComfirm);
                }
              }}
              className="passwordsearch"
            >
              비밀번호 찾기
            </button>
          </div>
        )}
      </MordalBox>
    </Stylediv>
  );
};

export default MordalComponent;

// const Modallogin = styled.div`
//   width: 100%;
//   padding-top: 2%;
// `;
const Modaldiv = styled.div`
  /* flex: 1; */
  /* min-width: 200px; */
  /* max-width: 430px; */
  width: 100%;

  input {
    /* width: 280px; */
    width: 100%;
    max-width: 448px;
    height: 50px;
    border: solid 1px #e1e1e2;
    padding: 0px;
  }
  & .modalscreen {
    /* width: 50%; */
    /* min-width: 210px; */
  }
`;

const Stylediv = styled.div`
  & .modalstyle {
    /* background-color: red; */
  }
`;

const Buttonchange = styled.button`
  /* background-color: red;
  width: 1000px; */
  /* width: 300px; */
  /* flex: 1; */
  width: 100%;
  /* max-width: 100px; */
  height: 50px;
  background-color: #3399ff;
  color: white;
  border: none;

  & .pwchange {
    padding: 10px;
  }
`;

const Changeinput = styled.input`
  /* background-color: red; */
  /* padding: 1px; */
  /* width: 50px; */
  /* min-width: 100px; */
  /* width: 50%; */
  width: 100%;
`;

const Pwcheck = styled.div`
  width: 150px;
  padding: 1px;
  text-align: center;
  /* border: 3px solid #3399ff; */
  background-color: #3399ff;
  color: white;
  border-radius: 10px;
`;

const Messagediv = styled.div`
  width: 100%;
  color: red;
`;

const Pwsearch = styled.div`
  /* border: 3px solid #3399ff; */
  background-color: #3399ff;
  color: white;
  padding: 3px;
  border-radius: 10px;
  font-size: 15px;
`;

const Idsearch = styled.div`
  /* border: 3px solid #3399ff; */
  background-color: #3399ff;
  color: white;
  border-radius: 10px;
  font-size: 15px;

  padding: 3px;
`;

const MordalBox = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 400px;
  width: 90%;
  max-width: 550px;
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
    /* flex: 1; */
    /* max-width: 500px; */
    /* padding: 0px; */
    /* font-size: 2px; */
    /* width: 300px; */

    height: 50px;
    background-color: #3399ff;
    color: white;
    border: solid 1px #3399ff;
    padding: 10px;
  }

  .passwordsearch {
    flex: 1;
    padding: 16px;
    /* width: 300px; */
    /* width: 100px; */

    height: 100px;
    background-color: #3399ff;
    color: white;
    border: none;
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
    flex-direction: column;
    /* width: fit-content; */
    padding: 50px;
    padding-top: 60px;
  }

  .changepw {
    /* width: 300px; */
    /* width: 100%; */
    /* flex: 3; */
    /* min-width: 300px; */
    /* min-width: 300px; */
    /* flex: 1; */
    /* min-width: 300px; */
    /* width: 0%; */
    /* min-width: 300px; */

    height: 6vh;
  }
`;
