import { useState } from "react";
import RegistPostComponent from "./RegistPostComponent";
import axios from "axios";

export default function RegistPostContainer() {
  const [recruitArea, setRecruitArea] = useState("");
  const [recruitNum, setRecruitNum] = useState("0");
  const [isExp, setIsExp] = useState([]);
  const [myTask, setMyTask] = useState("");
  const [workDepartment, setWorkDepartment] = useState("");
  const [workRank, setWorkRank] = useState([]);
  const [condition, setCondition] = useState([]);
  const [edu, setEdu] = useState("");

  const onChecked = (checked, item) => {
    if (checked) {
      setIsExp([...isExp, item]);
      console.log(isExp);
    } else if (!checked) {
      setIsExp(isExp.filter((el) => el !== item));
      console.log(isExp);
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

  const recruitAreaHandler = (e) => {
    e.preventDefault();
    setRecruitArea(e.target.value);
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
    console.log(value);
    setEdu(value.value);
  };

  const saveHandler = (e) => {
    e.preventDefault();
    let body = {
      recruitArea: recruitArea,
      recruitNum: recruitNum,
      isExp: isExp,
      myTask: myTask,
      workDepartment: workDepartment,
      workRank: workRank,
      condition: condition,
      edu: edu,
    };
    axios
      .post("http://localhost:8080/api/recruit/add", body)
      .then((res) => console.log(res));
  };

  return (
    <RegistPostComponent
      saveHandler={saveHandler}
      recruitAreaHandler={recruitAreaHandler}
      recruitNumHandler={recruitNumHandler}
      myTaskHandler={myTaskHandler}
      isExp={isExp}
      workDepartmentHandler={workDepartmentHandler}
      workRankHandler={workRankHandler}
      conditionHandler={conditionHandler}
      expList={expList}
      onChecked={onChecked}
      eduHandler={eduHandler}
    ></RegistPostComponent>
  );
}
