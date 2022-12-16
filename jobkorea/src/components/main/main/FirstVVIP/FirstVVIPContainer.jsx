import { useEffect, useState } from "react";
import axios from "axios";
import FirstVVIPComponent from "./FirstVVIPComponent";

export default function FirstVVIPContainer({}) {
  const [inputData, setInputData] = useState([]);

  useEffect(() => {
    try {
      axios.post("/api/recruit/vvip").then((data) => {
        const _inputData = data.data.map((rowData) => ({
          Area: rowData.recruitArea,
          Department: rowData.workDepartment,
        }));
        setInputData([...inputData, _inputData]);
        console.log(data.data);
        console.log([...inputData, _inputData]);
      });
    } catch (e) {
      console.error(e.message);
    }
  }, []);

  return <FirstVVIPComponent inputData={inputData}></FirstVVIPComponent>;
}
