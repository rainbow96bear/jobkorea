import styled, { keyframes } from "styled-components";

export default function RecruitModalComponent({
  onClick,
  isCompanyMordal,
  recruitInfo,
  moveTo,
  day,
  setDate,
}) {
  console.log(day);
  return (
    <SideBarBox>
      <FlexBox>
        <BtnBox
          onClick={() => {
            onClick();
          }}
        >
          {isCompanyMordal ? (
            <img src="/img/next.svg" />
          ) : (
            <img src="/img/prev.svg" />
          )}
        </BtnBox>
        <InfoBox className={isCompanyMordal ? "open" : "close"}>
          <TitleBox>내가 등록한 공고</TitleBox>
          {recruitInfo.map((item, index) => (
            <OneBox
              key={`box-${index}`}
              onClick={() => {
                moveTo(`/companymain/mypost/${item.id}`);
              }}
            >
              <div className="title">{item.recruitName}</div>
              <div>
                급여 : {item.minPay}~{item.maxPay} ({item.payKinds.slice(0, 1)})
              </div>
              {item.recruitNum == -1 ? (
                <>
                  <div>지원자 수 : {item.RecruitInfo.length}명</div>
                  <div>모집 인원 : 0명</div>
                </>
              ) : (
                <>
                  <div>지원자 수 : {item.RecruitInfo.length}명</div>
                  <div>모집 인원 : {item.recruitNum}명</div>
                </>
              )}
              {day[index] == 0 ? (
                <div className="hurry">오늘 마감</div>
              ) : day[index] > 0 ? (
                <div className="dday">D-{day[index]}</div>
              ) : (
                <div className="end">모집 마감된 공고</div>
              )}
            </OneBox>
          ))}
        </InfoBox>
      </FlexBox>
    </SideBarBox>
  );
}

const TitleBox = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 900;
`;
const OneBox = styled.div`
  padding: 20px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 5px;
  cursor: pointer;

  .title {
    font-weight: 900;
  }

  .dday {
    font-weight: 800;
  }

  .hurry {
    color: orange;
    font-weight: 800;
  }
  .end {
    color: red;
    font-weight: 800;
  }
`;

const SideBarBox = styled.div`
  position: fixed;
  top: calc(25%);
  right: 0;
  overflow-y: scroll;

  height: 600px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const FlexBox = styled.div`
  display: flex;
`;

const InfoBox = styled.div`
  background-color: #cef6ec;
  transition: 1s;
  width: 250px;
  border-radius: 0 10px 10px 10px;

  &.close {
    margin-right: -250px;
  }
`;

const BtnBox = styled.div`
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: #3399ff;
  cursor: pointer;
  height: 50px;

  img {
    width: 25px;
    margin-top: 7px;
    padding-left: 3px;
    filter: invert(100%) sepia(1%) saturate(0%) hue-rotate(182deg)
      brightness(106%) contrast(100%);
  }
`;
