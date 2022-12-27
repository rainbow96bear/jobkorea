import axios from "axios";
import { useEffect, useState } from "react";
import { action } from "../../../../modules/button";
import { useDispatch, useSelector } from "react-redux";

import RecruitModalComponent from "./Component";
import { useNavigate } from "react-router-dom";

export default function RecruitModalContainer({}) {
  const isCompanyMordal = useSelector((state) => state.button.value);
  const companyUser = useSelector((state) => state.companyUser.value);
  const onClick = () => {
    dispatch(action.companyMordal());
    console.log(isCompanyMordal);
  };
  const dispatch = useDispatch();

  const [recruitInfo, setRecruitInfo] = useState([]);
  const [day, setDay] = useState([]);

  const navigate = useNavigate();

  const moveTo = (where) => {
    navigate(`${where}`);
  };

  const setDate = (idx) => {
    let date = new Date(
      recruitInfo[idx]?.createdAt?.slice(0, 10) +
        " " +
        recruitInfo[idx]?.createdAt?.slice(11, 19)
    );

    date.setHours(date.getHours() + 9);
    date.setDate(date.getDate() + +recruitInfo[idx].day);

    let today = new Date();
    let gap = date.getTime() - today.getTime();
    setDay((state) => [...state, Math.ceil(gap / (1000 * 60 * 60 * 24)) - 1]);
  };

  let intervalId;

  useEffect(() => {
    console.log(companyUser);
    axios
      .post("/api/recruit/sidebar", { companyUser: companyUser })
      .then((data) => {
        console.log(data.data);
        setRecruitInfo(data.data);
        return data;
      })
      .then((data) => {});
  }, [companyUser]);

  useEffect(() => {
    if (recruitInfo.length != 0) {
      recruitInfo.map((_, index) => {
        setDate(index);
      });
    }
  }, [recruitInfo]);

  return (
    <RecruitModalComponent
      onClick={onClick}
      companyUser={companyUser}
      isCompanyMordal={isCompanyMordal}
      recruitInfo={recruitInfo}
      moveTo={moveTo}
      day={day}
      setDate={setDate}
    ></RecruitModalComponent>
  );
}
