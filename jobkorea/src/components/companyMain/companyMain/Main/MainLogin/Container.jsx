import { useNavigate } from "react-router-dom";
import MainLoginBoardComponent from "./Component";

const MainLoginBoardContainer = ({ loginIsClick, setLoginIsClick }) => {
  const navigate = useNavigate();
  const loginOnClick = () => {
    setLoginIsClick(!loginIsClick);
  };

  const moveTo = (where) => {
    navigate(`/${where}`);
  };
  return (
    <MainLoginBoardComponent
      moveTo={moveTo}
      loginOnClick={loginOnClick}
    ></MainLoginBoardComponent>
  );
};

export default MainLoginBoardContainer;
