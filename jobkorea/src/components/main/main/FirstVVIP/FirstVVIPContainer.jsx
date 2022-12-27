import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FirstVVIPComponent from "./FirstVVIPComponent";

export default function FirstVVIPContainer({}) {
  const [inputData, setInputData] = useState([]);
  const navigate = useNavigate();
  const moveTo = (where) => {
    navigate(`/${where}`);
  };
  useEffect(() => {
    try {
      axios.post("/api/recruit/firstvvip").then((data) => {
        const _inputData = data.data.map((rowData) => ({
          companylogo: rowData.Companyuser_Info.companylogo,
          CompanyName: rowData.Companyuser_Info.companyName,
          recruitName: rowData.recruitName,
          id: rowData.id,
          adGrade: rowData.adGrade,
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
    <FirstVVIPComponent
      inputData={inputData}
      moveTo={moveTo}></FirstVVIPComponent>
  );
}
