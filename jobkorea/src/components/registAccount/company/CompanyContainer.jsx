import CompanyComponent from "./CompanyComponent";

import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CompanyContainer() {
  const navigate = useNavigate();

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
    companyIdemail,
    companyLogoUpload
  ) => {
    let formData = new FormData();

    formData.append("selectedOption", selectedOption);
    formData.append("companyNumber", companyNumber);
    formData.append("companyName", companyName);
    formData.append("companyHeader", companyHeader);
    formData.append("companyAdress", companyAdress);
    formData.append("companyId", companyId);
    formData.append("companyPw", companyPw);
    formData.append("companyIdname", companyIdname);
    formData.append("companyIdnumber", companyIdnumber);
    formData.append("companyIdemail", companyIdemail);
    formData.append("companyLogoUpload", companyLogoUpload);
    console.log(companyLogoUpload);
    const data = await axios.post(
      "http://localhost:8080/api/companyuser/regist",
      formData
    );

    console.log(data.data);
    if (data.data.status == 200) {
      alert("회원가입을 축하합니다");
      navigate("/companymain");
    } else if (data.data == "이미 있는아이디") {
      alert("이미 가입된 아이디 입니다");
    }
  };

  return <CompanyComponent onClick={onClick} />;
}
