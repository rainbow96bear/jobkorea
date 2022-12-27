import axios from "axios";
import BeforeLogInComponent from "./BeforeLogInComponent";

const BeforeLogInContainer = ({
  setTest,
  individualId,
  individualPw,
  setIndividualId,
  setIndividualPw,
  smallScreen,
  midScreen,
}) => {
  const onClick = async (individualId, individualPw) => {
    if (individualId === "") {
      console.log("아이디를 입력하세요.");
      alert("아이디를 입력하세요.");
    } else if (individualPw === "") {
      console.log("비밀번호를 입력하세요.");
      alert("비밀번호를 입력하세요.");
    } else {
      const data = await axios.post("/api/individualuser/login", {
        id: individualId,
        pw: individualPw,
      });
      console.log(data.data);
      if (data.data === "로그인 완료") {
        alert("로그인 되었습니다.");
        setTest(true);
      }
    }
  };

  return (
    <BeforeLogInComponent
      logInClick={onClick}
      individualId={individualId}
      individualPw={individualPw}
      setIndividualId={setIndividualId}
      setIndividualPw={setIndividualPw}
      smallScreen={smallScreen}
      midScreen={midScreen}></BeforeLogInComponent>
  );
};

export default BeforeLogInContainer;
