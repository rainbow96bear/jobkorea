import CompanyComponent from "./CompanyComponent";
import { useMediaQuery } from "react-responsive";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function CompanyContainer() {
  const navigate = useNavigate();
  const midScreen = useMediaQuery({ minWidth: 600 });
  const [openPostcode, setOpenPostcode] = useState(false);
  const [companyAddress, setCompanyAddress] = useState("");

  const handle = {
    // 버튼 클릭 이벤트
    clickButton: () => {
      setOpenPostcode((current) => !current);
    },

    // 주소 선택 이벤트
    selectAddress: (data) => {
      setCompanyAddress(data.address);
      console.log(`
                주소: ${data.address},
                우편번호: ${data.zonecode}
            `);
      setOpenPostcode(false);
    },
  };

  const onClick = async (
    selectedOption,
    companyNumber,
    companyName,
    companyHeader,
    companyAddress,
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
    formData.append("companyAddress", companyAddress);
    formData.append("companyId", companyId);
    formData.append("companyPw", companyPw);
    formData.append("companyIdname", companyIdname);
    formData.append("companyIdnumber", companyIdnumber);
    formData.append("companyIdemail", companyIdemail);
    formData.append("companyLogoUpload", companyLogoUpload);
    formData.append("companyMoney", "10000000");
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

  return (
    <CompanyComponent
      onClick={onClick}
      midScreen={midScreen}
      handle={handle}
      companyAddress={companyAddress}
      openPostcode={openPostcode}
    />
  );
}
