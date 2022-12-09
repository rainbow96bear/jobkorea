import BeforeLogInComponent from "./BeforeLogInComponent";

const BeforeLogInContainer = () => {
  const onClick = (userId, userPw) => {
    if (userId === "") {
      console.log("아이디를 입력하세요.");
      alert("아이디를 입력하세요.");
    } else if (userPw === "") {
      console.log("비밀번호를 입력하세요.");
      alert("비밀번호를 입력하세요.");
    } else {
      alert("로그인 되었습니다.");
    }
  };
  return <BeforeLogInComponent logInClick={onClick}></BeforeLogInComponent>;
};

export default BeforeLogInContainer;
