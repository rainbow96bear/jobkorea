import MainComponent from "./MainComponent";
import { useMediaQuery } from "react-responsive";
import axios from "axios";
import { useEffect, useState } from "react";

export default function MainContainer() {
  const smallScreen = useMediaQuery({ minWidth: 1200 });
  const midScreen = useMediaQuery({ minWidth: 920 });
  // const navigate = useNavigate();
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
      smallScreen={smallScreen}
      midScreen={midScreen}
      test={test}
      setTest={setTest}
      individualId={individualId}
      setIndividualId={setIndividualId}
    ></MainComponent>
  );
}
