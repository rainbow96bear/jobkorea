import axios from "axios";
import ApplyComponent from "./ApplyComponent";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ApplyContainer() {
  const [application, setApplication] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    try {
      axios
        .post("http://localhost:8080/api/apply/jobApplication", { application })
        .then(({ data }) => {
          if (data == "다시 로그인해주세요") {
            alert("다시로그인해주세요");
            navigate("/");
          } else {
            setApplication(data);
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
    } catch (err) {
      console.error(err);
    }
  }, []);

  return <ApplyComponent application={application}></ApplyComponent>;
}
