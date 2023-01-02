import RecruitComponent from "./RecruitComponent";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

export default function RecruitContainer() {
  const navigate = useNavigate();
  const [recruitInfo, SetrecruitInfo] = useState([]);
  const [sec, setSec] = useState(0);

  const params = useParams();
  const firstScreen = useMediaQuery({ minWidth: 1200 });
  // const secondScreen = useMediaQuery({ maxWidth: 1200 });

  const midScreen = useMediaQuery({ maxWidth: 900 });
  const bottomScreen = useMediaQuery({ maxWidth: 600 });

  console.log(params);
  useEffect(() => {
    // console.log(params.id);
    const newfunction = async () => {
      try {
        const data = await axios.post("/api/recruit/recruitInfo", {
          id: params.id,
        });
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
      const data = await axios.post("/api/apply/cancle", {
        id: params.id,
      });
      if (data.data == "지원하지않은 공고입니다") {
        alert("지원하지않은 공고입니다");
      } else if (data.data == "취소되었습니다") {
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
      const data = await axios.post("/api/apply/now", {
        id: params.id,
      });

      if (data.data == "즉시지원 되었습니다") {
        alert("즉시지원완료");
        navigate("/apply");
      } else if (data.data == "이미 지원한 공고입니다") {
        alert("이미 지원한 공고입니다");
      } else {
        alert("로그인 해야 이용가능합니다");
        navigate("/");
      }
    } catch (err) {
      console.error(err);
    }
  };
  // const data = await axios.post(
  //   "/api/recruit/recruitInfo",
  //   {}
  // );
  // SetrecruitInfo([...recruitInfo, data.data]);
  // try {
  //   axios
  //     .post("/api/recruit/recruitInfo")
  //     .then((data) => {
  //       const Inforecruit = data.data;
  //       // console.log(Inforecruit);
  //       // SetrecruitInfo([...recruitInfo, Inforecruit]);
  //     });
  // } catch (err) {
  //   console.error(err);
  // }

  let date = new Date(
    recruitInfo[0]?.createdAt?.slice(0, 10) +
      " " +
      recruitInfo[0]?.createdAt?.slice(11, 19)
  );

  date.setHours(date.getHours() + 9);
  date.setDate(date.getDate() + +recruitInfo[0]?.day);

  let today = new Date();
  let gap = date.getTime() - today.getTime();
  let day = Math.ceil(gap / (1000 * 60 * 60 * 24)) - 1;
  let hour = Math.ceil((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) - 1);
  let min = Math.ceil((gap % (1000 * 60 * 60)) / (1000 * 60)) - 1;

  useEffect(() => {
    const timer = setTimeout(() => {
      setSec(Math.ceil((gap % (1000 * 60)) / 1000));
    }, 1000);
    return () => clearTimeout(timer);
  }, [sec]);
  return (
    <RecruitComponent
      recruitInfo={recruitInfo}
      applybutton={applybutton}
      applycanclebutton={applycanclebutton}
      firstScreen={firstScreen}
      midScreen={midScreen}
      bottomScreen={bottomScreen}
      day={day}
      sec={sec}
      hour={hour}
      min={min}
    ></RecruitComponent>
  );
}
