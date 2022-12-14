import SearchComponent from "./SearchComponent";
import axios from "axios";
import { useEffect, useState } from "react";

export default function SearchContainer() {
  const [inputData, setInputData] = useState([]);

  useEffect(() => {
    try {
      axios
        .post("http://localhost:8080/api/recruit/search/call")
        .then((data) => {
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
  return <SearchComponent data={inputData}></SearchComponent>;
}
