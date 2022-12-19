import ManagePostComponent from "./ManagePostComponent";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function ManagePostContainer() {
  const [inputData, setInputData] = useState([]);

  const removeRecruit = (idData) => {
    try {
      console.log(idData);
      axios
        .post("http://localhost:8080/api/recruit/remove", { id: idData })
        .then((data) => {
          console.log(data);
        });
      window.location.reload();

      alert("삭제되었습니다");
    } catch (e) {
      console.error(e.message);
    }
  };

  useEffect(() => {
    try {
      axios.post("http://localhost:8080/api/recruit/call").then((data) => {
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
        setInputData([...inputData, _inputData]);
        console.log([...inputData, _inputData]);
      });
    } catch (e) {
      console.error(e.message);
    }
  }, []);

  return (
    <WrapBox>
      <ManagePostComponent
        inputData={inputData}
        removeRecruit={removeRecruit}
      />
    </WrapBox>
  );
}

const WrapBox = styled.div`
  margin: 50px 0;
`;
