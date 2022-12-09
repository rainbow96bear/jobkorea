import styled from "styled-components";

const EndLineComponent = () => {
  return (
    <EndLineBox>
      <div className="section">
        <div className="title">
          <div>공지사항</div>
          <div>더보기</div>
        </div>
        <ul>
          <li>
            <div>
              <div>잡코리아 역량테스트(MICT) 서비스 오픈!</div>
              <div>2022.11.28</div>
            </div>
          </li>
          <li>
            <div>
              <div>2022 TVC 런칭 이벤트 `코리아는 지금 잡코리아 중!`</div>
              <div>2022.11.24</div>
            </div>
          </li>
          <li>
            <div>
              <div>잡코리아 `이력써드립니다` 이벤트 오픈</div>
              <div>2022.11.18</div>
            </div>
          </li>
          <li>
            <div>
              <div>잡코리아 패밀리 캐릭터 `드림즈 크루` 런칭</div>
              <div>2022.10.12</div>
            </div>
          </li>
          <li>
            <div>
              <div>[주의] 이메일지원으로 위장된 랜섬웨어 피해 예방 안내</div>
              <div>2022.11.24</div>
            </div>
          </li>
        </ul>
      </div>
      <div className="section">
        <div className="title">
          <div>FAQ</div>
          <div>더보기</div>
        </div>
        <ul>
          <li>
            <div>로그인 상태 유지란?</div>
          </li>
          <li>
            <div>회원가입이 되지 않는데 어떻게 하나요?</div>
          </li>
          <li>
            <div>아이핀(I-Pin)이란 무엇인가요?</div>
          </li>
          <li>
            <div>
              아이핀을 발급받으려면 이용자가 별도의 비용을 부담해야 하나요?
            </div>
          </li>
          <li>
            <div>
              하나의 아이핀 발급으로 다른 웹사이트에서도 아이핀 서비스 이용이
              ...
            </div>
          </li>
        </ul>
      </div>
      <div className="center">
        <div className="title">고객센터</div>
        <div className="number">1588-9350</div>
        <div>
          <div className="bm">Time</div>
          <div>평일 09시 - 19시</div>
          <div className="borderright"></div>
          <div>토요일 09시 - 15시</div>
        </div>
        <div>
          <div className="bm">FAX</div>
          <div>02-565-9351</div>
        </div>
        <div>
          <div>E-mail</div>
          <div className="email">
            helpdesk@<span>jobcoding.co.kr</span>
          </div>
        </div>
      </div>
    </EndLineBox>
  );
};

export default EndLineComponent;

const EndLineBox = styled.div`
  width: 69%;
  display: flex;
  justify-content: space-evenly;
  margin: auto;

  .title {
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    font-weight: 700;
    align-items: center;
    margin-top: 30px;
  }

  .title > div:last-child {
    color: #666666;
    font-size: 13px;
    font-weight: 500;
  }

  .section {
    width: 33%;
    font-size: 13px;
    font-weight: 200;
    padding: 15px 0;
  }

  .center {
    width: 25%;
    font-size: 12px;
    padding: 15px 0;
  }

  .center > div {
    display: flex;
  }

  .center > div > div:first-child {
    font-weight: 700;
    width: 50px;
  }

  .borderright {
    border-right: 1px solid #e6e6e6;
    padding: 5px;
    margin-right: 10px;
  }

  .number {
    font-size: 40px;
    color: #3399ff;
    font-weight: 700;
    margin: 10px 0;
  }
  .bm {
    margin-bottom: 8px;
  }

  .email {
    cursor: pointer;
  }

  ul {
    padding-left: 15px;
  }

  li::marker {
    font-size: 1px;
  }

  li {
    margin: 10px 0;
  }

  li:last-child {
    margin-bottom: 40px;
  }

  li > div {
    display: flex;
    justify-content: space-between;
  }

  li > div > div:last-child {
    color: #666666;
  }
`;
