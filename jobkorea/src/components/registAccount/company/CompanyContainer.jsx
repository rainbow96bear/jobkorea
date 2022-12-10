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
      alert("회원가입 성공");
    } else if (data.data.status == 401) {
      alert("이미 가입된 아이디");
    }
  };

  return <CompanyComponent onClick={onClick} />;
}
