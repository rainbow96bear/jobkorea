import ManagePostComponent from "./ManagePostComponent";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function ManagePostContainer() {
  const [inputData, setInputData] = useState([]);

  const removeRecruit = (idData) => {
    try {
      console.log(idData);
      axios.post("/api/recruit/remove", { id: idData }).then((data) => {
        console.log(data);
      });
      window.location.reload();

      alert("삭제되었습니다");
    } catch (e) {
      console.error(e.message);
    }
  };

  // useEffect(() => {
  //   axios
  //     .post("/api/recruit/whoapply", { id: 2 })
  //     .then((data) => {
  //       console.log(data);
  //     });
  // });

  useEffect(() => {
    try {
      axios.post("/api/recruit/call").then((data) => {
        console.log(data.data);
        const _inputData = data.data.map((rowData) => ({
          Id: rowData.id,
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
          PayKinds: rowData.payKinds,
          CompanyName: rowData.Companyuser_Info.companyName,
          CompanyLogo: rowData.Companyuser_Info.companylogo,
        }));
        setInputData(_inputData);
        console.log(_inputData);
      });
    } catch (e) {
      console.error(e.message);
    }
  }, []);

  return (
    <ManagePostComponent inputData={inputData} removeRecruit={removeRecruit} />
  );
}
