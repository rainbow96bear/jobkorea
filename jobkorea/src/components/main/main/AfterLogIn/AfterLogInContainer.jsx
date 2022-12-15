import AfterLogInComponent from "./AfterLogInComponent";
import axios from "axios";

const AfterLogInContainer = ({ setTest, individualName }) => {
  const onClick = async () => {
    await axios.post("http://localhost:8080/api/individualuser/logout", {
      individualId: "1",
    });
  };
  console.log(individualName);
  return (
    <AfterLogInComponent
      individualName={individualName}
      onClick={onClick}
      setTest={setTest}
    ></AfterLogInComponent>
  );
};

export default AfterLogInContainer;
