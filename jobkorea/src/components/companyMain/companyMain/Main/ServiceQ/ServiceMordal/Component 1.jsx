import styled from "styled-components";

const ServiceModalComponent1 = (props) => {
  console.log(props.mdIndex);
  return (
    <ServiceModalBox>
      <div className="background"></div>
      <div className="mordal">
        <div className="title">
          1. 채용공고를 내고 싶은데 절차가 어떻게 되나요?
          <img src="img/x-button.svg" onClick={props.onClick}></img>
        </div>
        <div className="text">
          <div>
            잡코리아에 채용공고 등록을 원하시면 기업회원 ID로 로그인을 먼저
            해주세요.
          </div>
          <div className="graph">
            <div className="boader-box">기업 회원가입</div>
            <div> &gt; </div>
            <div className="boader-box">로그인</div>
            <div> &gt; </div>
            <BoarderBox>채용공고 등록양식 작성</BoarderBox>
            <div> &gt; </div>
            <BoarderBox>등록 완료</BoarderBox>
            {/* <BoarderBox width={1}>등록 완료</BoarderBox> */}
          </div>
          <div>
            ID가 없으시면 먼저 회원가입부터 진행하여 주세요. 회원가입은
            무료입니다.
          </div>
          <div>
            로그인하신 후 채용공고등록 페이지로 이동하셔서 채용공고 내용을
            입력하신 후 채용공고 등록완료 버튼을 클릭하시면 됩니다.
          </div>
          <div>
            채용공고등록에 대한 별도 등록비용은 없으며, 무료로 등록하신
            채용공고는 선택하신 업·직종 및 상세지역 등의 채용정보 리스트에서
            게재되어 구직자에게 노출됩니다. 보다 효과적으로 구직자에게 채용공고
            노출을 원하시면 차별화 된 노출위치와 노출효과를 제공하는 잡코리아
            유료 채용광고 서비스를 함께 이용하시면 좋습니다.
          </div>
        </div>
      </div>
    </ServiceModalBox>
  );
};

export default ServiceModalComponent1;

const ServiceModalBox = styled.div`
  .background {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .mordal {
    width: 800px;
    height: 420px;
    background-color: white;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    border-radius: 20px;
  }
  .title {
    display: flex;
    width: 90%;
    justify-content: space-between;
    font-size: 20px;
    padding: 30px 0;
    margin: auto;
    font-weight: 700;
  }

  .title img {
    width: 18px;
  }

  .text {
    width: 91%;
    margin: auto;
    font-size: 13px;
  }

  .text > div {
    margin-bottom: 10px;
  }

  .graph {
    display: flex;
  }

  .graph > div {
    height: 43px;
    font-weight: 600;
    display: flex;
    padding: 0 10px;
    align-items: center;

    &.boader-box {
      border: 1px solid #ebebeb;
      border-radius: 5px;
    }
  }
`;

const BoarderBox = styled.div`
  border: 1px solid #ebebeb;
  border-radius: 5px;
  ${(props) => (props.width ? " width:" + props.width * 100 + "px" : "")};
`;
