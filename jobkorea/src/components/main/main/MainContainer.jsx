import MainComponent from "./MainComponent";
import axios from "axios";
import { useEffect, useState } from "react";

export default function MainContainer() {
  const [test, setTest] = useState(false);
  const [individualId, setIndividualId] = useState("");
  const [individualPhoto, setIndividualPhoto] = useState("");

  useEffect(() => {
    axios.post("/api/individualuser/autologin").then((data) => {
      console.log(data.data.individualPhoto);
      if (data.data) {
        setIndividualId(data.data.individualId);
        setIndividualPhoto(data.data.individualPhoto);
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
      individualPhoto={individualPhoto}></MainComponent>
  );
}
