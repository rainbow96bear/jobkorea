import AfterLogInComponent from "./AfterLogInComponent";
import axios from "axios";

const AfterLogInContainer = ({ setTest, individualId }) => {
  const onClick = async () => {
    await axios.post("http://localhost:8080/api/individualuser/logout");
  };
  return (
    <AfterLogInComponent
      onClick={onClick}
      setTest={setTest}
      individualId={individualId}
    ></AfterLogInComponent>
  );
};

export default AfterLogInContainer;
