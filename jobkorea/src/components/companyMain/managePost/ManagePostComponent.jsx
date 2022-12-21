import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function ManagePostComponent({ inputData, removeRecruit }) {
  console.log(inputData);
  const navigate = useNavigate();
  return (
    <>
      {inputData.map((data, index) => (
        <ItemBox key={`itembox-${index}`}>
          <ItemFrame>
            <CompanyName>
              {data.CompanyName}
              <CompanyLogo>
                <img
                  src={`http://localhost:8080/uploads/${data.CompanyLogo}`}
                ></img>
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
                <TaskBox>
                  <div>{data.Task}</div>
                </TaskBox>
              </ContentBox>
              <EndBox>
                <BtnBox>
                  <RemoveBtn
                    onClick={() => {
                      removeRecruit(data.Id);
                    }}
                  >
                    삭제
                  </RemoveBtn>
                </BtnBox>
                <NumBox>
                  {data.Num == -1 ? (
                    <div>모집인원 제한없음</div>
                  ) : (
                    <div>모집인원 {data.Num}명</div>
                  )}
                </NumBox>
              </EndBox>
            </RecruitContentBox>
          </ItemFrame>
        </ItemBox>
      ))}
    </>
  );
}

const ItemBox = styled.div`
  display: flex;
  padding: 20px;
  border: 1px solid #dfdfdf;
  width: 60%;
  margin: auto;
`;
const ItemFrame = styled.div`
  display: flex;
  flex: 1;
`;
const CompanyName = styled.div`
  flex: 2;
  border-right: 1px solid #dfdfdf;
  width: 10%;
  font-size: 17px;
  text-align: center;
  padding-right: 20px;
`;

const CompanyLogo = styled.div`
  img {
    width: 100%;
    height: 120px;
  }
`;
const RecruitContentBox = styled.div`
  flex: 9;
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  span {
    font-weight: 900;
    padding-bottom: 20px;
  }
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Qualification = styled.div`
  display: flex;
  padding-bottom: 25px;
  div {
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
`;

const RemoveBtn = styled.button`
  color: white;
  font-weight: 900;
  background-color: red;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
`;
const BtnBox = styled.div`
  min-width: 110px;
  text-align: center;
`;

const TaskBox = styled.div`
  font-size: small;
  color: #777777;
  padding-right: 15px;
`;

const NumBox = styled.div`
  text-align: center;
`;

const EndBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 150px;
`;
