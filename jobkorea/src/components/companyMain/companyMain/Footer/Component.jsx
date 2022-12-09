import styled from "styled-components";

const FooterComponent = () => {
  return (
    <FooterBox>
      <div>
        <div>
          <img src="/img/joblogo.png" />
        </div>
        <div>
          <div>
            <div className="upflex">
              <div>회사소개</div>
              <div>광고문의</div>
              <div>제휴문의</div>
              <div>이용약관</div>
              <div>개인정보처리방침</div>
              <div>위치기반서비스이용약관</div>
            </div>
            <div className="upflex2">
              <div>공지사항</div>
              <div>[이벤트]12월 전체회원 이벤트, 이직준비 가...</div>
              <div>22.12.01</div>
            </div>
          </div>
          <div>
            <div className="downfooter">
              <div>
                고객센터 : 1588-9350 (평일 09:00 ~ 19:00 토요일 09:00 ~ 15:00)
              </div>
              <div></div>
              <div>FAX : 02-565-9351</div>
              <div></div>
              <div className="email">
                Email :<div>helpdesk@jobkorea.co.kr</div>
              </div>
            </div>
            <div className="copyright">
              Copyright ⓒ <span>JOBKOREA</span> Corp. All Right Reserved.
            </div>
          </div>
        </div>
      </div>
    </FooterBox>
  );
};

export default FooterComponent;

const FooterBox = styled.div`
  border-top: 2px solid gray;

  & > div {
    width: 66%;
    margin: auto;
    display: flex;
    padding: 30px;
    justify-content: space-between;
  }

  & > div > div > div {
    display: flex;
    padding: 0 0 25px 20px;
    justify-content: space-between;
  }

  & > div > div > div > div {
    display: flex;
  }

  & > div > div > div:first-child {
    font-size: 14px;
    border-bottom: 1px solid #efefef;
  }

  & > div > div > div:last-child {
    font-size: 13px;
    margin-top: 25px;
    color: #888888;
  }

  .downfooter > div:nth-child(2),
  .downfooter > div:nth-child(4) {
    border-right: 1px solid #cccccc;
    margin: 0 5px;
    max-height: 11px;
    margin-top: 4px;
  }

  .downfooter > div:last-child {
    border-right: none;
  }

  .upflex > div {
    margin-right: 20px;
    cursor: pointer;
  }

  .upflex > div:nth-child(5),
  div:nth-child(6) {
    font-weight: 700;
  }

  .upflex2 {
    margin-left: 20px;
  }

  .upflex2 > div {
    margin-right: 10px;
    cursor: pointer;
  }

  .upflex2 > div:first-child {
    font-weight: 700;
  }

  .upflex2 > div:last-child {
    color: #888888;
    margin-right: 0;
    cursor: auto;
  }
  img {
    margin-right: 80px;
  }
  .email {
    display: flex;
  }
  .email > div {
    cursor: pointer;
    margin-left: 3px;
  }

  .copyright span {
    padding: 0 3px;
    font-weight: 700;
    cursor: pointer;
  }

  .copyright {
    font-size: 11px;
  }
`;
