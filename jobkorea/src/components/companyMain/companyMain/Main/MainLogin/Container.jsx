import { useNavigate } from "react-router-dom";
import MainLoginBoardComponent from "./Component";
import { useMediaQuery } from "react-responsive";

const MainLoginBoardContainer = ({ loginIsClick, setLoginIsClick }) => {
  const navigate = useNavigate();
  const loginOnClick = () => {
    setLoginIsClick(!loginIsClick);
  };
  const XLScreen = useMediaQuery({
    minWidth: 1300,
  });

  const LScreen = useMediaQuery({
    minWidth: 720,
  });

  const MScreen = useMediaQuery({
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
      XLScreen={XLScreen}
      LScreen={LScreen}
      MScreen={MScreen}
    ></MainLoginBoardComponent>
  );
};

export default MainLoginBoardContainer;
