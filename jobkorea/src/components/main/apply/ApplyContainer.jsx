import axios from "axios";
import ApplyComponent from "./ApplyComponent";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

export default function ApplyContainer() {
  const [application, setApplication] = useState([]);
  const navigate = useNavigate();
  const firstScreen = useMediaQuery({ minWidth: 1200 });
  const midScreen = useMediaQuery({ minWidth: 500 });
  const [reload, setReload] = useState(true);
  useEffect(() => {
    try {
      axios
        .post("/api/apply/jobApplication", { application })
        .then(({ data }) => {
          if (data == "다시 로그인해주세요") {
            alert("다시로그인해주세요");
            navigate("/");
          } else {
            setApplication(data);
            console.log(data);
            // console.log(data);
            // console.log(item.data[0].IndividualInfo[0].recruitName);
            // const jobApplicationData = item.map((itemone) => {
            //   console.log(itemone);
            // });
            // const applicationData = data.map((item) => ({
            //   recruitName: item.recruitName,
            //   myTask: item.myTask,
            //   workRank: item.workRank,
            //   area: item.area,
            // }));
            // setApplication([...application, applicationData]);
            // setApplication(data);
          }
        });

      console.log(reload);
    } catch (err) {
      console.error(err);
    }
  }, [reload]);

  return (
    <ApplyComponent
      application={application}
      firstScreen={firstScreen}
      midScreen={midScreen}
      setReload={setReload}
      reload={reload}
    ></ApplyComponent>
  );
}
