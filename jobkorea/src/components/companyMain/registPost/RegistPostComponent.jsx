import styled from "styled-components";
import React, { useState } from "react";
import Select from "react-select";

export default function RegistPostComponent({
  saveHandler,
  nameHandler,
  recruitNumHandler,
  myTaskHandler,
  isExp,
  workDepartmentHandler,
  workRankHandler,
  conditionHandler,
  expList,
  onChecked,
  eduHandler,
  areaHandler,
  shapeHandler,
  payChecked,
  payList,
  isPay,
  minPayHandler,
  maxPayHandler,
  isLimit,
  limitList,
  limitChecked,
  payKindsHandler,
}) {
  const options = [
    { value: "인턴", label: "인턴" },
    { value: "사원급", label: "사원" },
    { value: "주임급", label: "주임" },
    { value: "대리급", label: "대리" },
    { value: "과장급", label: "과장" },
    { value: "차장급", label: "차장" },
    { value: "부장급", label: "부장" },
  ];

  const options2 = [
    { value: "전공/학과 : 인문계열", label: "전공/학과 : 인문계열" },
    { value: "전공/학과 : 사회계열", label: "전공/학과 : 사회계열" },
    { value: "전공/학과 : 교육계열", label: "전공/학과 : 교육계열" },
    { value: "전공/학과 : 자연계열", label: "전공/학과 : 자연계열" },
    { value: "전공/학과 : 공학계열", label: "전공/학과 : 공학계열" },
    { value: "전공/학과 : 의약계열", label: "전공/학과 : 의약계열" },
    { value: "전공/학과 : 예체능계열", label: "전공/학과 : 예체능계열" },
    {
      value: "보유역량 : 해당직무 근무경험",
      label: "보유역량 : 해당직무 근무경험",
    },
    { value: "보유역량 : 인근거주자", label: "보유역량 : 인근거주자" },
    { value: "외국어 : TOEIC", label: "외국어 : TOEIC" },
    { value: "외국어 : TOEFL", label: "외국어 : TOEFL" },
    { value: "외국어 : OPIc", label: "외국어 : OPIc" },
    { value: "외국어 : JLPT", label: "외국어 : JLPT" },
    { value: "외국어 : HSK", label: "외국어 : HSK" },
  ];

  const options3 = [
    { value: "학력무관", label: "학력무관" },
    { value: "고졸↑", label: "고졸이상" },
    { value: "초대졸↑", label: "초대졸이상" },
    { value: "대졸↑", label: "대졸이상" },
  ];

  const options4 = [
    { value: "전국", label: "전국" },
    { value: "서울", label: "서울" },
    { value: "부산", label: "부산" },
    { value: "대구", label: "대구" },
    { value: "인천", label: "인천" },
    { value: "광주", label: "광주" },
    { value: "대전", label: "대전" },
    { value: "울산", label: "울산" },
    { value: "경기", label: "경기" },
    { value: "강원", label: "강원" },
    { value: "충북", label: "충북" },
    { value: "충남", label: "충남" },
    { value: "전북", label: "전북" },
    { value: "전남", label: "전남" },
    { value: "경북", label: "경북" },
    { value: "경남", label: "경남" },
    { value: "제주", label: "제주" },
    { value: "전국", label: "전국" },
  ];

  const options5 = [
    { value: "정규직", label: "정규직" },
    { value: "계약직", label: "계약직" },
    { value: "파견직", label: "파견직" },
    { value: "도급", label: "도급" },
    { value: "프리랜서", label: "프리랜서" },
    { value: "아르바이트", label: "아르바이트" },
    { value: "연수생/교육생", label: "연수생/교육생" },
    { value: "병역특례", label: "병역특례" },
    { value: "위촉직/개인사업자", label: "위촉직/개인사업자" },
  ];

  const options7 = [
    { value: "주급", label: "주급" },
    { value: "월급", label: "월급" },
    { value: "연봉", label: "연봉" },
  ];

  return (
    <BackgroundBox>
      <HeadBox>모집분야</HeadBox>
      <RegistPostBox>
        <div className="line">
          <div>모집공고명*</div>
          <input type="text" className="mo1" onChange={nameHandler} />

          {limitList.map((item, index) => {
            return (
              <CheckBox key={`limitList-${index}`}>
                <input
                  key={`limitList-input-${index}`}
                  type="checkbox"
                  value={item.data}
                  onChange={(e) => {
                    limitChecked(e.target.checked, e.target.value);
                    console.log(isLimit);
                  }}
                />
                <div key={`expList-div-${index}`}>{item.name}</div>
              </CheckBox>
            );
          })}

          {isLimit ? (
            <>
              <input
                type="number"
                className="mo2"
                min={1}
                onInput={(e) => {
                  if (e.target.value.length > e.target.maxLength)
                    e.target.value = e.target.value.slice(
                      0,
                      e.target.maxLength
                    );
                  e.target.value = e.target.value
                    .replace(/[^0-9.]/g, "")
                    .replace(/(\..*)\./g, "$1");
                }}
                maxLength={2}
                onChange={recruitNumHandler}
              />
              <div>명 모집</div>
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="line">
          <div>경력여부*</div>

          {expList.map((item, index) => {
            return (
              <CheckBox key={`expList-${index}`}>
                <input
                  key={`expList-input-${index}`}
                  type="checkbox"
                  value={item.data}
                  checked={isExp.includes(item.data) ? true : false}
                  onChange={(e) => {
                    onChecked(e.target.checked, e.target.value);
                  }}
                />
                <div key={`expList-div-${index}`}>{item.name}</div>
              </CheckBox>
            );
          })}
        </div>
        <div className="line">
          <div>담당업무*</div>
          <input type="text" className="mo1" onChange={myTaskHandler}></input>
        </div>

        <div className="line">
          <div>근무부서</div>
          <input type="text" className="mo1" onChange={workDepartmentHandler} />
        </div>
        <div className="line">
          <div>직급직책*</div>
          <LineBox>
            <Select
              isMulti
              className="basic-multi-select"
              classNamePrefix="select"
              options={options}
              onChange={workRankHandler}
            />
          </LineBox>
        </div>
        <div className="line">
          <div>필수/우대조건</div>
          <LineBox>
            <Select
              isMulti
              className="basic-multi-select"
              classNamePrefix="select"
              options={options2}
              onChange={conditionHandler}
            />
          </LineBox>
        </div>
        <div className="line">
          <div>학력조건*</div>
          <LineBox>
            <Select
              className="basic-multi-select"
              classNamePrefix="select"
              options={options3}
              onChange={eduHandler}
            />
          </LineBox>
        </div>
        <div className="line">
          <div>근무지역*</div>
          <LineBox>
            <Select
              isMulti
              className="basic-multi-select"
              classNamePrefix="select"
              options={options4}
              onChange={areaHandler}
            />
          </LineBox>
        </div>
        <div className="line">
          <div>근무형태*</div>
          <LineBox>
            <Select
              className="basic-multi-select"
              classNamePrefix="select"
              options={options5}
              onChange={shapeHandler}
            />
          </LineBox>
        </div>
        <div className="line">
          <div>급여*</div>
          <Select
            className="basic-multi-select"
            classNamePrefix="select"
            options={options7}
            onChange={payKindsHandler}
          />
          {isPay[0] == "회사내규에 따름" || isPay[1] == "회사내규에 따름" ? (
            <></>
          ) : (
            <>
              <input type="number" className="mo3" onChange={minPayHandler} /> ~
              <input type="number" className="mo4" onChange={maxPayHandler} />만
              원 -
            </>
          )}
          {payList.map((item, index) => {
            return (
              <CheckBox key={`payList-${index}`}>
                <input
                  key={`payList-input-${index}`}
                  type="checkbox"
                  value={item.data}
                  checked={isPay.includes(item.data) ? true : false}
                  onChange={(e) => {
                    payChecked(e.target.checked, e.target.value);
                  }}
                />
                <div key={`payList-div-${index}`}>{item.name}</div>
              </CheckBox>
            );
          })}
        </div>
      </RegistPostBox>
      <div className="nextBtn" onClick={saveHandler}>
        공고등록
      </div>
    </BackgroundBox>
  );
}

const BackgroundBox = styled.div`
  background-color: #f2f6f9;
  padding-bottom: 50px;

  .nextBtn {
    width: 200px;
    height: 50px;
    margin: auto;
    margin-top: 50px;
    background-color: skyblue;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    cursor: pointer;
  }
`;

const HeadBox = styled.div`
  width: 65%;
  margin: auto;
  color: #323743;
  font-size: 30px;
  font-weight: 800;
  padding: 30px;
`;

const RegistPostBox = styled.div`
  width: 66%;
  margin: auto;
  border-radius: 20px;
  background-color: white;
  padding: 30px 0;

  & > div > div:first-child {
    width: 15%;
  }

  .line {
    display: flex;
    align-items: center;

    & > div:first-child {
      font-size: 20px;
      font-weight: 700;
      margin: 20px;
    }
  }

  .mo1 {
    width: 500px;
    padding-left: 10px;
    margin-right: 30px;
  }

  .mo2 {
    width: 35px;
    margin: 0 5px 0 10px;
    padding-left: 10px;
  }

  .mo3 {
    width: 70px;
    margin: 0 5px 0 20px;
    padding-left: 10px;
  }
  .mo4 {
    width: 70px;
    margin: 0 5px 0 5px;
  }
  input {
    height: 40px;
    border-radius: 10px;
    border: 1px solid #e1e3e5;
  }
`;

const LineBox = styled.div`
  width: 80%;
`;

const CheckBox = styled.div`
  display: flex;
  align-items: center;

  & > input {
    margin-right: 10px;
  }

  & > div {
    margin-right: 20px;
  }
`;
