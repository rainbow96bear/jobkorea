import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function ItemComponent({ data, midScreen, smallScreen }) {
  const navigate = useNavigate();
  return (
    <>
      {data.map((data) =>
        data.map((data2, index) => (
          <ItemBox key={`itembox-${index}`}>
            <ItemFrame>
              <CompanyName>{data2.CompanyName}</CompanyName>
              <RecruitContentBox>
                <ContentBox>
                  <span>{data2.Name}</span>
                  <Qualification>
                    <div>{data2.Exp}</div>
                    {smallScreen && <div>{data2.Edu}</div>}
                    <div>{data2.Area}</div>
                    {smallScreen && (
                      <>
                        <div>{data2.Shape}</div>
                        <div>{data2.Rank}</div>
                      </>
                    )}
                  </Qualification>
                  {midScreen && (
                    <OtherPreferential>
                      <div>{data2.Condition}</div>
                      <div>{data2.Task}</div>
                    </OtherPreferential>
                  )}
                </ContentBox>

                <ApplyBtn
                  onClick={() => {
                    navigate("/recruit/" + data2.id);
                  }}
                >
                  상세 정보
                </ApplyBtn>
              </RecruitContentBox>
            </ItemFrame>
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
const ItemFrame = styled.div`
  display: flex;
  flex: 1;
`;
const CompanyName = styled.div`
  flex: 2;
  border-right: 1px solid #dfdfdf;
  width: 200px;
`;
const RecruitContentBox = styled.div`
  flex: 9;
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  flex-wrap: wrap;
  span {
    font-weight: 900;
    padding-bottom: 20px;
  }
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 12;
`;

const Qualification = styled.div`
  display: flex;
  padding-bottom: 25px;
  flex-wrap: wrap;
  div {
    font-size: small;
    color: #777777;
    padding-right: 15px;
  }
`;
const OtherPreferential = styled.div`
  font-size: small;
  color: #888888;
`;
const ApplyBtn = styled.button`
  flex: 1;
  color: white;
  font-weight: 900;
  background-color: #3399ff;
  border: none;
  padding: 10px 15px;
`;
