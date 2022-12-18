import RecruitComponent from "./RecruitComponent";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function RecruitContainer() {
  const [recruitInfo, SetrecruitInfo] = useState([]);
  const params = useParams();

  useEffect(() => {
    const newfunction = async () => {
      try {
        const data = await axios.post(
          "http://localhost:8080/api/recruit/recruitInfo",
          { id: params.id }
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

        SetrecruitInfo([result]);
        console.log(result);
      } catch (err) {
        console.error(err);
      }
    };
    newfunction();
  }, []);

  const applybutton = async () => {
    try {
      const data = await axios.post("http://localhost:8080/api/apply/now", {
        recruitInfo,
      });
      console.log(data.data);
    } catch (err) {
      console.error(err);
    }
  };
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

  return (
    <RecruitComponent
      recruitInfo={recruitInfo}
      applybutton={applybutton}
    ></RecruitComponent>
  );
}
