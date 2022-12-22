import HeaderComponent from "./HeaderComponent";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

export default function HeaderContainer() {
  const smallScreen = useMediaQuery({ minWidth: 1060 });
  const midScreen = useMediaQuery({ minWidth: 1200 });
  const [dropDown, setDropDown] = useState(false);
  const navigate = useNavigate();
  const moveTo = (where) => {
    navigate(`/${where}`);
  };
  return (
    <HeaderComponent
      moveTo={moveTo}
      dropDown={dropDown}
      setDropDown={setDropDown}
      smallScreen={smallScreen}
      midScreen={midScreen}
    ></HeaderComponent>
  );
}
