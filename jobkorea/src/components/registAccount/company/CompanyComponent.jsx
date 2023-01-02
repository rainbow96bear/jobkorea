import styled from "styled-components";
import banner from "./img/Jobbanner.png";
import backimg from "./img/backcolor.png";
import React from "react";
import Select from "react-select";
import { useState } from "react";
import "./Company.css";
import { useNavigate } from "react-router-dom";
import DaumPostcode from "react-daum-postcode";

const COLOR = " #3399ff";

export default function CompanyComponent({
  onClick,
  handle,
  openPostcode,
  companyAddress,
}) {
  const options = [
    { value: "", label: "" },
    { value: "대기업", label: "대기업" },
    { value: "중소기업", label: "중소기업" },
    { value: "외국계", label: "외국계" },
    { value: "중견기업", label: "중견기업" },
  ];
  const navigate = useNavigate();
  const [delectCheck, setDeleteCheck] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [companyNumber, setCompnayNumber] = useState("");
  const [companyName, setCompnayName] = useState("");
  const [companyHeader, setCompanyHeader] = useState("");
  const [companyId, setCompanyId] = useState("");
  const [companyPw, setCompanyPw] = useState("");
  const [companyIdname, setCompanyIdname] = useState("");
  const [companyIdnumber, setCompanyIdnumber] = useState("");
  const [companyIdemail, setCompanyIdemail] = useState("");
  const [companyLogo, setCompanyLogo] = useState("");
  const [companyLogoUpload, setCompanyLogoUpload] = useState("");
  const [pwcheck, setPwcheck] = useState("password");
  const [checktext, setChecktext] = useState("표시");

  const [idMessage, setIdMessage] = useState(null);
  const [pwMessage, setPwMessage] = useState(null);
  const [emailMessage, setEmailMessage] = useState(null);
  const [numberMessage, setNumberMessage] = useState(null);
  const [idNumberMessage, setIdnumberMessage] = useState(null);

  const [isId, setIsId] = useState(false);
  const [isPw, setIsPw] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isIdNumber, setIsIdnumber] = useState(false);

  const onInputphone = (getNumber) => {
    const currentPhone = getNumber;
    setCompanyIdnumber(currentPhone);
    const phoneRegExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    if (!phoneRegExp.test(currentPhone)) {
      setIdnumberMessage("올바른 형식이 아닙니다");
      setIsIdnumber(false);
    } else {
      setIdnumberMessage("사용 가능한 번호입니다");
      setIsIdnumber(true);
    }
  };

  const imgChanage = (imgFile) => {
    if (imgFile.files && imgFile.files[0]) {
      const readImg = new FileReader();
      readImg.onload = (e) => {
        setCompanyLogo(e.target.result);
      };
      readImg.readAsDataURL(imgFile.files[0]);
      setCompanyLogoUpload(imgFile.files[0]);
      console.log(imgFile.files[0]);
    } else if (imgFile.files.length === 0) {
      setCompanyLogo("");
    }
  };
  return (
    <JoinBox>
      <Mainbanner>
        <img src={banner} alt="" />

        <Join>
          <div
            className="personal"
            onClick={() => {
              navigate("/registAccount/individual");
            }}
          >
            개인회원
          </div>
          <div className="company">기업회원</div>
        </Join>
      </Mainbanner>

      <Joindetailbackground>
        <Joindetail>
          기업정보 <span style={{ color: "gray" }}>*필수정보</span>
        </Joindetail>
        <Multername>기업로고를 등록해주세요</Multername>

        <Companylogo src={companyLogo}></Companylogo>
        <Multercontainer>
          <MulterBox
            onChange={(e) => {
              imgChanage(e.target);
            }}
            type={"file"}
            name={"companylogo"}
            id={"companylogo"}
            placeholder={"기업로고"}
            autocomplete={"off"}
          />
        </Multercontainer>

        <Select
          onChange={(e) => {
            setSelectedOption(e.value);
          }}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,

              height: "50px",

              width: "100%",
            }),
          }}
          className="selectone"
          placeholder="기업형태＊"
          options={options}
        />

        <Companynumber
          onBlur={(e) => {
            setNumberMessage(null);
          }}
          onInput={(e) => {
            setCompnayNumber(e.target.value);
            if (e.target.value.length > 9) {
              e.target.value = e.target.value.slice(0, 9);
              setNumberMessage("10자미만만 입력가능합니다");
            }
          }}
          type={"number"}
          placeholder="사업자등록번호 *"
        ></Companynumber>
        <div className="idmessage">{numberMessage}</div>
        <Companytitle>
          <Companyname
            onInput={(e) => {
              setCompnayName(e.target.value);
            }}
            type={"text"}
            placeholder="회사명 *"
          ></Companyname>
          <Companyheader
            onInput={(e) => {
              setCompanyHeader(e.target.value);
            }}
            type={"text"}
            placeholder="대표자명*"
          ></Companyheader>
        </Companytitle>
        <div className="check">
          회사명,대표자명 수정이 필요한 경우, 가입 후 고객센터(1588-9350)로 문의
          해 주세요
        </div>
        <div>
          <Companyadress
            onInput={(e) => {
              e.preventDefault();
            }}
            onClick={handle.clickButton}
            value={companyAddress}
            type="text"
            placeholder="회사주소 * "
          ></Companyadress>{" "}
          {openPostcode && (
            <DaumPostcode
              onComplete={handle.selectAddress} // 값을 선택할 경우 실행되는 이벤트
              autoClose={false} // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정
              defaultQuery="" // 팝업을 열때 기본적으로 입력되는 검색어
            />
          )}
        </div>
        <Companytitle>
          <Companyid
            onBlur={(e) => {
              setIdMessage(null);
            }}
            onInput={(e) => {
              setCompanyId(e.target.value);

              const idRegExp = /^[a-zA-Z0-9]{6,13}$/;
              if (!idRegExp.test(e.target.value)) {
                setIdMessage("6-13사이 대소문자 또는 숫자만 입력해주세요");
                setIsId(false);
              } else {
                setIdMessage("사용가능한 아이디 입니다.");
                setIsId(true);
              }
            }}
            type={"text"}
            placeholder="아이디 *"
          ></Companyid>

          <Companypw
            companyPw={companyPw}
            onBlur={(e) => {
              setPwMessage(null);
            }}
            onInput={(e) => {
              setCompanyPw(e.target.value);
              const pwRegExp =
                /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
              if (!pwRegExp.test(e.target.value)) {
                setPwMessage(
                  "숫자+영문자+특수문자 조합으로 8자리이상 25자리 미만으로 입력해주세요"
                );
                setIsPw(false);
              } else {
                setPwMessage("안전한 비밀번호 입니다");
                setIsPw(true);
              }
            }}
            type={pwcheck}
            placeholder="비밀번호*"
          ></Companypw>
          <Companycheck
            onClick={() => {
              setPwcheck("text");

              setChecktext("숨김");
              if (pwcheck == "text") {
                setPwcheck("password");
                setChecktext("표시");
              }
            }}
          >
            {checktext}
          </Companycheck>
        </Companytitle>

        <div className="idmessage">
          {idMessage}
          {pwMessage}
        </div>

        <Companyidname
          onInput={(e) => {
            setCompanyIdname(e.target.value);
          }}
          type={"text"}
          placeholder="가입자명 *"
        ></Companyidname>
        <Companyidname
          onBlur={(e) => {
            setIdnumberMessage(null);
          }}
          onInput={(e) => {
            setCompanyIdnumber(e.target.value);

            const phoneRegExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

            if (!phoneRegExp.test(e.target.value)) {
              setIdnumberMessage("올바른 형식이 아닙니다");
              setIsIdnumber(false);
            } else {
              setIdnumberMessage("사용 가능한 번호입니다");
              setIsIdnumber(true);
            }
            const currentNumber = e.target.value;
            setCompanyIdnumber(currentNumber);
            if (currentNumber.length == 3 || currentNumber.length == 8) {
              setDeleteCheck(true);
              console.log(delectCheck);
            }
            if (delectCheck) {
              if (currentNumber.length == 2 || currentNumber.length == 7) {
                setDeleteCheck(false);
              }
            } else {
              if (currentNumber.length == 3 || currentNumber.length == 8) {
                setCompanyIdnumber(currentNumber + "-");
                onInputphone(currentNumber + "-");
              } else {
                onInputphone(currentNumber);
              }
            }
          }}
          type={"text"}
          placeholder="전화번호 *"
          value={companyIdnumber}
        ></Companyidname>
        <div className="idmessage">{idNumberMessage}</div>
        <Companyidname
          onBlur={(e) => {
            setEmailMessage(null);
          }}
          onInput={(e) => {
            setCompanyIdemail(e.target.value);
            const emailRegExp =
              /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
            if (!emailRegExp.test(e.target.value)) {
              setEmailMessage("이메일 형식을 다시 확인해주세요");
              setIsEmail(false);
            } else {
              setEmailMessage("사용 가능한 이메일 입니다.");
              setIsEmail(true);
            }
          }}
          type={"email"}
          placeholder="이메일 *"
        ></Companyidname>
        <div className="idmessage">{emailMessage}</div>

        <div
          onClick={() => {
            if (
              !(
                selectedOption &&
                companyNumber &&
                companyName &&
                companyHeader &&
                companyAddress &&
                companyId &&
                companyPw &&
                companyIdname &&
                companyIdnumber &&
                companyIdemail &&
                companyLogo
              ) == "" &&
              isId === true &&
              isPw === true &&
              isEmail === true &&
              isIdNumber === true
            )
              onClick(
                selectedOption,
                companyNumber,
                companyName,
                companyHeader,
                companyAddress,
                companyId,
                companyPw,
                companyIdname,
                companyIdnumber,
                companyIdemail,
                companyLogoUpload
              );
            else {
              alert("모든정보를 제대로 입력해주세요");
            }
          }}
          className="companymember"
        >
          가입하기
        </div>
      </Joindetailbackground>
    </JoinBox>
  );
}

const Multercontainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;
const Mainbanner = styled.div`
  display: flex;
  /* min-width: 600px; */

  flex-direction: column;

  img {
    width: 100%;
    max-width: 600px;
  }
`;

const Companylogo = styled.img`
  width: 15%;
  padding-left: 20%;
`;

const Multername = styled.span`
  color: grey;

  display: flex;
  justify-content: end;
`;

const MulterBox = styled.input``;

const JoinBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  /* height: 105vh; */
  /* min-width: 100px; */
  /* max-width: 600px; */
  /* height: 50vw; */
  /* background-image: url(${backimg}); */
  background-color: lightgray;
`;

const Join = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  max-width: 600px;
  /* min-width: 600px; */

  & .personal {
    font-size: 20px;
    flex: 1;
    display: flex;
    align-items: center;
    /* max-width: 200px; */
    height: 60px;
    background-color: white;
    color: gray;
    justify-content: center;
    border-bottom: solid 1px ${COLOR};
  }

  & .company {
    font-size: 20px;
    flex: 2;
    display: flex;
    justify-content: center;
    background-color: ${COLOR};
    height: 60px;
    color: white;
    align-items: center;
    /* max-width: 400px; */
  }
`;

const Joindetailbackground = styled.div`
  /* margin-top: 30px; */

  background-color: white;
  padding-bottom: 20px;

  max-width: 600px;
  /* min-width: 600px; */

  width: 100%;
  /* min-width: 600px; */
  /* height: 100%; */

  display: flex;

  flex-direction: column;

  & .selectone {
    padding: 3%;
  }

  & .check {
    padding: 3%;
    margin-left: 1%;
    color: gray;
    font-size: 13px;
  }
  & .companymember {
    font-size: 20px;
    margin: 0 20px;
    display: flex;
    justify-content: center;
    background-color: ${COLOR};
    height: 60px;
    color: white;
    align-items: center;
    width: 93%;
    margin-top: 3%;
  }
`;

const Joindetail = styled.div`
  display: flex;

  justify-content: space-between;
  padding: 5%;
`;

const Companynumber = styled.input`
  width: 90%;
  height: 4%;
  margin-left: 4%;
  background-color: white;
  color: grey;
  border-style: solid;
  border-color: lightgrey;
  padding: 1%;
`;

const Companyadress = styled.input`
  width: 90%;
  height: 3vh;
  margin-left: 4%;
  background-color: white;
  color: grey;
  border-style: solid;
  border-color: lightgrey;
  padding: 1%;
`;
const Companytitle = styled.div`
  display: flex;
`;

const Companyname = styled.input`
  width: 60%;
  height: 7%;
  margin-left: 4%;
  background-color: white;
  color: grey;
  border-style: solid;
  border-color: lightgrey;
  padding: 3%;
  margin-top: 2%;
`;

const Companyid = styled.input`
  width: 25%;
  height: 7%;
  margin-left: 4%;
  background-color: white;
  color: grey;
  border-style: solid;
  border-color: lightgrey;
  padding: 3%;
  margin-top: 2%;
`;

const Companypw = styled.input`
  width: 40%;
  height: 7%;
  margin-left: 2%;
  margin-right: 3%;
  background-color: white;
  color: grey;
  border-style: solid;
  border-color: lightgrey;
  padding: 3%;
  margin-top: 2%;
`;

const Companycheck = styled.div`
  display: flex;
  align-items: center;
  color: grey;
`;

const Companyheader = styled.input`
  width: 40%;
  height: 7%;
  margin-left: 2%;
  margin-right: 3%;
  background-color: white;
  color: grey;
  border-style: solid;
  border-color: lightgrey;
  padding: 3%;
  margin-top: 2%;
`;

const Companyidname = styled.input`
  margin-top: 1%;
  width: 90%;
  height: 4%;
  margin-left: 4%;
  background-color: white;
  color: grey;
  border-style: solid;
  border-color: lightgrey;
  padding: 1%;
`;
