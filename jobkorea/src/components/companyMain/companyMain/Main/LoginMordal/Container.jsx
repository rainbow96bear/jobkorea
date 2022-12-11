import MordalComponent from "./Component";
import { useNavigate } from "react-router-dom";

const LoginMordalContainer = ({ setLoginIsClick }) => {
  const loginOnClick = () => {
    setLoginIsClick(false);
  };
  const navigate = useNavigate();
  const moveTo = (where) => {
    navigate(`/${where}`);
  };
  return (
    <MordalComponent
      loginOnClick={loginOnClick}
      moveTo={moveTo}
    ></MordalComponent>
  );
};

export default LoginMordalContainer;
