import styled from "styled-components";
import React from "react";
import Select from "react-select";

export default function RegistPostComponent() {
  const options = [
    { value: "rank1", label: "사원" },
    { value: "rank2", label: "주임" },
    { value: "rank3", label: "대리" },
    { value: "rank4", label: "과장" },
    { value: "rank5", label: "차장" },
    { value: "rank6", label: "부장" },
  ];

  const options2 = [
    { value: "department1", label: "전공/학과 : 인문계열" },
    { value: "department2", label: "전공/학과 : 사회계열" },
    { value: "department3", label: "전공/학과 : 교육계열" },
    { value: "department4", label: "전공/학과 : 자연계열" },
    { value: "department5", label: "전공/학과 : 공학계열" },
    { value: "department6", label: "전공/학과 : 의약계열" },
    { value: "department7", label: "전공/학과 : 예체능계열" },
    { value: "ability1", label: "보유역량 : 해당직무 근무경험" },
    { value: "ability2", label: "보유역량 : 은근거주자" },
    { value: "language1", label: "외국어 : TOEIC" },
    { value: "language2", label: "외국어 : TOEFL" },
    { value: "language3", label: "외국어 : OPIc" },
    { value: "language4", label: "외국어 : JLPT" },
    { value: "language5", label: "외국어 : HSK" },
  ];

  // <LineBox>
  //   <Select options={options} />
  // </LineBox>;

  return (
    <>
      <HeadBox>모집분야</HeadBox>
      <RegistPostBox>
        <div className="line">
          <div>모집분야명</div>
          <input type="text" className="mo1" />
          <input type="text" className="mo2" />
          <div>명 모집</div>
        </div>
        <div className="line">
          <div>경력여부</div>
          <input type="radio" value={"noexp"} />
          경력무관
          <input type="radio" value={"new"} />
          신입
          <input type="radio" value={"veteran"} />
          경력
        </div>
        <div className="line">
          <div>담당업무</div>
          <input type="text" className="mo1"></input>
        </div>

        <div className="line">
          <div>근무부서</div>
          <input type="text" className="mo1" />
        </div>
        <div className="line">
          <div>직급직책</div>
          <LineBox>
            <Select
              options={options}
              isMulti
              className="basic-multi-select"
              classNamePrefix="select"
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
            />
          </LineBox>
        </div>
        <div className="nextBtn">다음</div>
      </RegistPostBox>
    </>
  );
}

const HeadBox = styled.div`
  width: 66%;
  margin: auto;
  color: #323743;
  font-size: 40px;
  font-weight: 800;
`;

const RegistPostBox = styled.div`
  width: 66%;
  margin: auto;
  background-color: red;

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
  }

  .mo2 {
    width: 100px;
    margin-left: 20px;
  }
  input {
    height: 40px;
    border-radius: 10px;
    border: 1px solid #e1e3e5;
  }

  .nextBtn {
    width: 200px;
    height: 80px;
    border: 1px solid blue;
    margin: auto;
    margin-top: 20px;
    background-color: skyblue;
  }
`;

const LineBox = styled.div`
  width: 80%;
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
