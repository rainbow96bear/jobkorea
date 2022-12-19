import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function ManagePostComponent({ inputData, removeRecruit }) {
  console.log(inputData);
  const navigate = useNavigate();
  return (
    <>
      {inputData.map((data) =>
        data.map((data2, index) => (
          <ItemBox key={`itembox-${index}`}>
            <ItemFrame>
              <CompanyName>
                {data2.CompanyName}
                <CompanyLogo>
                  <img
                    src={`http://localhost:8080/uploads/${data2.CompanyLogo}`}
                  ></img>
                </CompanyLogo>
              </CompanyName>
              <RecruitContentBox>
                <ContentBox>
                  <span
                    onClick={() => {
                      navigate("/companymain/myPost/" + data2.Id);
                    }}
                  >
                    {data2.Name}
                  </span>
                  <Qualification>
                    <div>{data2.Exp}</div>
                    <div>{data2.Edu}</div>
                    <div>{data2.Area}</div>
                    <div>{data2.Shape}</div>
                    <div>{data2.Rank}</div>
                    <div>
                      {data2.IsPay == "회사내규에 따름" ||
                      data2.IsPay == "회사내규에 따름, 면접 후 결정" ||
                      data2.IsPay == "면접 후 결정, 회사내규에 따름" ? (
                        <>{data2.IsPay}</>
                      ) : (
                        <>
                          {data2.MinPay}~{data2.MaxPay}만원
                          {data2.PayKinds == "월급" ? (
                            <span>(월)</span>
                          ) : (
                            <></>
                          )}{" "}
                          {data2.IsPay ? <span>- {data2.IsPay}</span> : <></>}
                        </>
                      )}
                    </div>
                  </Qualification>
                  <OtherPreferential>
                    <div>{data2.Condition}</div>
                  </OtherPreferential>
                  <TaskBox>
                    <div>{data2.Task}</div>
                  </TaskBox>
                </ContentBox>
                <EndBox>
                  <BtnBox>
                    <RemoveBtn
                      onClick={() => {
                        removeRecruit(data2.Id);
                      }}
                    >
                      삭제
                    </RemoveBtn>
                  </BtnBox>
                  <NumBox>
                    {data2.Num == -1 ? (
                      <div>모집인원 제한없음</div>
                    ) : (
                      <div>모집인원 {data2.Num}명</div>
                    )}
                  </NumBox>
                </EndBox>
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
