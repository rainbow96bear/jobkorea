import { useNavigate } from "react-router-dom";
import MainLoginBoardComponent from "./Component";
import { useMediaQuery } from "react-responsive";

const MainLoginBoardContainer = ({ loginIsClick, setLoginIsClick }) => {
  const navigate = useNavigate();
  const loginOnClick = () => {
    setLoginIsClick(!loginIsClick);
  };
  const oneScreen = useMediaQuery({
    minWidth: 1300,
  });

  const twoScreen = useMediaQuery({
    minWidth: 720,
  });

  const threeScreen = useMediaQuery({
    minWidth: 640,
  });

  const moveTo = (where) => {
    navigate(`/${where}`);
  };
  return (
    <MainLoginBoardComponent
      moveTo={moveTo}
      loginOnClick={loginOnClick}
      setLoginIsClick={setLoginIsClick}
      oneScreen={oneScreen}
      twoScreen={twoScreen}
    ></MainLoginBoardComponent>
  );
};

export default MainLoginBoardContainer;
