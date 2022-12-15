import AfterLogInComponent from "./AfterLogInComponent";
import axios from "axios";

const AfterLogInContainer = ({
  setTest,
  individualName,
  individualId,
  individualPw,
  setIndividualName,
  setIndividualId,
  setIndividualPw,
}) => {
  const onClick = async () => {
    await axios.post("http://localhost:8080/api/individualuser/logout", {
      individualId: "1",
    });
  };
  return (
    <AfterLogInComponent
      onClick={onClick}
      setTest={setTest}
      individualName={individualName}
      individualId={individualId}
      individualPw={individualPw}
      setIndividualName={setIndividualName}
      setIndividualId={setIndividualId}
      setIndividualPw={setIndividualPw}
    ></AfterLogInComponent>
  );
};

export default AfterLogInContainer;
