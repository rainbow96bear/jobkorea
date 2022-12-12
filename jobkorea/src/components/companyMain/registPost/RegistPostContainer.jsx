import { useState } from "react";
import RegistPostComponent from "./RegistPostComponent";
import axios from "axios";

export default function RegistPostContainer() {
  const [recruitArea, setRecruitArea] = useState("");
  const [isExp, setIsExp] = useState("");
  const [myTask, setMyTask] = useState("");
  const [workDepartment, setWorkDepartment] = useState("");
  const [workRank, setWorkRank] = useState("");
  const [condition, setCondition] = useState("");

  const onClick = async (
    recruitArea,
    isExp,
    myTask,
    workDepartment,
    workRank,
    condition
  ) => {
    const data = await axios.post("http://localhost:8080/api/recruit/add", {
      recruitArea,
      isExp,
      myTask,
      workDepartment,
      workRank,
      condition,
    });
  };

  return <RegistPostComponent onClick={onClick}></RegistPostComponent>;
}
