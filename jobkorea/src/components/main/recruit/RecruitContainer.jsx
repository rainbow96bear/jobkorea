import RecruitComponent from "./RecruitComponent";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function RecruitContainer() {
  const navigate = useNavigate();
  const [recruitInfo, SetrecruitInfo] = useState([]);
  const params = useParams();

  useEffect(() => {
    // console.log(params.id);
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
        // console.log(result);
      } catch (err) {
        console.error(err);
      }
    };
    newfunction();
  }, []);

  const applycanclebutton = async () => {
    try {
      const data = await axios.post("http://localhost:8080/api/apply/cancle", {
        id: params.id,
      });
      if (data.data == "취소되었습니다") {
        alert("취소되었습니다");
        navigate("/apply");
      } else {
        alert("로그인 해주세요");
        navigate("/");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const applybutton = async () => {
    try {
      const data = await axios.post("http://localhost:8080/api/apply/now", {
        id: params.id,
      });
      if (data.data == "지원성공") {
        alert("즉시지원완료");
        navigate("/apply");
      } else {
        alert("로그인 해야 이용가능합니다");
        navigate("/");
      }
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
      applycanclebutton={applycanclebutton}
    ></RecruitComponent>
  );
}
