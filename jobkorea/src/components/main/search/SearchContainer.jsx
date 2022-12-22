import SearchComponent from "./SearchComponent";
import axios from "axios";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function SearchContainer() {
  const [inputData, setInputData] = useState([]);
  const midScreen = useMediaQuery({ minWidth: 1200 });

  useEffect(() => {
    try {
      axios
        .post("http://localhost:8080/api/recruit/search/call")
        .then((data) => {
          const _inputData = data.data.map((rowData) => ({
            id: rowData.id,
            Name: rowData.recruitName,
            Num: rowData.recruitNum,
            Exp: rowData.isExp,
            Task: rowData.myTask,
            Department: rowData.workDepartment,
            Rank: rowData.workRank,
            Condition: rowData.condition,
            Edu: rowData.edu,
            Area: rowData.area,
            Shape: rowData.shape,
            IsPay: rowData.isPay,
            MinPay: rowData.minPay,
            MaxPay: rowData.maxPay,
            CompanyName: rowData.Companyuser_Info.companyName,
          }));
          setInputData([...inputData, _inputData]);
          console.log(data.data);
          console.log([...inputData, _inputData]);
        });
    } catch (e) {
      console.error(e.message);
    }
  }, []);
  return (
    <SearchComponent data={inputData} midScreen={midScreen}></SearchComponent>
  );
}
