import IndividualComponent from "./IndividualComponent";
import axios from "axios";

const IndividualContainer = () => {
  const onClick = async (
    individualName,
    individualId,
    individualPw,
    individualEmail,
    individualTel,
    individualInfoValid
  ) => {
    const data = await axios.post(
      "http://localhost:8080/api/individualuser/regist",
      {
        individualName,
        individualId,
        individualPw,
        individualEmail,
        individualTel,
        individualInfoValid,
      }
    );
    console.log(data.data);
    if (data.data.status === 200) {
      alert("회원가입을 축하합니다.");
    } else if (data.data === "아이디가 존재합니다.") {
      alert("이미 가입된 아이디입니다.");
    }
  };
  return <IndividualComponent registClick={onClick} />;
};

export default IndividualContainer;
