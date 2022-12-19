import { useState } from "react";
import RegistPostComponent from "./RegistPostComponent";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function RegistPostContainer() {
  const [recruitName, setRecruitName] = useState("");
  const [recruitNum, setRecruitNum] = useState(-1);
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
  const [isLimit, setisLimit] = useState("");
  const [payKinds, setPayKinds] = useState("");
  const navigate = useNavigate();

  const moveTo = (where) => {};

  const payKindsHandler = (value) => {
    setPayKinds(value.value);
  };

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

  const limitChecked = (checked) => {
    if (checked) {
      setisLimit(true);
    } else if (!checked) {
      setisLimit(false);
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
    { name: "면접 후 결정", data: "면접 후 결정" },
    { name: "회사 내규에 따름", data: "회사내규에 따름" },
  ];
  const limitList = [{ name: "제한 있음", data: "제한 있음" }];

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
    if (
      recruitName == "" ||
      isExp == "" ||
      myTask == "" ||
      edu == "" ||
      area == "" ||
      shape == "" ||
      (payKinds !== "" && (minPay == "" || maxPay == "")) ||
      (isPay == "" && (payKinds == "" || minPay == "" || maxPay == ""))
    ) {
      alert("필요한 값을 모두 입력해주세요");
      return;
    }
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
      isLimit: isLimit,
      payKinds: payKinds,
    };
    axios
      .post("http://localhost:8080/api/recruit/add", body)
      .then((res) => console.log(res));
    alert("등록되었습니다");
    navigate("/companymain/managepost");
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
      isLimit={isLimit}
      limitList={limitList}
      limitChecked={limitChecked}
      payKindsHandler={payKindsHandler}
    ></RegistPostComponent>
  );
}
