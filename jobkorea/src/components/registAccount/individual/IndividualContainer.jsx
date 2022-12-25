import IndividualComponent from "./IndividualComponent";
import axios from "axios";
import { useState } from "react";

const IndividualContainer = () => {
  const [openPostcode, setOpenPostcode] = useState(false);
  const [individualAddress, setIndividualAddress] = useState("");

  /**
   * handler
   */
  const handle = {
    // 버튼 클릭 이벤트
    clickButton: () => {
      setOpenPostcode((current) => !current);
    },

    // 주소 선택 이벤트
    selectAddress: (data) => {
      setIndividualAddress(data.address);
      console.log(`
                주소: ${data.address},
                우편번호: ${data.zonecode}
            `);
      setOpenPostcode(false);
    },
  };
  const onClick = async (
    individualName,
    individualId,
    individualPw,
    individualEmail,
    individualTel,
    individualInfoValid,
    individualAddress
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
        individualAddress,
      }
    );
    console.log(data.data);
    if (data.data.status === 200) {
      alert("회원가입을 축하합니다.");
    } else if (data.data === "아이디가 존재합니다.") {
      alert("이미 가입된 아이디입니다.");
    }
  };
  return (
    <IndividualComponent
      registClick={onClick}
      handle={handle}
      openPostcode={openPostcode}
      individualAddress={individualAddress}
    />
  );
};

export default IndividualContainer;
