import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { action } from "../../../../modules/recruit";
import AdPostComponent from "./adPostComponent";

export default function AdPostContainer({ adGrade, setAdGrade }) {
  const [companyMoney, setCompanyMoney] = useState(0);
  const [resultMoney, setResultMoney] = useState(0);
  const [day, setDay] = useState(-1);
  const [selPay, setSelPay] = useState(0);
  const [sumPay, setSumPay] = useState(0);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const dayHandler = (value) => {
    setDay(value.value);
  };

  useEffect(() => {
    axios.post("/api/companyuser/money").then((data) => {
      setCompanyMoney(data.data.companyMoney);
    });
  }, [adGrade, day]);

  const AdHandler = () => {
    let body = {
      resultMoney: resultMoney,
    };
    if (resultMoney < 0) {
      alert("공고등록시 필요한 잡머니가 부족합니다.");
      return;
    } else if (adGrade == 0) {
      alert("광고 등급을 선택해주세요");
      return;
    } else if (day < 0) {
      alert("게시 일수를 선택해주세요");
      return;
    }
    axios.post("/api/recruit/ad", body).then((res) => console.log(res));
    dispatch(action.recruitDay({ day: day }));
    navigate("/companymain/registpost");
  };

  // console.log(day);

  const firstvvipOnClick = () => {
    setAdGrade(1);
    setSelPay(1540000);
  };

  const vipOnClick = () => {
    setAdGrade(2);
    setSelPay(752400);
  };

  useEffect(() => {
    setSumPay(selPay * day);
  }, [adGrade, day]);

  useEffect(() => {
    setResultMoney(companyMoney - sumPay);
  }, [sumPay]);

  return (
    <AdPostComponent
      companyMoney={companyMoney}
      AdHandler={AdHandler}
      setResultMoney={setResultMoney}
      setAdGrade={setAdGrade}
      dayHandler={dayHandler}
      day={day}
      firstvvipOnClick={firstvvipOnClick}
      vipOnClick={vipOnClick}
      selPay={selPay}
      sumPay={sumPay}
      adGrade={adGrade}
      resultMoney={resultMoney}
    ></AdPostComponent>
  );
}
