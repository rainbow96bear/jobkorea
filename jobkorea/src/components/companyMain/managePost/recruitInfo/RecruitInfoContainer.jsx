import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RecruitInfoComponent from "./RecruitInfoComponent";

export default function RecruitInfoContainer() {
  const [myRecruit, setMyRecruit] = useState([]);
  const [applyUserInfo, setApplyUserInfo] = useState([]);
  const params = useParams();
  const [btnRender, setBtnRender] = useState(false);

  const navigate = useNavigate();

  const moveTo = (where) => {
    navigate(`${where}`);
  };

  const passOnclick = (individualId) => {
    axios.post("http://localhost:8080/api/recruit/pass", {
      recruitId: params.id,
      individualId: individualId,
    });
    setBtnRender(!btnRender);
  };

  const failOnclick = (individualId) => {
    axios.post("http://localhost:8080/api/recruit/fail", {
      recruitId: params.id,
      individualId: individualId,
    });
    setBtnRender(!btnRender);
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
    ></RecruitInfoComponent>
  );
}
