import RecruitComponent from "./RecruitComponent";
import axios from "axios";
import { useState } from "react";

export default function RecruitContainer() {
  const [recruitInfo, SetrecruitInfo] = useState([]);

  const applyinformation = () => {
    // const data = await axios.post(
    //   "http://localhost:8080/api/recruit/recruitInfo",
    //   {}
    // );
    // SetrecruitInfo([...recruitInfo, data.data]);
    try {
      axios
        .post("http://localhost:8080/api/recruit/recruitInfo")
        .then((data) => {
          const Inforecruit = data.data;
          // console.log(Inforecruit);
          // SetrecruitInfo([...recruitInfo, Inforecruit]);
        });
    } catch (err) {
      console.error(err);
    }
  };
  // applyinformation();

  return (
    <RecruitComponent
      applyinformation={applyinformation}
      recruitInfo={recruitInfo}
    ></RecruitComponent>
  );
}
