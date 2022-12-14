import axios from "axios";
import BeforeLogInComponent from "./BeforeLogInComponent";

const BeforeLogInContainer = ({ setTest }) => {
  const onClick = async (individualId, individualPw) => {
    const data = await axios.post("/api/individualuser/login", {
      id: individualId,
      pw: individualPw,
    });
    console.log(data.data);
    if (individualId === "") {
      console.log("아이디를 입력하세요.");
      alert("아이디를 입력하세요.");
    } else if (individualPw === "") {
      console.log("비밀번호를 입력하세요.");
      alert("비밀번호를 입력하세요.");
    } else {
      alert("로그인 되었습니다.");
      setTest(true);
    }
  };

  return <BeforeLogInComponent logInClick={onClick}></BeforeLogInComponent>;
};

export default BeforeLogInContainer;
