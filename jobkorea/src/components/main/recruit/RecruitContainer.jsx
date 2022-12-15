import RecruitComponent from "./RecruitComponent";
import axios from "axios";
import { useEffect, useState } from "react";

export default function RecruitContainer() {
  const [recruitInfo, SetrecruitInfo] = useState({});

  useEffect(() => {
    const newfunction = async () => {
      try {
        const data = await axios.post(
          "http://localhost:8080/api/recruit/recruitInfo",
          {}
        );
        const result = data.data;
        // const result = data.data.map((item, index) => ({
        //   Area: item.recruitArea,
        //   Num: item.recruitNum,
        //   Exp: item.isExp,
        //   Task: item.myTask,
        //   Department: item.workDepartment,
        //   Rank: item.workRank,
        //   Condition: item.condition,
        //   Edu: item.edu,
        // }));

        // const result = data.data.map((item) => ({
        //   Area: item.recruitArea,
        //   Num: item.recruitNum,
        //   Exp: item.isExp,
        //   Task: item.myTask,
        //   Department: item.workDepartment,
        //   Rank: item.workRank,
        //   Condition: item.condition,
        //   Edu: item.edu,
        // }));

        SetrecruitInfo([...recruitInfo, result]);
      } catch (err) {
        console.error(err);
      }
    };
    newfunction();
  }, []);

  // const data = await axios.post(
  //   "http://localhost:8080/api/recruit/recruitInfo",
  //   {}
  // );
  // SetrecruitInfo([...recruitInfo, data.data]);
  // try {
  //   axios
  //     .post("http://localhost:8080/api/recruit/recruitInfo")
  //     .then((data) => {
  //       const Inforecruit = data.data;
  //       // console.log(Inforecruit);
  //       // SetrecruitInfo([...recruitInfo, Inforecruit]);
  //     });
  // } catch (err) {
  //   console.error(err);
  // }

  return <RecruitComponent></RecruitComponent>;
}
