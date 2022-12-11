import { useNavigate } from "react-router-dom";
import FooterComponent from "./Component";

const FooterContainer = () => {
  const navigate = useNavigate();
  const moveTo = (where) => {
    navigate(`/${where}`);
  };

  return <FooterComponent moveTo={moveTo} />;
};

export default FooterContainer;
