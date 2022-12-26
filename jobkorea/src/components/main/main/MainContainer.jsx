import MainComponent from "./MainComponent";
import axios from "axios";
import { useEffect, useState } from "react";

export default function MainContainer() {
  const [test, setTest] = useState(false);
  const [individualId, setIndividualId] = useState("");

  useEffect(() => {
    axios.post("/api/individualuser/autologin").then((data) => {
      if (data.data) {
        setIndividualId(data.data.individualId);
        setTest(true);
      }
    });
  }, []);

  return (
    <MainComponent
      test={test}
      setTest={setTest}
      individualId={individualId}
      setIndividualId={setIndividualId}
    ></MainComponent>
  );
}
