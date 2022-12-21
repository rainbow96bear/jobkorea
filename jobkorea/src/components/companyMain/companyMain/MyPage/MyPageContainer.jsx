import axios from "axios";
import { useEffect, useState } from "react";
import CompanyMyPageComponent from "./MyPageComponent";

export default function CompanyMyPageContainer() {
  const [inputData, setInputData] = useState([]);
  const [ModionClick, setModionClick] = useState(false);
  const [moneyClick, setMoneyClick] = useState(false);
  const [userName, setUserName] = useState("");
  const [userNum, setUserNum] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [numPass, setNumPass] = useState(false);
  const [emailPass, setEmailPass] = useState(false);
  const [jobMoney, setJobMoney] = useState(0);

  const isClick = () => {
    setModionClick(!ModionClick);
  };

  const addMoney = () => {
    axios
      .post("http://localhost:8080/api/companyuser/addmoney", {
        Money: +jobMoney + +inputData.CompanyMoney,
      })
      .then((data) => {
        setMoneyClick(!moneyClick);
      });
  };

  const ModifyUserInfo = () => {
    if (numPass == false || emailPass == false || userName == "")
      return alert("정확한 값을 입력해 주세요");
    axios
      .post("http://localhost:8080/api/companyuser/modify", {
        Name: userName,
        Num:
          userNum.slice(0, 3) +
          "-" +
          userNum.slice(3, 7) +
          "-" +
          userNum.slice(7, 11),
        Email: userEmail,
      })
      .then((data) => {
        console.log(data);
      });
    setModionClick(!ModionClick);
    alert("수정이 완료되었습니다.");
  };

  useEffect(() => {
    try {
      axios
        .post("http://localhost:8080/api/companyuser/dbcall")
        .then((data) => {
          const _inputData = {
            CompanyBusinessNumber: data.data.companyNumber,
            CompanyName: data.data.companyName,
            CompanyHeader: data.data.companyHeader,
            CompanyAdress: data.data.companyAdress,
            CompanyUsername: data.data.companyIdname,
            CompanyNumber: data.data.companyIdnumber,
            CompanyEmail: data.data.companyIdemail,
            CompanyLogo: data.data.companylogo,
            CompanyMoney: data.data.companyMoney,
          };
          setInputData(_inputData);
        });
    } catch (e) {
      console.error(e.message);
    }
  }, [ModionClick, moneyClick]);

  return (
    <CompanyMyPageComponent
      inputData={inputData}
      setUserName={setUserName}
      setUserNum={setUserNum}
      setUserEmail={setUserEmail}
      isClick={isClick}
      ModionClick={ModionClick}
      ModifyUserInfo={ModifyUserInfo}
      setNumPass={setNumPass}
      setEmailPass={setEmailPass}
      setJobMoney={setJobMoney}
      setMoneyClick={setMoneyClick}
      moneyClick={moneyClick}
      addMoney={addMoney}
    ></CompanyMyPageComponent>
  );
}
