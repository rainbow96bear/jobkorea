import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function ItemComponent({ data }) {
  const navigate = useNavigate();
  return (
    <>
      {data.map((data) =>
        data.map((data2, index) => (
          <ItemBox key={`itembox-${index}`}>
            <CompanyName>{data2.CompanyName}</CompanyName>
            <RecruitContentBox>
              <span>{data2.Name}</span>
              <Qualification>
                <div>{data2.Exp}</div>
                <div>{data2.Edu}</div>
                <div>{data2.Area}</div>

                <div>{data2.Shape}</div>
                <div>{data2.Rank}</div>
              </Qualification>

              <OtherPreferential>
                <div>{data2.Condition}</div>
                <div>{data2.Task}</div>
              </OtherPreferential>
            </RecruitContentBox>
            <ApplyBtn
              onClick={() => {
                navigate("/recruit/" + data2.id);
              }}>
              상세 정보
            </ApplyBtn>
          </ItemBox>
        ))
      )}
    </>
  );
}

const ItemBox = styled.div`
  display: flex;
  padding: 20px;
  border: 1px solid #dfdfdf;
  border-top: none;
`;

const CompanyName = styled.div`
  flex: 5;
  border-right: 1px solid #dfdfdf;
`;
const RecruitContentBox = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 15px;
  flex-wrap: wrap;
  span {
    width: 80%;
    font-weight: 900;
    padding-bottom: 20px;
  }
`;
const ApplyBtn = styled.button`
  flex: 1;
  color: white;
  font-weight: 900;
  font-size: 17px;
  background-color: #3399ff;
  border: none;
  border-radius: 10px;
`;
const Qualification = styled.div`
  display: flex;
  padding-bottom: 25px;
  flex-wrap: wrap;
  width: 80%;
  div {
    font-size: small;
    color: #777777;
    padding-right: 15px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;
const OtherPreferential = styled.div`
  font-size: small;
  color: #888888;
  width: 80%;
  div {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;
