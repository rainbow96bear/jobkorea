import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RecruitInfoComponent from "./RecruitInfoComponent";

export default function RecruitInfoContainer() {
  const [myRecruit, setMyRecruit] = useState([]);
  const params = useParams();

  const navigate = useNavigate();

  const moveTo = (where) => {
    navigate(`${where}`);
  };

  useEffect(() => {
    const myRecruitFunc = async () => {
      try {
        const data = await axios.post(
          "http://localhost:8080/api/recruit/myrecruit",
          { id: params.id }
        );
        const result = data.data;
        setMyRecruit([result]);
        console.log(myRecruit);
      } catch (err) {
        console.error(err);
      }
    };
    myRecruitFunc();
  }, []);

  return (
    // <div>test</div>
    <RecruitInfoComponent
      myRecruit={myRecruit}
      moveTo={moveTo}
    ></RecruitInfoComponent>
  );
}
