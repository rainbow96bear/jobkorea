import styled from "styled-components";
import React, { useState } from "react";
import Select from "react-select";

export default function RegistPostComponent({
  saveHandler,
  recruitAreaHandler,
  recruitNumHandler,
  myTaskHandler,
  isExp,
  workDepartmentHandler,
  workRankHandler,
  conditionHandler,
  expList,
  onChecked,
  eduHandler,
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

  return (
    <BackgroundBox>
      <HeadBox>모집분야</HeadBox>
      <RegistPostBox>
        <div className="line">
          <div>모집공고명</div>
          <input type="text" className="mo1" onChange={recruitAreaHandler} />
          <input
            type="number"
            className="mo2"
            min={1}
            onInput={(e) => {
              if (e.target.value.length > e.target.maxLength)
                e.target.value = e.target.value.slice(0, e.target.maxLength);
              e.target.value = e.target.value
                .replace(/[^0-9.]/g, "")
                .replace(/(\..*)\./g, "$1");
            }}
            maxLength={2}
            onChange={recruitNumHandler}
          />
          <div>명 모집</div>
        </div>
        <div className="line">
          <div>경력여부</div>

          {expList.map((item, index) => {
            return (
              <CheckBox key={`check-${index}`}>
                <input
                  type="checkbox"
                  value={item.data}
                  checked={isExp.includes(item.data) ? true : false}
                  onChange={(e) => {
                    onChecked(e.target.checked, e.target.value);
                  }}
                />
                <div>{item.name}</div>
              </CheckBox>
            );
          })}
        </div>
        <div className="line">
          <div>담당업무</div>
          <input type="text" className="mo1" onChange={myTaskHandler}></input>
        </div>

        <div className="line">
          <div>근무부서</div>
          <input type="text" className="mo1" onChange={workDepartmentHandler} />
        </div>
        <div className="line">
          <div>직급직책</div>
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
          <div>학력조건</div>
          <LineBox>
            <Select
              className="basic-multi-select"
              classNamePrefix="select"
              options={options3}
              onChange={eduHandler}
            />
          </LineBox>
        </div>
      </RegistPostBox>
      <div className="nextBtn" onClick={saveHandler}>
        다음
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
  }

  .mo2 {
    width: 35px;
    margin: 0 5px 0 20px;
    padding-left: 10px;
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

{
  /* <select name="exp">
          <option value={"noexp"}>경력무관</option>
          <option value={"new"}>신입</option>
          <option value={"veteran"}>경력</option>
        </select> */
}

{
  /* <div>
        <span>학력</span>
        <select name="edu">
          <option value={"noedu"}>학력무관</option>
          <option value={"high"}>고졸이상</option>
          <option value={"junior"}>초대졸이상</option>
          <option value={"college"}>대졸이상</option>
        </select>
      </div> */
}
