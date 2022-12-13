import ManagePostComponent from "./ManagePostComponent";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ManagePostContainer() {
  const [inputData, setInputData] = useState([]);

  // const click = async () => {
  //   console.log("ㅁ");
  //   const res = await axios.post("http://localhost:8080/api/recruit/call", {
  //     z: 1,
  //   });

  //   console.log(res.data);
  // };
  // click();
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
