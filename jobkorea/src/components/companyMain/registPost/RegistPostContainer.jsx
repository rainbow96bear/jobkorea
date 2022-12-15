import { useState } from "react";
import RegistPostComponent from "./RegistPostComponent";
import axios from "axios";

export default function RegistPostContainer() {
  const [recruitName, setRecruitName] = useState("");
  const [recruitNum, setRecruitNum] = useState(0);
  const [isExp, setIsExp] = useState([]);
  const [myTask, setMyTask] = useState("");
  const [workDepartment, setWorkDepartment] = useState("");
  const [workRank, setWorkRank] = useState([]);
  const [condition, setCondition] = useState([]);
  const [edu, setEdu] = useState("");
  const [area, setArea] = useState([]);
  const [shape, setShape] = useState("");
  const [isPay, setIsPay] = useState([]);
  const [minPay, setMinPay] = useState("");
  const [maxPay, setMaxPay] = useState("");

  const onChecked = (checked, item) => {
    if (checked) {
      setIsExp([...isExp, item]);
    } else if (!checked) {
      setIsExp(isExp.filter((el) => el !== item));
    }
  };

  const payChecked = (checked, item) => {
    if (checked) {
      setIsPay([...isPay, item]);
    } else if (!checked) {
      setIsPay(isPay.filter((el) => el !== item));
    }
  };

  const expList = [
    {
      id: 0,
      name: "경력무관",
      data: "경력무관",
    },
    { id: 1, name: "신입", data: "신입" },
    { id: 2, name: "경력", data: "경력" },
  ];
  const payList = [
    { name: "회사 내규에 따름", data: "회사내규에 따름" },
    { name: "면접 후 결정", data: "면접 후 결정" },
  ];

  const nameHandler = (e) => {
    e.preventDefault();
    setRecruitName(e.target.value);
  };
  const recruitNumHandler = (e) => {
    e.preventDefault();
    setRecruitNum(e.target.value);
  };

  const myTaskHandler = (e) => {
    e.preventDefault();
    setMyTask(e.target.value);
  };
  const workDepartmentHandler = (e) => {
    e.preventDefault();
    setWorkDepartment(e.target.value);
  };
  const workRankHandler = (value) => {
    setWorkRank(value.map((item) => item.value));
  };
  const conditionHandler = (value) => {
    setCondition(value.map((item) => item.value));
  };

  const eduHandler = (value) => {
    setEdu(value.value);
  };

  const areaHandler = (value) => {
    setArea(value.map((item) => item.value));
  };

  const shapeHandler = (value) => {
    setShape(value.value);
  };
  const minPayHandler = (e) => {
    setMinPay(e.target.value.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
  };
  const maxPayHandler = (e) => {
    setMaxPay(e.target.value.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
  };

  const saveHandler = (e) => {
    e.preventDefault();
    let body = {
      recruitName: recruitName,
      recruitNum: recruitNum,
      isExp: isExp,
      myTask: myTask,
      workDepartment: workDepartment,
      workRank: workRank,
      condition: condition,
      edu: edu,
      area: area,
      shape: shape,
      isPay: isPay,
      minPay: minPay.toLocaleString(),
      maxPay: maxPay.toLocaleString(),
    };
    axios
      .post("http://localhost:8080/api/recruit/add", body)
      .then((res) => console.log(res));
  };

  return (
    <RegistPostComponent
      saveHandler={saveHandler}
      nameHandler={nameHandler}
      recruitNumHandler={recruitNumHandler}
      myTaskHandler={myTaskHandler}
      isExp={isExp}
      workDepartmentHandler={workDepartmentHandler}
      workRankHandler={workRankHandler}
      conditionHandler={conditionHandler}
      expList={expList}
      onChecked={onChecked}
      eduHandler={eduHandler}
      areaHandler={areaHandler}
      shapeHandler={shapeHandler}
      payList={payList}
      payChecked={payChecked}
      isPay={isPay}
      minPayHandler={minPayHandler}
      maxPayHandler={maxPayHandler}
    ></RegistPostComponent>
  );
}
