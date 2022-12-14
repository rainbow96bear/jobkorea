import styled from "styled-components";

export default function CompanyMyPageComponent({
  inputData,
  ModionClick,
  setUserName,
  setUserNum,
  setUserEmail,
  isClick,
  ModifyUserInfo,
  setNumPass,
  setEmailPass,
  setJobMoney,
  addMoney,
}) {
  console.log(inputData);
  return (
    <BackgroundBox>
      <TitleBox>마이페이지</TitleBox>
      <MyPagewrap>
        <MypageBox>
          <MypageLeftBox>
            <TitleBox>기업 정보</TitleBox>
            <InfoBox>
              <div>회사 로고</div>
              <ImgBackground>
                <img src={`/uploads/${inputData.CompanyLogo}`}></img>
              </ImgBackground>
            </InfoBox>
            <InfoBox>
              <div>사업자 번호</div>
              <div>{inputData.CompanyBusinessNumber}</div>
            </InfoBox>
            <InfoBox>
              <div>회사 이름</div>
              <div>{inputData.CompanyName}</div>
            </InfoBox>
            <InfoBox>
              <div>회사 대표 이름</div>
              <div>{inputData.CompanyHeader}</div>
            </InfoBox>

            <InfoBox>
              <div>회사 주소</div>
              <div>{inputData.CompanyAddress}</div>
            </InfoBox>
          </MypageLeftBox>
          <MypageLine></MypageLine>
          <MypageRightBox>
            <TitleBox>가입자 정보</TitleBox>

            {ModionClick ? (
              <>
                <InfoBox>
                  <div>가입자 이름</div>
                  <input
                    type="text"
                    onInput={(e) => {
                      setUserName(e.target.value);
                    }}
                  ></input>
                </InfoBox>
                <InfoBox>
                  <div>가입자 번호</div>
                  <input
                    type="text"
                    onInput={(e) => {
                      setUserNum(e.target.value);
                      const phoneRegExp =
                        /^01([0|1|6|7|8|9])([0-9]{3,4})([0-9]{4})$/;
                      if (!phoneRegExp.test(e.target.value)) {
                        setNumPass(false);
                      } else {
                        setNumPass(true);
                      }
                    }}
                    placeholder="'-' 를 제외한 숫자만 입력"
                  ></input>
                </InfoBox>
                <InfoBox>
                  <div>가입자 이메일</div>
                  <input
                    type="text"
                    onInput={(e) => {
                      setUserEmail(e.target.value);

                      const emailRegExp =
                        /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
                      if (!emailRegExp.test(e.target.value)) {
                        setEmailPass(false);
                      } else {
                        setEmailPass(true);
                      }
                    }}
                  ></input>
                </InfoBox>
                <BtnBox>
                  <div onClick={ModifyUserInfo}>수정하기</div>
                  <div onClick={isClick}>취소하기</div>
                </BtnBox>
              </>
            ) : (
              <>
                <InfoBox>
                  <div>가입자 이름</div>
                  <div>{inputData.CompanyUsername}</div>
                </InfoBox>
                <InfoBox>
                  <div>가입자 번호</div>
                  <div>{inputData.CompanyNumber}</div>
                </InfoBox>
                <InfoBox>
                  <div>가입자 이메일</div>
                  <div>{inputData.CompanyEmail}</div>
                </InfoBox>

                <BtnBox>
                  <div onClick={isClick}>수정하기</div>
                </BtnBox>
              </>
            )}
            <LineBox></LineBox>
            <InfoBox>
              <div>보유 잡머니</div>
              <div>{(+inputData.CompanyMoney).toLocaleString()} 원</div>
            </InfoBox>
            <InfoBox>
              <div>충전 금액</div>
              <input
                type="number"
                min={1000}
                onInput={(e) => {
                  setJobMoney(e.target.value);
                  if (e.target.value.length > e.target.maxLength)
                    e.target.value = e.target.value.slice(
                      0,
                      e.target.maxLength
                    );
                  e.target.value = e.target.value
                    .replace(/[^0-9.]/g, "")
                    .replace(/(\..*)\./g, "$1");
                }}
                maxLength={9}
              />

              <div
                onClick={() => {
                  addMoney();
                }}
              >
                충전
              </div>
            </InfoBox>
          </MypageRightBox>
        </MypageBox>
      </MyPagewrap>
    </BackgroundBox>
  );
}

const LineBox = styled.div`
  margin: 30px auto;
  width: 80%;
  height: 5px;
  background-color: #f2f4f7;
  border-radius: 10px;
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: center;

  div {
    width: 100px;
    height: 40px;
    border-radius: 10px;
    background-color: skyblue;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
  }

  & > div:nth-child(2) {
    background-color: gray;
  }
`;
const InfoBox = styled.div`
  display: flex;
  width: 70%;
  margin: 20px auto;

  div {
    display: flex;
    align-items: center;
  }

  & > div:first-child {
    font-size: 20px;
    font-weight: 800;
    width: 180px;
  }

  & > div:nth-child(2) {
    font-size: 16px;
    display: flex;
    align-items: center;
  }

  & > div:nth-child(3) {
    font-size: 12px;
    margin-left: 20px;
    border: 1px solid blue;
    background-color: yellow;
    border-radius: 10px;
  }

  @media (max-width: 1300px) {
    width: 100%;
  }
`;

const BackgroundBox = styled.div`
  background-color: #f2f4f7;
  padding: 50px 0;
`;

const MypageBox = styled.div`
  display: flex;
  width: 100%;
  background-color: white;
  border-radius: 20px;
  padding: 50px 0;

  @media (max-width: 1300px) {
    flex-direction: column;
    align-items: center;
  }
`;

const MyPagewrap = styled.div`
  max-width: 1280px;
  margin: auto;
`;

const MypageLeftBox = styled.div`
  width: 49.5%;
  @media (max-width: 1300px) {
    width: 80%;
  }

  @media (max-width: 600px) {
    & > div:nth-child(2) {
      flex-direction: column;
      align-items: center;
    }

    & > div:nth-child(2) > div:first-child {
      justify-content: center;
    }
  }
`;

const MypageLine = styled.div`
  width: 1%;
  background-color: #f2f4f7;
  border-radius: 20px;
  margin: 30px 0;
`;

const MypageRightBox = styled.div`
  width: 49.5%;

  @media (max-width: 1300px) {
    width: 80%;
  }
`;

const TitleBox = styled.div`
  font-size: 22px;
  font-weight: 900;
  text-align: center;
  margin-bottom: 30px;
`;

const ImgBackground = styled.div`
  background-color: #f2f4f7;
  width: 220px;
  padding: 30px;
  border-radius: 10px;
  img {
    width: 100%;
  }
`;
