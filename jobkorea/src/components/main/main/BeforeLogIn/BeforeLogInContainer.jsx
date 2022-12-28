import axios from "axios";
import BeforeLogInComponent from "./BeforeLogInComponent";

const BeforeLogInContainer = ({
  setTest,
  individualId,
  individualPw,
  setIndividualId,
  setIndividualPw,
  smallScreen,
  setIsClick,
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
      } else if (data.data === "비밀번호가 일치하지 않습니다.") {
        alert("비밀번호가 일치하지 않습니다.");
      } else if ((data.data = "없는 아이디 입니다.")) {
        alert("없는 아이디 입니다.");
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
      setIsClick={setIsClick}
      midScreen={midScreen}></BeforeLogInComponent>
  );
};

export default BeforeLogInContainer;
