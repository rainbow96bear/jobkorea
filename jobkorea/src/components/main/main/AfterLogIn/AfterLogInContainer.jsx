import AfterLogInComponent from "./AfterLogInComponent";
import axios from "axios";
import { useEffect } from "react";

const AfterLogInContainer = ({ setTest, individualId, individualPhoto }) => {
  const onClick = async () => {
    await axios.post("http://localhost:8080/api/individualuser/logout");
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
