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

  const navigate = useNavigate();

  const moveTo = (where) => {
    navigate(`${where}`);
  };

  useEffect(() => {
    console.log(companyUser);
    axios
      .post("/api/recruit/sidebar", { companyUser: companyUser })
      .then((data) => {
        console.log(data.data);
        setRecruitInfo(data.data);
      });
  }, [companyUser]);

  return (
    <RecruitModalComponent
      onClick={onClick}
      companyUser={companyUser}
      isCompanyMordal={isCompanyMordal}
      recruitInfo={recruitInfo}
      moveTo={moveTo}
    ></RecruitModalComponent>
  );
}
