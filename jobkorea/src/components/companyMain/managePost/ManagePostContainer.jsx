import ManagePostComponent from "./ManagePostComponent";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ManagePostContainer() {
  const [inputData, setInputData] = useState([]);

  useEffect(() => {
    try {
      axios.post("http://localhost:8080/api/recruit/call").then((data) => {
        const _inputData = data.data.map((rowData) => ({
          Area: rowData.recruitArea,
          Num: rowData.recruitNum,
          Exp: rowData.isExp,
          Task: rowData.myTask,
          Department: rowData.workDepartment,
          Rank: rowData.workRank,
          Condition: rowData.condition,
          Edu: rowData.edu,
        }));
        setInputData([...inputData, _inputData]);
        console.log(data.data);
        console.log([...inputData, _inputData]);
      });
    } catch (e) {
      console.error(e.message);
    }
  }, []);

  return <ManagePostComponent inputData={inputData}></ManagePostComponent>;
}
