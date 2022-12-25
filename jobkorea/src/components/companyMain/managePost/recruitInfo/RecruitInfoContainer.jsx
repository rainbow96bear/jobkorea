import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RecruitInfoComponent from "./RecruitInfoComponent";
import { useDispatch } from "react-redux";
import { action } from "../../../../modules/recruit";

export default function RecruitInfoContainer() {
  const [myRecruit, setMyRecruit] = useState([]);
  const [applyUserInfo, setApplyUserInfo] = useState([]);
  const params = useParams();
  const [btnRender, setBtnRender] = useState(false);
  const [sec, setSec] = useState(0);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  let date = new Date(
    myRecruit[0]?.createdAt.slice(0, 10) +
      " " +
      myRecruit[0]?.createdAt.slice(11, 19)
  );

  date.setHours(date.getHours() + 8);
  date.setDate(date.getDate() + +myRecruit[0]?.day);

  let today = new Date();
  let gap = date.getTime() - today.getTime();
  let day = Math.ceil(gap / (1000 * 60 * 60 * 24));
  let hour = Math.ceil((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let min = Math.ceil((gap % (1000 * 60 * 60)) / (1000 * 60));

  useEffect(() => {}, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSec(Math.ceil((gap % (1000 * 60)) / 1000));
      dispatch(
        action.recruitAdDay({
          AdDay: day,
          AdHour: hour,
          AdMin: min,
          AdSec: sec,
        })
      );
    }, 1000);
    return () => clearTimeout(timer);
  }, [sec]);

  const moveTo = (where) => {
    navigate(`${where}`);
  };

  const passOnclick = (individualId) => {
    axios
      .post("http://localhost:8080/api/recruit/pass", {
        recruitId: params.id,
        individualId: individualId,
      })
      .then(() => {
        setBtnRender(!btnRender);
      });
  };

  const failOnclick = (individualId) => {
    axios
      .post("http://localhost:8080/api/recruit/fail", {
        recruitId: params.id,
        individualId: individualId,
      })
      .then(() => {
        setBtnRender(!btnRender);
      });
  };

  useEffect(() => {
    axios
      .post("http://localhost:8080/api/recruit/whoapply", { id: params.id })
      .then((data) => {
        console.log(data.data);
        setApplyUserInfo(data.data[0].RecruitInfo);
      });
  }, [btnRender]);

  useEffect(() => {
    const myRecruitFunc = async () => {
      try {
        const data = await axios.post(
          "http://localhost:8080/api/recruit/myrecruit",
          { id: params.id }
        );
        const result = data.data;
        setMyRecruit([result]);
      } catch (err) {
        console.error(err);
      }
    };
    myRecruitFunc();
  }, []);

  return (
    <RecruitInfoComponent
      myRecruit={myRecruit}
      moveTo={moveTo}
      applyUserInfo={applyUserInfo}
      passOnclick={passOnclick}
      failOnclick={failOnclick}
      btnRender={btnRender}
      setSec={setSec}
      sec={sec}
      day={day}
      hour={hour}
      min={min}
    ></RecruitInfoComponent>
  );
}
