import { useEffect, useState } from "react";
import axios from "axios";
import VVIPComponent from "./VVIPComponent";

export default function VVIPContainer() {
  const [inputData, setInputData] = useState([]);

  useEffect(() => {
    try {
      axios.post("/api/recruit/vvip").then((data) => {
        const _inputData = data.data.map((rowData) => ({
          companylogo: rowData.Companyuser_Info.companylogo,
          CompanyName: rowData.Companyuser_Info.companyName,
          recruitName: rowData.recruitName,
        }));
        setInputData([...inputData, _inputData]);
        console.log(data.data);
        console.log([...inputData, _inputData]);
      });
    } catch (e) {
      console.error(e.message);
    }
  }, []);

  return <VVIPComponent inputData={inputData}></VVIPComponent>;
}
