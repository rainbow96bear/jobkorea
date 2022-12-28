import AfterLogInComponent from "./AfterLogInComponent";
import axios from "axios";
import { useEffect } from "react";

const AfterLogInContainer = ({ setTest, individualId, individualPhoto }) => {
  const onClick = async () => {
    const data = await axios.post("/api/individualuser/logout");
    if (data.status == 12341234) {
      await setTest(false);
    }
  };
  return (
    <AfterLogInComponent
      onClick={onClick}
      setTest={setTest}
      individualId={individualId}
      individualPhoto={individualPhoto}></AfterLogInComponent>
  );
};

export default AfterLogInContainer;
