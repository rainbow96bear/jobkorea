import React from "react";
import styled from "styled-components";

// useEffect : 사용하면 렌더링 될 때마다 실행됨
// useContext : 컴포넌트 재사용 어려움, prop drilling을 피하는 게 목적이라면 컴포넌트 컴포지션(합성)을 고려할 것
// useMemo : 동일한 값 최적화, 필요할 때마다 꺼내쓸 수 있음
// useReducer : 컴포넌트의 state를 변경하고 싶으면 reducer 사용. 요구하는 행위가 dispatch. 요구하는 내용이 action.
// action에 값을 담아 dispatch가 reducer에게 전달하고, 그 reducer가 상태(state) 변경.

const FirstVVIPComponent = ({ inputData }) => {
  return (
    <FirstVVIPComponentBox>
      {inputData.map((data) =>
        data.map((data2, index) => (
          <GroupItemBox key={`groupItemBox-${index}`}>
            <div>
              <img
                src={`http://localhost:8080/uploads/${data2.companylogo}`}
                alt=""
              />
            </div>
            <div className="companyName">
              <div>{data2.CompanyName}</div>
            </div>
            <div className="recruitTitle">
              <div>{data2.recruitName}</div>
            </div>
          </GroupItemBox>
        ))
      )}
    </FirstVVIPComponentBox>
  );
};

export default FirstVVIPComponent;
const FirstVVIPComponentBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const GroupItemBox = styled.div`
  min-width: 300px;
  width: 23.5%;
  margin: 7px;
  border: 1px solid #dadada;
  & > div {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  & .companyName {
    font-size: 17px;
    font-weight: 500;
  }

  & .recruitTitle {
    font-size: 19px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  img {
    width: 90%;
    height: 100px;
  }
`;
