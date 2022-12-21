import React from "react";
import styled from "styled-components";
// import { useEffect, useState } from "react";

// useEffect : 사용하면 렌더링 될 때마다 실행됨
// useContext : 컴포넌트 재사용 어려움, prop drilling을 피하는 게 목적이라면 컴포넌트 컴포지션(합성)을 고려할 것
// useMemo : 동일한 값 최적화, 필요할 때마다 꺼내쓸 수 있음
// useReducer : 컴포넌트의 state를 변경하고 싶으면 reducer 사용. 요구하는 행위가 dispatch. 요구하는 내용이 action.
// action에 값을 담아 dispatch가 reducer에게 전달하고, 그 reducer가 상태(state) 변경.

const FirstVVIPComponent = ({ inputData }) => {
  // const DdayTimer = () => {
  //   const setDate = new Date("2023-01-01T09:00:00+0900");
  //   const now = new Date();

  //   const dis = setDate.getTime() - now.getTime();
  //   const min1 = 1000 * 60;

  //   const h = Math.floor(dis / (min1 * 60 * 24));
  //   const m = Math.floor((dis % (min1 * 60 * 24)) / (min1 * 60));
  //   const d = Math.floor((dis % (min1 * 60)) / min1);
  //   const s = Math.floor((dis % min1) / 1000);

  //   const [day, setDay] = useState(h);
  //   const [hour, setHour] = useState(m);
  //   const [minutes, setMinutes] = useState(d);
  //   const [seconds, setSeconds] = useState(s);

  //   useEffect(() => {
  //     const countdown = setInterval(() => {
  //       if (parseInt(seconds) > 0) setSeconds(parseInt(seconds) - 1);

  //       if (parseInt(seconds) === 0) {
  //         if (parseInt(minutes) === 0) {
  //           if (parseInt(hour) === 0) {
  //             if (parseInt(day) === 0) {
  //               clearInterval(countdown);
  //             } else {
  //               setDay(parseInt(day) - 1);
  //               setHour(23);
  //               setMinutes(59);
  //               setSeconds(59);
  //             }
  //           } else {
  //             setHour(parseInt(hour) - 1);
  //             setMinutes(59);
  //             setSeconds(59);
  //           }
  //         } else {
  //           setMinutes(parseInt(minutes) - 1);
  //           setSeconds(59);
  //         }
  //       }
  //     }, 1000);
  //     return () => clearInterval(countdown);
  //   }, [day, hour, minutes, seconds]);

  return (
    <>
      {inputData.map((data) =>
        data.map((data2, index) => (
          <GroupItemBox>
            <div>
              <img
                src={`http://localhost:8080/uploads/1671167479625vvip4.gif`}
                alt=""
              />
            </div>
            <div className="companyName">
              <div>{data2.CompanyName}</div>
            </div>
            <div className="recruitTitle">
              <div>{data2.recruitName}</div>
            </div>
            {/* <div className="dDay">{DdayTimer}</div> */}
          </GroupItemBox>
        ))
      )}
    </>
  );
};
// };

export default FirstVVIPComponent;

const GroupItemBox = styled.div`
  width: 23%;
  margin: 9px;
  border: 1px solid #dadada;
  & > div {
    width: 100%;
    display: flex;
    justify-content: center;
    & .companyName {
      font-size: 15px;
      font-weight: 500;
    }
    & .recruitTitle {
      font-size: 19px;
      font-weight: 500;
      margin-bottom: 20px;
    }
    & > img {
      width: 90%;
    }
    & .dDay {
      font-size: 15px;
      font-weight: 500;
    }
  }
`;
