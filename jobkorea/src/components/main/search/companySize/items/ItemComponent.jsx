import styled from "styled-components";
export default function ItemComponent() {
  return (
    <ItemBox>
      <ItemFrame>
        <CompanyName>회사이름</CompanyName>
        <RecruitContentBox>
          <ContentBox>
            <span>
              (주)창의와탐구 본사 공개 채용 - 사업기획팀원, 수학연구원
            </span>
            <Qualification>
              <div>경력</div>
              <div>학력</div>
              <div>지역</div>
              <div>고용형태</div>
              <div>직급</div>
            </Qualification>
            <OtherPreferential>
              병역특례, 교재관리, 교재개발, 수학교재 개발, 교사, 교수설계,
              교재제작, 마케팅, 마케팅기획
            </OtherPreferential>
          </ContentBox>
          <div>
            <ApplyBtn>즉시지원</ApplyBtn>
            <div></div>
          </div>
        </RecruitContentBox>
      </ItemFrame>
    </ItemBox>
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
`;
const ApplyBtn = styled.button`
  color: white;
  font-weight: 900;
  background-color: #ff7200;
  border: none;
  padding: 10px 15px;
`;
