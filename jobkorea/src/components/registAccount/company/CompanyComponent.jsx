import styled from "styled-components";
import banner from "./img/Jobbanner.png";
import backimg from "./img/backcolor.png";
import React from "react";
import Select from "react-select";
import { useState } from "react";
import "./Company.css";

// import circlecheck from "circle-check-regular.svg";
// import magni from "./img/magnifying-glass-solid.svg";
// import { VscSearch } from "react-icons/vsc";
const COLOR = " #3399ff";

export default function CompanyComponent({ onClick }) {
  const options = [
    { value: "", label: "" },
    { value: "기업형태", label: "기업형태" },
    { value: "중소기업", label: "중소기업" },
    { value: "외국계", label: "외국계" },
    { value: "중견기업", label: "중견기업" },
  ];

  const [selectedOption, setSelectedOption] = useState("");
  const [companyNumber, setCompnayNumber] = useState("");
  const [companyName, setCompnayName] = useState("");
  const [companyHeader, setCompanyHeader] = useState("");
  const [companyAdress, setCompanyAdress] = useState("");
  const [companyId, setCompanyId] = useState("");
  const [companyPw, setCompanyPw] = useState("");
  const [companyIdname, setCompanyIdname] = useState("");
  const [companyIdnumber, setCompanyIdnumber] = useState("");
  const [companyIdemail, setCompanyIdemail] = useState("");

  const [idMessage, setIdMessage] = useState(null);
  const [pwMessage, setPwMessage] = useState(null);
  const [emailMessage, setEmailMessage] = useState(null);

  const [isId, setIsId] = useState(false);
  const [isPw, setIsPw] = useState(false);
  const [isEmail, setIsEmail] = useState(false);

  return (
    <JoinBox>
      <Join>
        <img src={banner} alt="" />
      </Join>
      <Join>
        <div className="personal">개인회원</div>
        <div className="company">기업회원</div>
      </Join>
      <Join>
        <Joindetailbackground>
          <Joindetail>
            기업정보 <span style={{ color: "gray" }}>*필수정보</span>
          </Joindetail>

          <Select
            // defaultValue={selectedOption}
            onChange={(e) => {
              setSelectedOption(e.value);
            }}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                height: "50px",
                width: "98%",
              }),
            }}
            className="selectone"
            placeholder="기업형태＊"
            options={options}
            //value값
          />
          <Companynumber
            onInput={(e) => {
              setCompnayNumber(e.target.value);
            }}
            type={"number"}
            placeholder="사업자등록번호 *"
          ></Companynumber>
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
            회사명,대표자명 수정이 필요한 경우, 가입 후 고객센터(1588-9350)로
            문의 해 주세요
          </div>
          <div>
            <Companyadress
              onInput={(e) => {
                setCompanyAdress(e.target.value);
              }}
              type={"text"}
              placeholder="회사주소 * "
            ></Companyadress>{" "}
            {/* <img src={magni} alt="" /> */}
          </div>
          <Companytitle>
            <Companyid
              // onFocus={(e) => {
              //   if (companyId == "") setIdMessage("필수정보입니다");
              // }}
              // onChange={onChangeId}
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
              type={"password"}
              placeholder="비밀번호*"
            ></Companypw>
            <Companycheck>표시</Companycheck>
          </Companytitle>

          <div className="idmessage">
            {idMessage}
            {pwMessage}
          </div>
          {/* <div className="pwmessage">{pwMessage}</div> */}
          <Companyidname
            onInput={(e) => {
              setCompanyIdname(e.target.value);
            }}
            type={"text"}
            placeholder="가입자명 *"
          ></Companyidname>
          <Companyidname
            onInput={(e) => {
              setCompanyIdnumber(e.target.value);
              const phoneRegExp=/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

              if(!)

            }}
            type={"number"}
            placeholder="전화번호 *"
          ></Companyidname>
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
          <Join>
            <div
              onClick={() => {
                if (
                  !(
                    selectedOption &&
                    companyNumber &&
                    companyName &&
                    companyHeader &&
                    companyAdress &&
                    companyId &&
                    companyPw &&
                    companyIdname &&
                    companyIdnumber &&
                    companyIdemail
                  ) == "" &&
                  isId === true &&
                  isPw === true &&
                  isEmail === true
                )
                  onClick(
                    selectedOption,
                    companyNumber,
                    companyName,
                    companyHeader,
                    companyAdress,
                    companyId,
                    companyPw,
                    companyIdname,
                    companyIdnumber,
                    companyIdemail
                  );
                else {
                  alert("모든정보를 제대로 입력해주세요");
                }
              }}
              className="companymember"
            >
              가입하기
            </div>
          </Join>
        </Joindetailbackground>
      </Join>
    </JoinBox>
  );
}

const JoinBox = styled.div`
  width: 100%;
  height: 50vw;
  background-image: url(${backimg});
`;

const Join = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & .personal {
    font-size: 20px;

    display: flex;
    align-items: center;
    width: 200px;
    height: 60px;
    background-color: white;
    color: gray;
    justify-content: center;
    border-bottom: solid 1px ${COLOR};
  }

  & .company {
    font-size: 20px;

    display: flex;
    justify-content: center;
    background-color: ${COLOR};
    height: 60px;
    color: white;
    align-items: center;
    width: 400px;
  }

  & .companymember {
    font-size: 20px;
    /* padding: 1%; */
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

const Joindetailbackground = styled.div`
  margin-top: 30px;

  background-color: white;
  /* @media only screen and (max-width: 600px) {
    max-width: 400px;
  } */
  width: 31%;
  height: 75vh;

  & .selectone {
    padding: 3%;

    width: 600px;
  }

  & .check {
    padding: 3%;
    margin-left: 1%;
    color: gray;
    font-size: 13px;
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
