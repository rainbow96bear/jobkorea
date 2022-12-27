import React from "react";
import styled from "styled-components";

const VVIPComponent = ({ inputData, moveTo }) => {
  return (
    <>
      {inputData.map((data) =>
        data.map((data2, index) => (
          <GroupItemBox
            key={`groupItemBox-${index}`}
            onClick={() => {
              moveTo(`recruit/${data2.id}`);
            }}>
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
    </>
  );
};

export default VVIPComponent;

const GroupItemBox = styled.div`
  min-width: 300px;
  width: 23.5%;
  margin: 7px;
  border: 1px solid #3399ff;
  & > div {
    width: 100%;
    display: flex;
    justify-content: center;
    &.companyName {
      font-size: 17px;
      font-weight: 500;
    }
    &.recruitTitle {
      font-size: 19px;
      font-weight: 700;
      margin-bottom: 20px;
    }
    img {
      width: 90%;
      height: 100px;
    }
  }
`;
