import styled from "styled-components";

const MordalComponent = ({ onClick }) => {
  return (
    <MordalBox>
      <div>
        <div>기업 로그인이 필요한 서비스입니다.</div>
        <div onClick={onClick}>
          <img src="/img/x-button.svg"></img>
        </div>
      </div>
      <div className="flex">
        <div>
          <div>
            <input type={"text"} placeholder={"아이디"} />
          </div>
          <div>
            <input type={"password"} placeholder={"비밀번호"} />
          </div>
        </div>
        <button className="login">로그인</button>
      </div>
      <div className="regist">
        <div>회원가입</div>
        <div>신규가입 3종 쿠폰 제공!</div>
      </div>
    </MordalBox>
  );
};

export default MordalComponent;

const MordalBox = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 400px;
  width: 550px;
  border: 3px solid #565d79;
  background-color: white;

  img {
    width: 20px;
    cursor: pointer;
  }

  .regist > div:first-child {
    margin-top: 6px;
    color: #3399ff;
    font-weight: 600;
  }
  .regist > div:last-child {
    color: #666666;
    font-size: 12px;
  }

  .regist {
    width: 400px;
    height: 60px;
    border: 1px solid #3399ff;
    margin-top: 30px;
    margin-left: 70px;
    text-align: center;
    cursor: pointer;
  }

  .login {
    width: 100px;
    height: 100px;
    background-color: #3399ff;
    color: white;
    border: none;
  }
  input {
    width: 280px;
    height: 28px;
    border: solid 1px #e1e1e2;
    padding: 10px;
  }

  & > div:first-child {
    height: 65px;
    border-bottom: 1px solid #e0e3ea;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    padding: 20px;
  }

  & > div:first-child > div:last-child {
    margin-bottom: 20px;
  }

  .flex {
    display: flex;
    padding: 60px 0 0 70px;
  }
`;
