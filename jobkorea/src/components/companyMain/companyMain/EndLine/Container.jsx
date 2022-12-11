import EndLineComponent from "./Component";
import { useNavigate } from "react-router-dom";

const EndLineContainer = () => {
  const navigate = useNavigate();
  const moveTo = (where) => {
    navigate(`/${where}`);
  };

  return <EndLineComponent moveTo={moveTo} />;
};

export default EndLineContainer;
