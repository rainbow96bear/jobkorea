import { useNavigate } from "react-router-dom";
import MainLoginBoardComponent from "./Component";
import { useMediaQuery } from "react-responsive";

const MainLoginBoardContainer = ({ loginIsClick, setLoginIsClick }) => {
  const navigate = useNavigate();
  const loginOnClick = () => {
    setLoginIsClick(!loginIsClick);
  };
  const midScreen = useMediaQuery({
    minWidth: 100,
  });

  const moveTo = (where) => {
    navigate(`/${where}`);
  };
  return (
    <MainLoginBoardComponent
      moveTo={moveTo}
      loginOnClick={loginOnClick}
      setLoginIsClick={setLoginIsClick}
      midScreen={midScreen}
    ></MainLoginBoardComponent>
  );
};

export default MainLoginBoardContainer;
