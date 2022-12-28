import SearchKeyWordComponent from "./SearchKeyWordComponent";
import axios from "axios";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate, useParams } from "react-router-dom";
export default function SearchKeyWordContainer() {
  const [inputData, setInputData] = useState([]);
  const params = useParams();

  useEffect(() => {
    console.log(params.keyWord);
    try {
      axios
        .post("/api/recruit/keyWord", {
          keyWord: params.keyWord,
        })
        .then((data) => {
          console.log(data);
          console.log(data.status);
          const _inputData = data.data.data.map((rowData) => ({
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
          setInputData([_inputData]);
        });
    } catch (e) {
      console.error(e.message);
    }
  }, [params.keyWord]);
  return <SearchKeyWordComponent data={inputData}></SearchKeyWordComponent>;
}
