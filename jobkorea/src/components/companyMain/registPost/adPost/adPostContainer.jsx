import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdPostComponent from "./adPostComponent";

export default function AdPostContainer({ setAdGrade }) {
  const [vipPay, setVipPay] = useState(0);
  const [companyMoney, setCompanyMoney] = useState(0);
  const [resultMoney, setResultMoney] = useState(0);
  const [vipcss, setVipcss] = useState(false);
  const [firstvipcss, setFirstVipcss] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .post("http://localhost:8080/api/companyuser/money", 1)
      .then((data) => {
        setCompanyMoney(data.data.companyMoney);
      });
  }, []);

  const AdHandler = (e) => {
    e.preventDefault();
    if (resultMoney < 0) {
      alert("공고등록시 필요한 돈이 부족합니다.");
      navigate("/companymain");
      return;
    }
    let body = {
      resultMoney: resultMoney,
    };
    axios
      .post("http://localhost:8080/api/recruit/ad", body)
      .then((res) => console.log(res));

    navigate("/companymain/registpost");
  };

  return (
    <AdPostComponent
      setVipPay={setVipPay}
      vipPay={vipPay}
      companyMoney={companyMoney}
      AdHandler={AdHandler}
      setResultMoney={setResultMoney}
      setAdGrade={setAdGrade}
      setVipcss={setVipcss}
      setFirstVipcss={setFirstVipcss}
    ></AdPostComponent>
  );
}
