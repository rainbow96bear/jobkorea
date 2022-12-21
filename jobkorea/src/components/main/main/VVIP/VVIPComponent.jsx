import React from "react";
import styled from "styled-components";

const VVIPComponent = ({ inputData }) => {
  return (
    <>
      {inputData.map((data) =>
        data.map((data2, index) => (
          <GroupItemBox>
            <div>
              <img src={`http://localhost:8080/uploads/2615s00.gif`} alt="" />
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
    </>
  );
};

export default VVIPComponent;

const GroupItemBox = styled.div`
  width: 25%;
  margin: 0 0.2px;
  border: 1px solid #3399ff;
  border-left: none;
  & > div {
    width: 100%;
    display: flex;
    justify-content: center;
    &.companyName {
      font-size: 15px;
      font-weight: 500;
    }
    &.recruitTitle {
      font-size: 19px;
      font-weight: 500;
      margin-bottom: 20px;
    }
    & > img {
      width: 90%;
    }
  }
`;
