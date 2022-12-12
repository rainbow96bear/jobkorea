import styled from "styled-components";

export default function RegistPostComponent() {
  return (
    <>
      <HeadBox>모집분야</HeadBox>
      <RegistPostBox>
        <div>
          <span>모집분야명</span>
          <input type="text" />
          <input type="text" />
          <span>명 모집</span>
        </div>
        <div>
          <span>경력여부</span>
          <input type="radio" value={"noexp"} />
          경력무관
          <input type="radio" value={"new"} />
          신입
          <input type="radio" value={"veteran"} />
          경력
        </div>
        <div>
          <span>담당업무</span>
          <input type="text"></input>
        </div>

        <div>
          <span>근무부서</span>
          <input type="text" />
        </div>
        <div>
          <span>직급직책</span>
          <select name="rank">
            <option value={"1"}>사원</option>
            <option value={"2"}>주임</option>
            <option value={"3"}>대리</option>
            <option value={"4"}>과장</option>
            <option value={"5"}>차장</option>
            <option value={"6"}>부장</option>
          </select>
        </div>
        <div>
          <span>필수/우대조건</span>
          <select name="rank">
            <option value={"humanities"}>전공/학과 : 인문계열</option>
            <option value={"society"}>전공/학과 : 사회계열</option>
            <option value={"educate"}>전공/학과 : 교육계열</option>
            <option value={"natural"}>전공/학과 : 자연계열</option>
            <option value={"engineering"}>전공/학과 : 공학계열</option>
            <option value={"medicine"}>전공/학과 : 의약계열</option>
            <option value={"artsports"}>전공/학과 : 예체능계열</option>
            <option value={"expreience"}>보유역량 : 해당직무 근무경험</option>
            <option value={"near"}>보유역량 : 인근거주자</option>
            <option value={"toeic"}>외국어 : TOEIC</option>
            <option value={"toefl"}>외국어 : TOEFL</option>
            <option value={"opic"}>외국어 : OPIc</option>
            <option value={"jlpt"}>외국어 : JLPT</option>
            <option value={"hsk"}>외국어 : HSK</option>
          </select>
        </div>
      </RegistPostBox>
    </>
  );
}

const HeadBox = styled.div`
  width: 66%;
  margin: auto;
  color: blue;
`;

const RegistPostBox = styled.div`
  width: 66%;
  margin: auto;
  background-color: red;

  & > div > span:first-child {
    width: 20%;
  }
`;

const titleBox = styled.div``;

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
