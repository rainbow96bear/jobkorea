import RankingComponent from "./RankingComponent";
import axios from "axios";
import { useEffect, useState } from "react";

export default function RankingContainer() {
  const [inputData, setInputData] = useState([]);

  useEffect(() => {
    try {
      axios.post("/api/recruit/ranking").then((data) => {
        const _inputData = data.data.map((rowData) => ({
          CompanyName: rowData.Companyuser_Info.companyName,
        }));
        setInputData(_inputData);
        console.log(data.data);
        console.log([...inputData, _inputData]);
      });
    } catch (e) {
      console.error(e.message);
    }
  }, []);

  return <RankingComponent inputData={inputData}></RankingComponent>;
}
