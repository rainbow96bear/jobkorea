import React from "react";
import styled from "styled-components";
import vviplogo1 from "../FirstVVIP/images/vvip1.gif";

const FirstVVIPComponent = ({ inputData }) => {
  // const에 배열 담아서 map 사용해서 컴포넌트 복붙하기

  return (
    <>
      {inputData.map((data) =>
        data.map((data2, index) => (
          <FirstVVIPBox>
            <ItemFrame>
              <div>
                <img src={vviplogo1} alt="" width="180" height="72" />
              </div>
              <VvipItem1>
                <div>{data2.Area}</div>{" "}
              </VvipItem1>
              <VvipItem2>
                <div>{data2.Department}</div>
              </VvipItem2>
            </ItemFrame>
          </FirstVVIPBox>
        ))
      )}
    </>

    // <FirstVVIPBox>
    //   <div>
    //     <div className="vviplogo1">
    //       <img src={vviplogo1} alt="" width="180" height="72" />
    //       <VvipItem1>(주)케이티엠오에스북부</VvipItem1>
    //       <VvipItem2>2022년 kt MOS북부 신입/경력 채용</VvipItem2>
    //     </div>
    //   </div>
    // </FirstVVIPBox>
  );
};

export default FirstVVIPComponent;

const FirstVVIPBox = styled.div`
  display: flex;
  & .vviplogo1 {
    border: 1px solid #dadada;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 85%;
    padding: 1px 20px 20px 20px;
    margin: 13px;
  }
`;

const VvipItem1 = styled.div`
  font-size: 15px;
  width: 100%;
  margin: auto;
  display: block;
`;

const VvipItem2 = styled.div`
  width: 100%;
  font-size: 18px;
  font-weight: 500;
`;

const ItemFrame = styled.div`
  display: flex;
`;
