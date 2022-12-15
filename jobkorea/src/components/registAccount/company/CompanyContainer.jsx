import CompanyComponent from "./CompanyComponent";

import axios from "axios";

export default function CompanyContainer() {
  const onClick = async (
    selectedOption,
    companyNumber,
    companyName,
    companyHeader,
    companyAdress,
    companyId,
    companyPw,
    companyIdname,
    companyIdnumber,
    companyIdemail
  ) => {
    const data = await axios.post(
      "http://localhost:8080/api/companyuser/regist",
      {
        selectedOption,
        companyNumber,
        companyName,
        companyHeader,
        companyAdress,
        companyId,
        companyPw,
        companyIdname,
        companyIdnumber,
        companyIdemail,
      }
    );
    console.log(data.data);
    if (data.data.status == 200) {
      alert("회원가입을 축하합니다");
    } else if (data.data == "이미 있는아이디") {
      alert("이미 가입된 아이디 입니다");
    }
  };

  return <CompanyComponent onClick={onClick} />;
}
