import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function ManagePostComponent({ inputData, removeRecruit }) {
  console.log(inputData);
  const navigate = useNavigate();
  return (
    <ManagePostComponentBox>
      <ManagePostComponentFrame>
        {inputData.map((data, index) => (
          <ItemBox key={`itembox-${index}`}>
            <CompanyName>
              {data.CompanyName}
              <CompanyLogo>
                {data.CompanyLogo && (
                  <img src={`/uploads/${data.CompanyLogo}`}></img>
                )}
              </CompanyLogo>
            </CompanyName>
            <RecruitContentBox>
              <ContentBox>
                <span
                  onClick={() => {
                    navigate("/companymain/myPost/" + data.Id);
                  }}
                >
                  {data.Name}
                </span>
                <Qualification>
                  <div>{data.Exp}</div>
                  <div>{data.Edu}</div>
                  <div>{data.Area}</div>
                  <div>{data.Shape}</div>
                  <div>{data.Rank}</div>
                  <div>
                    {data.IsPay == "회사내규에 따름" ||
                    data.IsPay == "회사내규에 따름, 면접 후 결정" ||
                    data.IsPay == "면접 후 결정, 회사내규에 따름" ? (
                      <>{data.IsPay}</>
                    ) : (
                      <>
                        {data.MinPay}~{data.MaxPay}만원
                        {data.PayKinds == "월급" ? (
                          <span>(월)</span>
                        ) : (
                          <></>
                        )}{" "}
                        {data.IsPay ? <span>- {data.IsPay}</span> : <></>}
                      </>
                    )}
                  </div>
                </Qualification>
                <OtherPreferential>
                  {data.Condition == "" ? (
                    <div>우대사항 없음</div>
                  ) : (
                    <div>{data.Condition}</div>
                  )}
                </OtherPreferential>
                <TaskBox>{data.Task}</TaskBox>
              </ContentBox>
            </RecruitContentBox>
            <EndBox>
              <RemoveBtn
                onClick={() => {
                  removeRecruit(data.Id);
                }}
              >
                삭제
              </RemoveBtn>
              <NumBox>
                <div>모집인원</div>
                {data.Num == -1 ? <div>제한없음</div> : <div>{data.Num}명</div>}
              </NumBox>
            </EndBox>
          </ItemBox>
        ))}
      </ManagePostComponentFrame>
    </ManagePostComponentBox>
  );
}
const ManagePostComponentBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const ManagePostComponentFrame = styled.div`
  width: 100%;
  max-width: 1240px;
`;
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
  padding-left: 15px;
  span {
    width: 50%;
    font-weight: 900;
    padding-bottom: 20px;
  }
`;
const EndBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;
const CompanyLogo = styled.div`
  img {
    width: 100%;
    height: 120px;
  }
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Qualification = styled.div`
  display: flex;
  // flex-direction: column;
  padding-bottom: 25px;
  width: 80%;
  div {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: small;
    color: #777777;
    padding-right: 15px;
  }
`;
const OtherPreferential = styled.div`
  font-size: small;
  color: #888888;
  max-width: 800px;
  padding-bottom: 20px;
  width: 80%;
  div {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;

const RemoveBtn = styled.button`
  color: white;
  font-weight: 900;
  background-color: red;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  min-width: 60px;
  text-align: center;
`;

const TaskBox = styled.div`
  font-size: small;
  color: #777777;
  padding-right: 15px;
  width: 80%;
`;

const NumBox = styled.div`
  font-size: 12px;
  text-align: center;
`;
