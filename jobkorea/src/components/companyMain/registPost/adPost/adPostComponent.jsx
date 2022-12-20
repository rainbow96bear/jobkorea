import axios from "axios";
import styled from "styled-components";

export default function AdPostComponent({
  setVipPay,
  vipPay,
  companyMoney,
  AdHandler,
  setResultMoney,
  setAdGrade,
  setVipcss,
  setFirstVipcss,
}) {
  return (
    <BackgroundBox>
      <HeadBox>채용광고 상품</HeadBox>
      <AdBox>
        <AdBtnBox>
          <div
            onClick={() => {
              setVipPay(1540000);
              setResultMoney(companyMoney - 1540000);
              setAdGrade(1);
              setFirstVipcss(true);
              setVipcss(false);
            }}
          >
            first vvip
          </div>
          <div
            onClick={() => {
              setVipPay(752400);
              setResultMoney(companyMoney - 752400);
              setAdGrade(2);
              setFirstVipcss(false);
              setVipcss(true);
            }}
          >
            vip
          </div>
        </AdBtnBox>
        <AdInfoBox>
          <WillPayBox>결제 정보</WillPayBox>
          <PayInfoBox>
            <ProductBox>
              <div>내가 보유한 금액</div>
              <div>{companyMoney}원</div>
            </ProductBox>
            <ProductBox>
              <div>상품 금액</div>
              <div>{vipPay}원</div>
            </ProductBox>
            <LineBox>
              <hr />
            </LineBox>
            <ProductBox>
              <div>결제 후 남은 금액</div>
              <div>{companyMoney - vipPay}원</div>
            </ProductBox>
          </PayInfoBox>
        </AdInfoBox>
      </AdBox>
      <div className="nextBtn" onClick={AdHandler}>
        광고등록
      </div>
    </BackgroundBox>
  );
}

const PayInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const WillPayBox = styled.div`
  font-size: 22px;
  font-weight: 900;
`;
const ProductBox = styled.div`
  display: flex;
  width: 30%;

  div {
    width: 50%;
  }

  div:first-child {
    text-align: left;
  }

  div:last-child {
    text-align: right;
  }
`;

const AdInfoBox = styled.div`
  text-align: center;
  margin-top: 20px;
`;
const AdBtnBox = styled.div`
  display: flex;
  justify-content: center;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 12%;
    height: 60px;
    border: 1px solid #e1e3e5;
    border-radius: 10px;
    margin: 0 10px;
  }
  div:hover {
    border: 1px solid black;
  }
`;

const BackgroundBox = styled.div`
  background-color: #f2f6f9;
  padding-bottom: 50px;

  .nextBtn {
    width: 200px;
    height: 50px;
    margin: auto;
    margin-top: 50px;
    background-color: skyblue;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    cursor: pointer;
  }
`;

const LineBox = styled.div`
  width: 80%;
`;

const HeadBox = styled.div`
  width: 65%;
  margin: auto;
  color: #323743;
  font-size: 30px;
  font-weight: 800;
  padding: 30px;
`;

const AdBox = styled.div`
  width: 66%;
  margin: 20px auto;
  border-radius: 20px;
  background-color: white;
  padding: 30px 0;
`;
