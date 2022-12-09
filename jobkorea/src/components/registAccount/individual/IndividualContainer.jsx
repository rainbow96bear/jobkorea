import IndividualComponent from "./IndividualComponent";
import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { action } from "../../userInfo";
// import store from "../../store";

const IndividualContainer = () => {
  const [userInfo, setUserInfo] = useState([]);
  // const dispatch = useDispatch();

  // function regist(userName, userId, userPw) {
  //   dispatch(action.registLog(userName, userId, userPw));
  // }

  const onClick = (userName, userId, userPw, userEmail, userTel) => {
    if (userName === "") {
      console.log("이름을 입력하세요.");
      alert("이름을 입력하세요.");
    } else if (userId === "") {
      console.log("아이디를 입력하세요.");
      alert("아이디를 입력하세요.");
    } else if (userPw === "") {
      console.log("비밀번호를 입력하세요.");
      alert("비밀번호를 입력하세요.");
    } else if (userPw.length < 8) {
      alert("비밀번호를 8자 이상으로 입력하세요.");
    } else if (userEmail === "") {
      console.log("이메일 주소를 입력하세요.");
      alert("이메일 주소를 입력하세요.");
    } else if (userTel === "") {
      console.log("휴대폰번호를 입력하세요.");
      alert("휴대폰번호를 입력하세요.");
    } else {
      // regist(userName, userId, userPw);
      setUserInfo([...userInfo, { id: userId, pw: userPw }]);
      // 배열(userInfo)에 정보가 저장되게 하기
      // id, pw는 키, userId, userPw는 값
      // 매개변수로 컴포넌트에서 입력한 value 사용
      console.log(userInfo);
      alert("가입 되었습니다.");
    }
  };

  return <IndividualComponent registClick={onClick}></IndividualComponent>;
};

export default IndividualContainer;
