import styled from "styled-components";

const MypageComponent = () => {
  return (
    <MypageBox>
      <listBox>
        <div>마이페이지지롱</div>
      </listBox>
    </MypageBox>
  );
};

export default MypageComponent;

const MypageBox = styled.div`
  width: 60%;
  background-color: #f2f4f7;
  display: flex;
  justify-content: center;
  padding: 1% 0;
  margin: 0 20%;
`;
